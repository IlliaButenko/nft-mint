import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core';

import { injected, walletconnect, walletlink } from '../utils/connector';
import Web3 from 'web3';
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector';
import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from '@web3-react/walletconnect-connector';
import { useEffect } from 'react';
import { NotificationManager } from "react-notifications";

const handleError = (error) => {
  if (error instanceof NoEthereumProviderError) {
    NotificationManager.error(
      'No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.'
    );
  } else if (error instanceof UnsupportedChainIdError) {
    console.log(error);
    NotificationManager.error("Network Error, Please connect to BSC Mainnet");
  } else if (
    error instanceof UserRejectedRequestErrorInjected ||
    error instanceof UserRejectedRequestErrorWalletConnect
  ) {
    NotificationManager.error('Please authorize this website to access your Ethereum account.');
  } else if ((error).code === -32002) {
    NotificationManager.error('Already processing ethereum request Accounts. Please accept the request.');
  } else {
    console.error(error.toString());
    NotificationManager.error('An unknown error occurred. Check the console for more details.');
  }
};

export const useWallet = () => {
  const { activate, connector, ...props } = useWeb3React();
  useEffect(() => {
    const { ethereum } = window;

    if (ethereum) {
      (async () => {
        try {
          const web3 = new Web3(ethereum.currentProvider || (window ).web3.currentProvider);
          const accounts= await web3.eth.getAccounts();
          if (accounts.length > 0) {
            await activate(injected, (error) => handleError(error));
          }
        } catch (err) {
          // Handle Error
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const connect = async (type) => {
    try {
      if (type === 'injected') {
        const { ethereum } = window ;
        if(window.web3.currentProvider.isMetaMask){
          console.log("Metamask is installed");
        } else {
          window.location.href="https://metamask.io/download";
        }
        if (!ethereum) {        
          return NotificationManager.error(
            'No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.'
          );
        }
        return await activate(injected, undefined, true, (error) => handleError(error));
      }

      if (type === 'walletconnect') {
        console.log("wallet connection",walletconnect);
        return await activate(walletconnect, undefined, true, (error) => handleError(error));
      }

      if (type === 'walletlink') {
        return await activate(walletlink, undefined, true, (error) => handleError(error));
      }
    } catch (err) {
      console.log('Connect wallet err', err);
      walletconnect.walletConnectProvider = null;
    }
  };

  return { ...props, connector,connect };
};


