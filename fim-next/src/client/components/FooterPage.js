import React from 'react';
import styles from '../styles/Home.module.css'

const FooterPage = () => {
    return (
        <div>
            <footer className ="mainfooter" id="footer" role="contentinfo">
            <div className="footer-middle">
            <div className="container">
                <div className="row">
                <div className="col-md-3 col-sm-6">
                    <div className="footer-pad">
                    <h4>FAITH MINISTRIES INTERNATIONAL</h4>
                    <ul className="list-unstyled">
                        <li><a href="#"></a></li>
                        <li><a href="#">FAITH MINISTRIES INTERNATIONAL</a></li>
                        <li><a href="#">Keriho</a></li>
                        
                    </ul>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="footer-pad">
                    <h4>FOCUS ITEMS </h4>
                    <ul className="list-unstyled">
                        <li><a href="#">Bible Study</a></li>
                        <li><a href="#">Youth Congress</a></li>
                        <li><a href="#">Womens Conference</a></li>
                        <li><a href="#">Prayer Crusades</a></li>
                        <li><a href="#">FAQs</a></li>
                       
                    </ul>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">                    <div className="footer-pad">
                    <h4>Useful Links</h4>
                    <ul className="list-unstyled">
                        <li><a href="#">Our Developers</a></li>
                        <li><a href="#">Become a member</a></li>
                        <li><a href="#">Our MIssion</a></li>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Mayor and City Council</a></li>
                        <li>
                        <a href="#"></a>
                        </li>
                    </ul>
                    </div>
                </div>
                    <div className="col-md-3">
                        <h4>Follow Us</h4>
                        <ul className="social-network social-circle">
                        <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#" className="icoInstagram" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                        </ul>				
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 copy">
                        <p className="text-center">&copy; Copyright 2018 - Fith Ministries International.</p>
                    </div>
                </div>


            </div>
            </div>
            </footer>
        </div>
    )
}

export default FooterPage
