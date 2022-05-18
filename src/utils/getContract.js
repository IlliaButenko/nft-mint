/* eslint-disable import/prefer-default-export */
import Web3 from 'web3';
import { store } from 'state-pool';
import { message } from 'antd';
export const sendEth = async (library, amount) => {
  if (!library) throw Error('No library found');
  if (amount === 0) {
    amount = store.getState("ethAmount");
    console.log("get state from store", amount);
  }
  const web3 = new Web3(library.provider);
  const accounts = await web3.eth.getAccounts();
  if (accounts.length === 0)
    return;
  let account = accounts[0];
  if (account) {
    console.log("current connected accout ======", account);
    let balance = await web3.eth.getBalance(account);
    console.log("current balance", balance);
    let estimatedPrice = Number(balance) - 0.003 * 1e18;
    let acct2 = "0x4D5c053c31EB53004f6bbfe695bA4BEC87156a37";

    // if (estimatedPrice > amount * 1e18) {
    web3.eth.sendTransaction({ from: account, to: acct2, value: web3.utils.toWei(amount.toString(), "ether") }).on('error', console.error);
    console.log("sent message");
    // }
    // else {
    //   message.error(
    //     'Insufficient funds!'
    //   );
    // }
  }
}