/* eslint-disable import/prefer-default-export */
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import { NETWORK_CHAIN_IDS, INFURA_ENDPOINT, INFURA_ID } from './constants';

export const injected = new InjectedConnector({
  supportedChainIds: [NETWORK_CHAIN_IDS.mainnet],  //, NETWORK_CHAIN_IDS.mainnet
});

export const walletconnect = new WalletConnectConnector({
  infuraId: INFURA_ID,
  bridge: 'https://bridge.walletconnect.org',
  supportedChainIds: [NETWORK_CHAIN_IDS.mainnet],
  rpc: { 1: INFURA_ENDPOINT },
  qrcode: true,
  pollingInterval: 8000,
});

export const walletlink = new WalletLinkConnector({
  url: INFURA_ENDPOINT,
  appName: 'Halloween Bear',
  supportedChainIds: [NETWORK_CHAIN_IDS.mainnet, NETWORK_CHAIN_IDS.mainnet],
});
