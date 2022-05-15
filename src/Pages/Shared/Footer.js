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
                    <href className="link link-hover">Branding</href>
                    <href className="link link-hover">Design</href>
                    <href className="link link-hover">Marketing</href>
                    <href className="link link-hover">Advertisement</href>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <href className="link link-hover">About us</href>
                    <href className="link link-hover">Contact</href>
                    <href className="link link-hover">Jobs</href>
                    <href className="link link-hover">Press kit</href>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <href className="link link-hover">Terms of use</href>
                    <href className="link link-hover">Privacy policy</href>
                    <href className="link link-hover">Cookie policy</href>
                </div>
            </div>
            <div className='my-10 text-center'>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;