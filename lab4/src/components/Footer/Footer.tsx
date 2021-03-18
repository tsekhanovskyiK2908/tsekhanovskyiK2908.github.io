import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Footer.scss';
import logoSmall1x from '../../assets/img/logo-green-small-1x.png';
import logoSmall2x from '../../assets/img/logo-green-small-2x.png';
import fullLogo2x from '../../assets/img/logo-green-2x.png';
import fullLogo1x from '../../assets/img/logo-green-1x.png';

export class Footer extends Component {
    logoSmall: string = `${logoSmall1x} 1x, ${logoSmall2x} 2x`;
    logoFull: string = `${fullLogo1x} 1x, ${fullLogo2x} 2x`;

    render() {
        return (
            <footer className="footer">
                <div className="footer__logo-box">
                    <picture className="footer__logo">

                        <source srcSet={this.logoSmall} media="(max-width: 37.5em)" />
                        <img src={fullLogo2x} srcSet={fullLogo1x} alt="Full logo" />
                    </picture>
                </div>
                <div className="row row-2-col">
                    <div>
                        <div className="footer__navigation">
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <a href="#" className="footer__link">Company</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">Contact us</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">Careears</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">Privacy policy</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">Terms</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p className="footer__copyright">
                            Built by <a href="#" className="footer__link">Kyrylo Tsekhanovskyi</a>. Designed by <a href="http://jonas.io/" className="footer__link">Jonas Schmedtmann</a>.
            </p>
                    </div>
                </div>
            </footer>)
    }
}

ReactDOM.render(
    <Footer />,
    document.getElementById('root')
);


export default Footer;
