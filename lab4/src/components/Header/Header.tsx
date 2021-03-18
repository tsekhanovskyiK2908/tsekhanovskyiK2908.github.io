import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Header.scss';
import logo from '../../assets/img/logo-white.png';

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__logo-box">
          <img src={logo} alt="Logo white" className="header__logo" />
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Outdoors</span>
            <span className="heading-primary--sub">Is where the life happens</span>
          </h1>
          <a href="#" className="btn btn--white btn--animated">Discover our tours</a>
        </div>
      </header>
    );
  }
}

ReactDOM.render(
  <Header />,
  document.getElementById('root')
);

export default Header;
