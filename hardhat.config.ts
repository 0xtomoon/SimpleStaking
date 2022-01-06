/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 import 'hardhat-deploy';
 import 'hardhat-deploy-ethers';
 import '@typechain/hardhat';
 import '@nomiclabs/hardhat-ethers';
 import '@nomiclabs/hardhat-waffle';

export default {
  solidity: "0.8.0",
  typechain: {
    outDir: 'src/types',
    target: 'ethers-v5',
  },
};
