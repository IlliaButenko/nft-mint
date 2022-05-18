import React from 'react';
import { Component } from 'react';
import reactDom from 'react-dom';
import MetaTags from 'react-meta-tags';
import { Link } from 'react-router-dom';
import logo from '../shared/images/Apes Logo.png'

export class Navbar extends Component {
    constructor(props){
        super(props);
        console.log(props, "!!!!!!!!!!!!!!!!");
        this.container = React.createRef();
        this.state = {
            isActive: false,
            isShowHamburger: false
        };
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
        document.title = "theapesofficial"
    }
    componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleClickOutside);
    }

    handleClickOutside = (event) => {
        if ( this.container.current && !this.container.current.contains(event.target)) {
          this.setState({
            isActive: false,
            isShowHamburger: false
          });
        }
    }

    render() {
        const { whenClicked } = this.props;

        /* const ToggleClass = () => {
            this.setState({ isActive: !this.state.isActive })
        }; */

        const toggleHamburger = () => {
            this.setState({ isShowHamburger: !this.state.isShowHamburger });
        };

        return (
            <>
                <div className="wrapper">
                    <MetaTags>
                        <title>TheApesOfficial</title>
                        <meta charSet="utf-8" />
                        <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
                        <meta http-equiv="x-ua-compatible" content="ie=edge" />
                        <meta name="theme-color" content="#000000" />
                        <meta name="description"
                            content="The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits." />
                        <meta name="twitter:card" content="summary" />
                        <meta name="twitter:title" content="Bored Ape Yacht Club" />
                        <meta name="twitter:description"
                            content="A limited NFT collection where the token itself doubles as your membership to a swamp club for apes. The club is open! Ape in with us." />
                        <meta name="twitter:image" content="https://ipfs.io/ipfs/QmZAnAuhbwnPa2g5mfAnEKupChPgUM9VXB7USDVsBUnvYU" />
                        <link rel="icon" href="https://boredapeyachtclub.com/0d090ca3534b3dd85dc9.ico" type="image/x-icon" />
                        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fork-awesome@1.1.7/css/fork-awesome.min.css"
                            integrity="sha256-gsmEoJAws/Kd3CjuOQzLie5Q3yshhvmo7YNtBG7aaEY=" crossOrigin="anonymous" />
                        {/* <script defer={true} src='../Utils/main.script.jsx' type="text/javascript"></script> */}
                        <script src="../utils/rocket-loader.js"
                            data-cf-settings="10769c5478912b073d553923-|49" defer={false}></script>
                        <script defer src="https://static.cloudflareinsights.com/beacon.min.js"
                            data-cf-beacon='{"rayId":"6ae626d0bdfb0da8","token":"72d9ad35d2b14639a4f460f29c57ec15","version":"2021.11.0","si":100}'
                            crossOrigin="anonymous"></script>
                    </MetaTags>
                </div>
                {(() => {
                    return (
                        <div> 
                            <nav id="nav" className="navbar navbar-expand-md navbar-light sticky-top" ref={this.container}>
                                <Link 
                                    to="/" 
                                    id="bayc-brand"
                                    className="navbar-brand">
                                        <img 
                                            src={logo}
                                            className="d-inline-block align-bottom logo" 
                                            alt="bored ape logo"
                                        />
                                </Link>
                                <button 
                                    className="navbar-toggler third-button" 
                                    
                                    type="button" 
                                    data-toggle="collapse" 
                                    data-target="#navbarSupportedContent22" 
                                    onClick={toggleHamburger} 
                                    id="nav-toggle"
                                    aria-controls="responsive-navbar-nav" 
                                    aria-expanded="false" aria-label="Toggle navigation"
                                >
                                    <div className={'animated-icon3 ' + (this.state.isShowHamburger ? 'open': null)}>
                                        <span></span><span></span><span></span>
                                    </div>
                                </button>
                                <div className={'navbar-collapse collapse ' + (this.state.isShowHamburger ? 'show': null)}>
                                    <div className="navbar-nav" id="nav-bar">
                                        <a 
                                            id="nav-link" 
                                            title="WELCOME" 
                                            onClick={whenClicked} 
                                            className="nav-link" 
                                            style={{cursor: 'pointer'}}
                                        >WELCOME</a>
                                        <a 
                                            id="nav-link" 
                                            title="BUY AN APE" 
                                            onClick={whenClicked} 
                                            className="nav-link" 
                                            style={{cursor: 'pointer'}}
                                        >BUY AN APE</a>
                                        <a 
                                            id="nav-link" 
                                            title="OVERVIEW" 
                                            onClick={whenClicked} 
                                            className="nav-link" 
                                            style={{cursor: 'pointer'}}
                                        >OVERVIEW</a>
                                        <a 
                                            id="nav-link" 
                                            title="TIMELINE" 
                                            onClick={whenClicked} 
                                            className="nav-link" 
                                            style={{cursor: 'pointer'}}
                                        >TIMELINE</a>
                                        <a 
                                            id="nav-link" 
                                            title="TEAM" 
                                            onClick={whenClicked} 
                                            className="nav-link" 
                                            style={{cursor: 'pointer'}}
                                        >TEAM</a>
                                    </div>
                                </div>
                                <div className="navbar-nav" id="nav-social">
                                        {/* <a href="https://www.youtube.com/watch?v=xeDDq6BkScc"><i className="fa fa-youtube-play social-icon-nav pr-lg-0"></i></a> */}
                                        <a href="https://www.instagram.com/apesofficialnft/"><i className="fa fa-instagram social-icon-nav pr-lg-0"></i></a>
                                        <a href="https://discord.com/invite/9Fz9EfryJU"><i className="fa fa-discord-alt social-icon-nav pr-lg-0"></i></a>
                                        <a href="https://twitter.com/apesofficialnft"><i className="fa fa-twitter social-icon-nav pr-lg-0"></i></a>
                                    </div>
                            </nav>
                        </div>
                        
                    );
                })()}
            </>
        );
    }
  }
  
  export default Navbar;
