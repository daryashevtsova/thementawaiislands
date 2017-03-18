import React from 'react';

import './styles/reservations.css';
import '../../assets/fonts/font-awesome.min.css';


export default () => (
    <div className='reservations'>

        <div className='reservations-container'>
            <div className='reservations-contact'>
                {/*<h2>Contact</h2>*/}
                <ul>
                    <li className="reservations-contact-item">
                        <i className="fa fa-home"></i>
                        <a href="#">Matungou Dusun torolaggo<br />Desa Katurei Kecamatan, Siberut barat daya<br />25393</a>
                    </li>
                    <li className="reservations-contact-item">
                        <i className="fa fa-phone"></i>
                        <a href="#">(000) 000-0000</a>
                    </li>
                    <li className="reservations-contact-item">
                        <i className="fa fa-envelope-o"></i>
                        <a href="#">matungou@thementawaiislands.com</a>
                    </li>
                </ul>
                <p className='reservations-contact-icons'>
                    <a className='fa fa-facebook' href="#" />
                    <a className='fa fa-twitter' href="#" />
                    <a className='fa fa-instagram' href="#" />
                    <a className='fa fa-tripadvisor' href="#" />
                    <a className='fa fa-skype' href="#" />
                    <a className='fa fa-whatsapp' href="#" />
                </p>
            </div>

            <div className='reservations-form'>

                <form action="https://442kh5iuch.execute-api.eu-west-1.amazonaws.com/latest" method="post">
                    <h2>Email Us</h2>
                    <div className='form-name-email'>
                        <input className="reservations-input" name='name' id='name' placeholder='Name' type='text' />
                        <input className="reservations-input" name='email' id='email' placeholder='Email' type='email' />
                    </div>
                    <div className='form-name-email'>
                        <textarea className="reservations-texterea" name='message' id='message' rows='6' placeholder='Message'></textarea>
                    </div>
                    <input value='SEND MESSAGE' className='reservations-form-button' type='submit' />
                </form>

            </div>

        </div>

        <div className='reservations-copyright'>
            <p>&copy; Matungou. All rights reserved.</p>
        </div>

    </div>
);
