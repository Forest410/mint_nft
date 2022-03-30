const Adulam = artifacts.require('Adulam')

require('chai').use(require('chai-as-promised')).should()

const toWei = (num) => web3.utils.toWei(num.toString())
const fromWei = (num) => web3.utils.fromWei(num.toString())

const EVM_REVERT = 'VM Exception while processing transaction: revert'

contract('Adulam', ([deployer, buyer1]) => {
  const COST = toWei(0.01)
  const _name = 'Adulam'
  const _symbol = 'ADU'
  const _baseURI =
    'https://bafybeidfpvjszubegtoomoknmc7zcqnay7noteadbwxktw46guhdeqohrm.ipfs.infura-ipfs.io/'

  let adulam, result

  beforeEach(async () => {
    adulam = await Adulam.new(_name, _symbol, _baseURI)
  })

  describe('deployment', () => {
    it('confirms NFT name', async () => {
      result = await adulam.name()
      result.should.equal(_name)
    })

    it('confirms NFT symbol', async () => {
      result = await adulam.symbol()
      result.should.equal(_symbol)
    })

    it('confirms NFT baseURI', async () => {
      result = await adulam.baseURI()
      result.should.equal(_baseURI)
    })

    it('confirms NFT owner', async () => {
      result = await adulam.owner()
      result.should.equal(deployer)
    })

    it('confirms NFT mint cost', async () => {
      result = await adulam.cost()
      result.toString().should.equal(COST)
    })
  })

  describe('Minting', () => {
    describe('Success', () => {
      beforeEach(async () => {
        result = await adulam.payToMint({ from: buyer1, value: COST })
      })

      it('Confirms buyer owns minted token', async () => {
        result = await adulam.ownerOf(1)
        result.should.equal(buyer1)
      })

      it('Confirms supply increase by 1', async () => {
        result = await adulam.supply()
        result.toString().should.equal('1')
      })

      it('confirms NFTs increase array', async () => {
        result = await adulam.getMintedNFTs()
        result.length.toString().should.equal('1')
      })
    })

    describe('Failure', () => {
      it('Prevents mint with 0 value', async () => {
        await adulam
          .payToMint({ from: buyer1, value: 0 })
          .should.be.rejectedWith(EVM_REVERT)
      })

      it('Prevents minting by deployer', async () => {
        await adulam
          .payToMint({ from: deployer, value: COST })
          .should.be.rejectedWith(EVM_REVERT)
      })
    })
  })
})
