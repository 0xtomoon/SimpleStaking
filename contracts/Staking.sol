pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract StakingToken is ERC20, Ownable {
    constructor() ERC20("Staking Token", "TKN") {}

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}

contract RewardToken is ERC20, Ownable {
    constructor() ERC20("Reward Token", "RTKN") {}

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}

contract StakedToken is ERC20, Ownable {
    address public stakingAddress;

    constructor() ERC20("Staked Token", "STKN") {}

    modifier onlyStaking() {
        require(_msgSender() == address(stakingAddress), "Staking contract");
        _;
    }

    function updateStakingAddress(address _stakingAddress) external onlyOwner {
        stakingAddress = _stakingAddress;
    }

    function mint(address to, uint256 amount) public onlyStaking {
        _mint(to, amount);
    }

    function burn(address from, uint256 amount) public onlyStaking {
        _burn(from, amount);
    }
}

contract Staking is ReentrancyGuard {
    using SafeERC20 for IERC20;

    IERC20 public stakingToken;
    IERC20 public rewardToken;
    StakedToken public stakedToken;

    uint256 public rewardRate = 10;
    uint256 public lastUpdateBlock;
    uint256 public rewardPerTokenStored;

    mapping(address => uint256) public userRewardPerTokenPaid;
    mapping(address => uint256) public rewards;

    uint256 private _totalSupply;

    constructor(
        address _stakingToken,
        address _rewardToken,
        address _stakedToken
    ) {
        stakingToken = IERC20(_stakingToken);
        rewardToken = IERC20(_rewardToken);
        stakedToken = StakedToken(_stakedToken);
    }

    function rewardPerToken() public view returns (uint256) {
        if (_totalSupply == 0) {
            return 0;
        }
        return
            rewardPerTokenStored +
            (((block.number - lastUpdateBlock) * rewardRate * 1e18) /
                _totalSupply);
    }

    function earned(address account) public view returns (uint256) {
        uint256 userBalance = stakedToken.balanceOf(account);

        return
            ((userBalance *
                (rewardPerToken() - userRewardPerTokenPaid[account])) / 1e18) +
            rewards[account];
    }

    modifier updateReward(address account) {
        rewardPerTokenStored = rewardPerToken();
        lastUpdateBlock = block.number;

        rewards[account] = earned(account);
        userRewardPerTokenPaid[account] = rewardPerTokenStored;
        _;
    }

    function stake(uint256 _amount)
        external
        nonReentrant
        updateReward(msg.sender)
    {
        require(_amount > 0, "Cannot stake 0");
        _totalSupply += _amount;
        stakingToken.safeTransferFrom(msg.sender, address(this), _amount);
        stakedToken.mint(msg.sender, _amount);
    }

    function unstake(uint256 _amount)
        external
        nonReentrant
        updateReward(msg.sender)
    {
        require(_amount > 0, "Cannot withdraw 0");
        require(
            stakedToken.balanceOf(msg.sender) >= _amount,
            "Insufficient amount"
        );
        _totalSupply -= _amount;
        stakingToken.safeTransfer(msg.sender, _amount);
        stakedToken.burn(msg.sender, _amount);
    }

    function getReward() external nonReentrant updateReward(msg.sender) {
        uint256 reward = rewards[msg.sender];
        rewards[msg.sender] = 0;
        rewardToken.safeTransfer(msg.sender, reward);
    }

    function totalSupply() external view returns (uint256) {
        return _totalSupply;
    }
}
