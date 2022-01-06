import { ethers, waffle } from "hardhat"
import { expect } from "chai"
import { StakingToken, RewardToken, Staking, StakedToken, Staking__factory, StakingToken__factory, RewardToken__factory } from '../src/types'
import { SignerWithAddress } from 'hardhat-deploy-ethers/signers'

describe('Staking contract', function () {
    let accounts: SignerWithAddress[]
    let StakingTokenContract: StakingToken
    let RewardTokenContract: RewardToken
    let StakingContract: Staking
    let StakedTokenContract: StakedToken

    beforeEach(async () => {
        accounts = await ethers.getSigners()

        const StakingTokenContractFactory: StakingToken__factory = await ethers.getContractFactory("StakingToken")
        StakingTokenContract = (await StakingTokenContractFactory.deploy())
        await StakingTokenContract.deployed()

        const RewardTokenContractFactory: RewardToken__factory = await ethers.getContractFactory("RewardToken")
        RewardTokenContract = (await RewardTokenContractFactory.deploy())
        await RewardTokenContract.deployed()
        
        const StakedTokenContractFactory = await ethers.getContractFactory("StakedToken")
        StakedTokenContract = (await StakedTokenContractFactory.deploy()) as StakedToken
        await StakedTokenContract.deployed()
    
        const StakingContractFactory: Staking__factory = await ethers.getContractFactory("Staking")
        StakingContract = (await StakingContractFactory.deploy(StakingTokenContract.address, RewardTokenContract.address, StakedTokenContract.address))
        await StakingContract.deployed()
        
        StakedTokenContract.updateStakingAddress(StakingContract.address)
        StakingTokenContract.mint(accounts[0].address, "1000")
        StakingTokenContract.mint(accounts[1].address, "1000")
        RewardTokenContract.mint(StakingContract.address, "1000")
    })

    describe('Stake', () => {
        it('should check if amount is zero', async() => {
            await expect(StakingContract.stake(0)).to.be.revertedWith("Cannot stake 0")
        })

        it('should stake', async () => {
            await StakingTokenContract.connect(accounts[0]).approve(StakingContract.address, "100")
            
            expect(await StakingContract.totalSupply()).to.equal("0")
            expect(await StakedTokenContract.balanceOf(accounts[0].address)).to.equal("0")

            await StakingContract.stake(100)
            expect(await StakingContract.totalSupply()).to.equal("100")
            expect(await StakedTokenContract.balanceOf(accounts[0].address)).to.equal("100")
        })
    })

    describe('Unstake', () => {
        it('should failed if an amount is insufficient', async() => {
            await StakingTokenContract.approve(StakingContract.address, "100")
            await StakingContract.stake(100)
            await expect(StakingContract.unstake(0)).to.be.revertedWith("Cannot withdraw 0")
            await expect(StakingContract.unstake(200)).to.be.revertedWith("Insufficient amount")
        });

        it('should unstake', async () => {
            await StakingTokenContract.approve(StakingContract.address, "100")
            await StakingContract.stake(100)
            
            await StakedTokenContract.approve(StakingContract.address, "50")
            await StakingContract.unstake(50)

            expect(await StakingContract.totalSupply()).to.equal("50")
            expect(await StakedTokenContract.balanceOf(accounts[0].address)).to.equal("50")
        })
    })

    describe('Get Reward', () => {
        it('should check reward if there is only one staker', async() => {
            await StakingTokenContract.approve(StakingContract.address, "100")
            StakingContract.stake(100)
            await ethers.provider.send("evm_mine", [])
            
            await StakingContract.getReward()
            expect(await RewardTokenContract.balanceOf(accounts[0].address)).to.equal("10")
        });
    })
})
