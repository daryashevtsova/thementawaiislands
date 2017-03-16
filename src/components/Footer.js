import React from 'react';

import './styles/footer.css';
import '../../assets/fonts/font-awesome.min.css';


export default () => (
    <footer className='footer'>

        <div className='footer-container'>
                <div className='footer-contact'>
                    <h2>Contact</h2>
                    <ul>
                        <li className="footer-contact-item">
                            <i className="fa fa-home"></i>
                            <a href="#">Matungou Dusun torolaggo<br />Desa Katurei Kecamatan, Siberut barat daya<br />25393</a>
                        </li>
                        <li className="footer-contact-item">
                            <i className="fa fa-phone"></i>
                            <a href="#">(000) 000-0000</a>
                        </li>
                        <li className="footer-contact-item">
                            <i className="fa fa-envelope-o"></i>
                            <a href="#">matungou@thementawaiislands.com</a>
                        </li>
                    </ul>
                    <p className='fotter-contact-icons'>
                            <a className='fa fa-facebook' href="#" />
                            <a className='fa fa-twitter' href="#" />
                            <a className='fa fa-instagram' href="#" />
                            <a className='fa fa-tripadvisor' href="#" />
                    </p>
                </div>

                <div className='footer-form'>

                    <form action="https://442kh5iuch.execute-api.eu-west-1.amazonaws.com/latest" method="post">
                        <h2>Email Us</h2>
                        <div className='form-name-email'>
                            <input className="footer-input" name='name' id='name' placeholder='Name' type='text' />
                            <input className="footer-input" name='email' id='email' placeholder='Email' type='email' />
                        </div>
                        <div className='form-name-email'>
                            <textarea className="footer-texterea" name='message' id='message' rows='6' placeholder='Message'></textarea>
                        </div>
                        <input value='SEND MESSAGE' className='footer-form-button' type='submit' />
                    </form>

                </div>

            </div>

            <div className='footer-copyright'>
                <p>&copy; Matungou. All rights reserved.</p>
            </div>

    </footer>
);
