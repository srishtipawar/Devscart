import React from 'react';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import ShopIcon from '@material-ui/icons/Shop';
import './Footer.css';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-1'>
                <div className="col1">
                    <div className="footer-title">
                        <h2><span className="footer-num">D</span>evskart <AllInclusiveIcon style={{fontSize: "35"}} /></h2>
                    </div>
                    <span className="tagline"><em>Transform your life through education!</em></span>  
                    <div style={{marginTop: '40px'}}>
                        <h3 style={{color: '#EEB76B'}}>Contact Us</h3>
                        <span className="line" style={{fontSize: '40', display:"inline-block"}}><CallIcon style={{marginRight: '10'}}/> +0123456789</span> <br />
                        <span className="line" style={{fontSize: '40'}}><EmailIcon style={{marginRight: '10'}}/>bitcoders@gmail.com</span>
                    </div> 
                    
                </div>
                <div className="col2">
                    <h2 style={{color: '#EEB76B'}}>Information</h2>
                    <NavLink to="About" style={{textDecoration:'none',color:'white'}}><p className="line">About Us</p></NavLink>
                    <p className="line">Blogs</p>
                    <p className="line">Careers</p>
                    <p className="line">8 Bit Business</p>
                    <p className="line">Help and support</p>
                </div>
                <div className="col3">
                    <h2 style={{color: '#EEB76B'}}>Helpful Links</h2>
                    <p className="line">Services</p>
                    <p className="line">Terms</p>
                   <NavLink to="Privacy" style={{textDecoration:'none',color:'white'}}> <p className="line">Privacy Policy</p></NavLink>
                    <p className="line">Sitemap</p>
                </div>
            </div>
            <hr style={{borderTop: '0px'}}/>
            <div className="footer2">
                <FacebookIcon style={{marginRight: '10', fontSize: '30'}}/>
                <InstagramIcon style={{marginRight: '10', fontSize: '30'}}/>
                <TwitterIcon style={{marginRight: '10', fontSize: '30'}}/>
                <ShopIcon style={{marginRight: '10', fontSize: '30'}}/>
                <p>© 2021 8BitCart - No rights reserved!</p>
            </div>
            {/* <p>© 2021 8BitCart - No rights reserved!</p>
            <p>Privacy · Terms · Sitemap · Company Details</p> */}
        </div>
    )
}

export default Footer