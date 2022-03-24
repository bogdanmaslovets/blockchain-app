https://eth-ropsten.alchemyapi.io/v2/9LRckr1HFYA1s-7pcVYRPDnWXKG16mTY

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/9LRckr1HFYA1s-7pcVYRPDnWXKG16mTY',
      accounts: [PRIVATE_KEY]
    }
  }
}
