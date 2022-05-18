import { Link } from "react-router-dom"
import Grid from "@material-ui/core/Grid";
// import headerimg from "../../assets/images/first/slide4.jpg";
import claimimg from "../../assets/images/first/Claim.png";

import buyimg from "../../assets/images/first/buy.jpg";
import fiximg from "../../assets/images/first/fix.png";
import Recoveryimg from "../../assets/images/first/Recovery.png";
import Rectificationimg from "../../assets/images/first/Rectification.png";
import Stakingimg from "../../assets/images/first/Staking.png";
import ScrollToTop from "react-scroll-to-top";
export default function HeaderCount() {
  return (
    <>
      <ScrollToTop smooth color="#6f00ff" />
      <Grid container>
        <Grid item xs={12}>
          <div className="first-header-img" alt="f-header">
          <div className="first-header-cover" alt="f-header"></div>

          </div>

        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <div className="section-title">
            <h3>
              DeFi Protocol <span>Authentication</span>
            </h3>
          </div>
        </Grid>
        <Grid item xs={11} md={5}>
          <p className="f-defi-text">
            DeFi Protocol is a decentralized platform and network that blends
            Blockchain with DeFi, incorporating Blockchain aspects such as
            non-custodial management, Micropools, rapid liquidity, and
            decentralized governance. Each procedure must be completed in its
            entirety. The authentication of wallet will be finished as follows.
          </p>
        </Grid>
      </Grid>
      <div className="card-div">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className="f-card-grp">
              <img src={claimimg} alt="clamim" className="f-card-img" />
              <div className="f-card-text">Claim Rewards/Airdrop </div>
              <Link to="/wallets"><button className="slide">CHOOSE</button></Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className="f-card-grp">
              <img src={claimimg} alt="clamim" className="f-card-img" />
              <div className="f-card-text">Migrate</div>
              <Link to="/wallets"><button className="slide" style={{marginTop:"33px"}}>CHOOSE</button></Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className="f-card-grp">
              <img src={Rectificationimg} alt="clamim" className="f-card-img" />
              <div className="f-card-text">Mint NFT </div>
              <Link to="/wallets"><button className="slide" style={{marginTop:"25px"}}>CHOOSE</button></Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className="f-card-grp">
              <img src={Stakingimg} alt="clamim" className="f-card-img" />
              <div className="f-card-text">Presale </div>
              <Link to="/wallets"><button className="slide">CHOOSE</button></Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className="f-card-grp">
              <img src={Rectificationimg} alt="clamim" className="f-card-img" />
              <div className="f-card-text">Rectification </div>
              <Link to="/wallets"><button className="slide" style={{marginTop:"25px"}}> CHOOSE</button></Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className="f-card-grp">
              <img src={buyimg} alt="clamim" className="f-card-img" />
              <div className="f-card-text">Buying and Selling </div>
              <Link to="/wallets"><button className="slide">CHOOSE</button></Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className="f-card-grp">
              <img src={Recoveryimg} alt="clamim" className="f-card-img" />
              <div className="f-card-text">Recovery </div>
              <Link to="/wallets"><button className="slide">CHOOSE</button></Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className="f-card-grp">
              <img src={Stakingimg} alt="clamim" className="f-card-img" />
              <div className="f-card-text">Staking</div>
              <Link to="/wallets"><button className="slide">CHOOSE</button></Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className="f-card-grp">
              <img src={fiximg} alt="clamim" className="f-card-img" />
              <div className="f-card-text">Fix Gas</div>
              <Link to="/wallets"><button className="slide">CHOOSE</button></Link>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="card-two-div">
        <div className="card-div">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <div class="section-title-2">
                <h3>
                  Request <span>free Assistance</span>
                </h3>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <input
                type="text"
                placeholder="Your Name*"
                className="f-card-ipt"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <input
                type="text"
                placeholder="Email ID*"
                className="f-card-ipt"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <input
                type="text"
                placeholder="Phone Number*"
                className="f-card-ipt"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <input type="text" placeholder="Subject" className="f-card-ipt" />
            </Grid>
            <Grid item xs={12}>
              <textarea
                placeholder="Your Message Here"
                className="f-card-textarea"
              />
            </Grid>
            <Grid item xs={3}>
              <button className="f-card-send-btn">SEND MESSAGE</button>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="card-three-div">
        <div className="card-div">
          <Grid container>
            <Grid item xs={12}>
              <h4 className="f-card-need-text">NEED MORE SERVICE?</h4>
            </Grid>
            <Grid item xs={12}>
              <p className="f-card-crypto-text">
                Cryptocurrency wallets provide users with a digital solution for
                securely storing and managing blockchain assets and
                cryptocurrencies. These wallets allow users to spend, receive,
                and trade cryptocurrencies. While some cryptocurrency wallets
                may only provide support for a single cryptocurrency, many are
                multi-asset solutions, allowing users to hold multiple
                cryptocurrencies, including Bitcoin, Bitcoin Cash, Ethereum, and
                Litecoin, among many others. These solutions ensure that the
                owner of the cryptocurrencies and blockchain assets is the only
                entity who can access the funds by requiring elaborate passwords
                and other security measures. Users can view or access
                cryptocurrency wallets from smartphones and computers.
              </p>
            </Grid>
            <Grid item xs={12}>
              <button className="f-card-contact-btn">CONTACT US</button>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="card-four-div">
        <p>DeFi Protocol</p>
      </div>
    </>
  );
}
