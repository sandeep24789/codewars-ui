import React from 'react';

export default class Dashboard extends React.Component {

    render() {

        return (
            <div>
                <div className="callout-header no-padding content-block w3eden">
                    <div className="inner-content">
                        <div>
                            <span className="hs-cta-wrapper" >
                                <span className="hs-cta-node" data-hs-drop="true">
                                    <a className="cta_button" href="#" cta_dest_link="#">
                                        <img className="hs-cta-img" src={require('../styles/assets/ccc.jpg')} mce_noresize="1" height="329" width="100%" />
                                    </a>
                                </span>
                            </span>
                            <div className="custom-hubspot-header-copy centered">
                                <a href="#">
                                    <h1 className="cta-header"><div>CMT Coding</div><div className="cta-sub-header">Contest</div></h1>
                                    <p>Arm your teams with the tools to<br /> become Champion of <i>CODE WAR</i>.</p>
                                    <br />
                                </a>
                                <a className="cta-button-green btn" href="#">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" content-block w3eden" style={{ backgroundColor: '#ececec' }}>
                    <div className="container">
                        <div className="inner-content">
                            <div className="row">
                                <div className="boxes">
                                    <div className="box roundone">
                                        <a href="">
                                            <h2>Test Your Knowledge</h2>
                                            <p>Create story-driven visual narratives that motivate your audience to act</p>
                                            <span className="more">
                                                <span className="link-box">Contest Now</span>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="box roundtwo">
                                        <a href="">
                                            <h2>Solve  <br />Puzzle</h2><p>Transform text-heavy slides into easy-to-interpret visuals</p>
                                            <span className="more"><span className="link-box">Contest Now</span></span>
                                        </a>
                                    </div>
                                    <div className="box roundthree">
                                        <a href="">
                                            <h2>Crack the<br />Code</h2><p>Convert data into valuable insights that accelerate decision-making</p>
                                            <span className="more"><span className="link-box">Contest Now</span></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className=" content-block w3eden">
                    <div className="container">
                        <div className="inner-content">
                            <div className="row">
                                <div className="boxes">
                                    <div className="box roundtwo">
                                        <a href="">
                                            <h2>Visual <br />Messaging</h2><p>Transform text-heavy slides into easy-to-interpret visuals</p>
                                            <span className="more"><span className="link-box">Explore Workshop</span></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className=" content-block w3eden">
                    <div className="container">
                        <div className="inner-content">
                            <div className="row info-holder">
                                <div className="info">
                                    <div className="number">30<sup>%</sup></div>
                                    <div className="holder">of participants will be<br /> shortlisted for <strong>Solve the Puzzle</strong></div>
                                </div>
                                <div className="info">
                                    <div className="number">10<sup>%</sup></div>
                                    <div className="holder">of round 2 contestants<br /> will be selected for<strong><br /> Grand Finale</strong></div>
                                </div>
                                <div className="info">
                                    <div className="number">1</div>
                                    <div className="holder">contestant will conquer the <strong><br /> THRONE</strong></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='callout-header no-padding content-block w3eden'>
                    <div className='inner-content'>
                        {/* <div className="w3-content w3-section">
                            <img className='hs-cta-img mySlides' height='329' width='100%' src={require('../styles/assets/Code.jpg')} />
                            <img className='hs-cta-img mySlides' height='329' width='100%' src={require('../styles/assets/Compete.jpg')} />
                            <img className='hs-cta-img mySlides' height='329' width='100%' src={require('../styles/assets/Celebrate.jpg')} />
                        </div> */}
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={require('../styles/assets/Code.jpg')} alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={require('../styles/assets/Compete.jpg')} alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={require('../styles/assets/Celebrate.jpg')} alt="Third slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}