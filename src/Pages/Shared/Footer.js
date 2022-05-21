import React from 'react';
import footer from '../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }}
            className=" p-10 ">
            <div className='footer'>
                <div>
                    <span className="footer-title">Services</span>
                    <li className="link link-hover">Branding</li>
                    <li className="link link-hover">Design</li>
                    <li className="link link-hover">Marketing</li>
                    <li className="link link-hover">Advertisement</li>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <li className="link link-hover">About us</li>
                    <li className="link link-hover">Contact</li>
                    <li className="link link-hover">Jobs</li>
                    <li className="link link-hover">Press kit</li>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <li className="link link-hover">Terms of use</li>
                    <li className="link link-hover">Privacy policy</li>
                    <li className="link link-hover">Cookie policy</li>
                </div>
            </div>
            <div className='my-10 text-center'>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;