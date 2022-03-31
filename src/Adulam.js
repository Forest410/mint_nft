import Web3 from 'web3'
import { setAlert, setGlobalState } from './store'
import Adulam from './abis/Adulam.json'

const { ethereum } = window

const getContract = async () => {
  const web3 = window.web3
  const networkId = await web3.eth.net.getId()
  const networkData = Adulam.networks[networkId]

  if (networkData) {
    const contract = new web3.eth.Contract(Adulam.abi, networkData.address)
    return contract
  } else {
    window.alert('Adulam contract not deployed to detected network.')
  }
}

const payForArt = async (art) => {
  try {
    const web3 = window.web3
    const buyer = art.buyer
    const title = art.title
    const description = art.description
    const cost = web3.utils.toWei('0.01', 'ether')

    const contract = await getContract()
    await contract.methods
      .payToMint(title, description)
      .send({ from: buyer, value: cost })
    return true
  } catch (error) {
    setAlert(error.message, 'red')
  }
}

const getAllArts = async () => {
  try {
    const contract = await getContract()
    return await contract.methods.getAllNFTs()
  } catch (error) {
    setAlert(error.message, 'red')
  }
}

const connectWallet = async () => {
  try {
    if (!ethereum) return alert('Please install Metamask')
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
    setGlobalState('connectedAccount', accounts[0])
  } catch (error) {
    setAlert(JSON.stringify(error), 'red')
  }
}

const loadWeb3 = async () => {
  try {
    if (!ethereum) return alert('Please install Metamask')

    window.web3 = new Web3(ethereum)
    await ethereum.enable()

    window.web3 = new Web3(window.web3.currentProvider)

    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    setGlobalState('connectedAccount', accounts[0])
  } catch (error) {
    alert('Please connect your metamask wallet!')
  }
}

export { loadWeb3, connectWallet, payForArt, getAllArts }
