// import Modal from 'antd/lib/modal/Modal';
import { memo } from 'react';
import Modal from 'react-bootstrap/Modal'
// import {Modal}   from 'antd';

import CoinbaseWalletIcon from '../../assets/images/wallet/coinbaseWalletIcon.svg';
import MetaMask from '../../assets/images/wallet/metamask.png';
import WalletConnectIcon from '../../assets/images/wallet/walletConnectIcon.svg';
import { useWallet } from '../../hooks/useWallet';
import { useWalletModal } from '../../hooks/useWalletModal';
const WalletModal = () => {
  const { connect } = useWallet();
  const { toggleOpen, open } = useWalletModal();
  const handleConnect = async (key) => {
    try {
      await connect(key);
      toggleOpen()   
    } catch (err) {
      console.log({ err });
    }
  };

  return (
    <>
      <Modal show={open} onHide={toggleOpen}>
        <Modal.Header>
          <Modal.Title className="black-text">Connect a wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul >
            <li onClick={() => handleConnect('injected')} className="metamask-row  mb-3">
            <img src={MetaMask} alt="metamask" width={40} height={30} /><p className="black-text">MetaMask</p> 
            </li>
            <li onClick={() => handleConnect('walletconnect')} className="wallet-row mb-3">
            <img src={WalletConnectIcon} width={40} height={30}  alt="walletconnect" /> <p className="black-text">WalletConnect</p> 
            </li>
            <li onClick={() => handleConnect('walletlink')} className="coinbase-row">
            <img src={CoinbaseWalletIcon} width={40} height={40} alt="coinbase" /><p className="black-text">Coinbase Wallet</p>
            </li>
          </ul>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default memo(WalletModal);
