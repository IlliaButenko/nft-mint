import React from "react";
import logo from '../../shared/images/Apes Logo.png'

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container-fluid footer-line">
                    <hr className="p-0 line" />
                    <div className="row mx-0 footer-padding">
                        <div className="col-12 col-lg-4 order-lg-first my-lg-auto">
                            <div className="col">
                                <div className="d-flex justify-content-center">
                                    <p className="common-p text-center text-break mb-0"><span className="bold-text">VERIFIED
                                    SMART CONTRACT ADDRESS: </span><a
                                    title="0xF6B97A199b1bd5b70Ff9c67BaFB04Fca0535DF59"
                                    target="_blank"
                                    href="https://etherscan.io/address/0xF6B97A199b1bd5b70Ff9c67BaFB04Fca0535DF59"
                                    className="link">0xF6B97A199b1bd5b70Ff9c67BaFB04Fca0535DF59</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 order-first"><img className="img-fluid footer-logo"
                                src={logo} alt="logo" /></div>
                        <div className="order-last my-auto text-center col-lg-4 col-sm-12 col-12">
                            <div className="row">
                                <div className="text-lg-right col-sm-12 col-12"><a
                                        href="https://www.instagram.com/apesofficialnft/"><i
                                            className="fa fa-instagram social-icon pr-lg-0"></i></a><a
                                        href="https://discord.com/invite/9Fz9EfryJU"><i
                                            className="fa fa-discord-alt social-icon pr-lg-0"></i></a><a
                                        href="https://twitter.com/apesofficialnft"><i
                                            className="fa fa-twitter social-icon pr-lg-0"></i></a></div>
                                <div className="col-lg-12 col-sm-6 col-12">
                                    <p className="copyright text-right"><span className="copy-left">© 2021 Apes official</span>
                                    </p>
                                </div>
                                {/* <div className="col-lg-12 col-sm-6 col-6">
                                    <p id="terms" className="copyright text-right"><a className="link" href="#/terms">BAYC Terms
                                            &amp; Conditions</a><br /><a className="link" href="#/mayc/terms">MAYC Terms &amp;
                                            Conditions</a></p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid m-0 p-0"><span className="last-line"></span></div>
            </footer>
        </>
    );
}

export default Footer;
