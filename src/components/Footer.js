import React from 'react';

import './styles/footer.css';

export default () => (
    <footer className='content md dark-1'>
        <div className='footer-container'>
            <div className='footer-content'>
                <div className='contact-info'>
                    <h2>Contact</h2>
                    <ul className="contact-icons">
                        <li class="icon fa-home">
                            <a href="#">
                                <i class="fa fa-home" aria-hidden="true"></i>
                                Matungou Dusun torolaggo<br />Desa Katurei Kecamatan, Siberut barat daya<br />25393
                            </a>
                        </li>
                        <li class="icon fa-phone">
                            <a href="#">(000) 000-0000</a>
                        </li>
                        <li class="icon fa-envelope-o">
                            <a href="#">matungou@thementawaiislands.com</a>
                        </li>
                    </ul>
                    <ul className='icons-bordered'>
                        <li>
                            <a className='icon fa-facebook' href="#">
                                <span className='label'>Facebook</span>
                            </a>
                        </li>
                        <li>
                            <a class='icon fa-twitter' href="#">
                                <span className='label'>Twitter</span>
                            </a>
                        </li>
                        <li>
                            <a class='icon fa-instagram' href="#">
                                <span className='label'>Instagram</span>
                            </a>
                        </li>
                        <li>
                            <a class='icon fa-tripadvisor' href="#">
                                <span class='label'>TripAdvisor</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='contact-form'>
                    <form action="https://442kh5iuch.execute-api.eu-west-1.amazonaws.com/latest" method="post">
                        <h2>Email Us</h2>
                        <div className='form-name-email'>
                            <input name='name' id='name' placeholder='Name' type='text' />
                            <input name='email' id='email' placeholder='Email' type='email' />
                        </div>
                        <div class='form-text'>
                            <textarea name='message' id='message' rows='6' placeholder='Message'></textarea>
                        </div>
                        <ul className='form-actions'>
                            <li><input value='SEND MESSAGE' className='button' type='submit' /></li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='copyright'>
                <p>&copy; Matungou. All rights reserved.</p>
            </div>
        </div>
    </footer>
);
