import { useContext } from 'react';
import {WalletModalContext } from '../context/WalletModalContext';

export const useWalletModal = () => {
  return useContext(WalletModalContext);
};
