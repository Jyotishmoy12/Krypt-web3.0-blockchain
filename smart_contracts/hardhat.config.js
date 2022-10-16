
require('dotenv').config();
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  defaultNetwork: "goerli",
  networks: {
    hardhat:{},
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/e6oXQJQqfL8a0bv-FFZs1oVGAiXpARPJ',
      accounts: ['62998fac294363b7ebacd7f824b385d93c2711703b330d47e2c300a62b635e1f'],
    },
  },
};