import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6 header-top-left no-padding">
                <ul>
                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                  <li><a href="#"><i className="fa fa-behance"></i></a></li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6 header-top-right no-padding">
                <ul>
                  <li><a href="tel:+440 012 3654 896"><span className="lnr lnr-phone-handset"></span><span>+440 012 3654 896</span></a>
                  </li>
                  <li><a href="mailto:support@colorlib.com"><span
                    className="lnr lnr-envelope"></span><span>support@colorlib.com</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="logo-wrap">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-4 col-md-4 col-sm-12 logo-left no-padding">
                <a href="index.html">
                  <img className="img-fluid" src={require("../../../assets/img/logo.png")} alt=""/>
                </a>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 logo-right no-padding ads-banner">
                <img className="img-fluid" src={require("../../../assets/img/banner-ad.jpg")} alt=""/>
              </div>
            </div>
          </div>
        </div>
        <div className="container main-menu" id="main-menu">
          <div className="row align-items-center justify-content-between">
            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li className="menu-active"><a href="index.html">Home</a></li>
                <li><a href="archive.html">Archive</a></li>
                <li><a href="category.html">Category</a></li>
                <li className="menu-has-children"><a href="">Post Types</a>
                  <ul>
                    <li><a href="standard-post.html">Standard Post</a></li>
                    <li><a href="image-post.html">Image Post</a></li>
                    <li><a href="gallery-post.html">Gallery Post</a></li>
                    <li><a href="video-post.html">Video Post</a></li>
                    <li><a href="audio-post.html">Audio Post</a></li>
                  </ul>
                </li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </nav>
            <div className="navbar-right">
              <form className="Search">
                <input type="text" className="form-control Search-box" name="Search-box" id="Search-box"
                       placeholder="Search"/>
                  <label htmlFor="Search-box" className="Search-box-label">
                    <span className="lnr lnr-magnifier"></span>
                  </label>
                  <span className="Search-close">
                    <span className="lnr lnr-cross"></span>
                  </span>
              </form>
            </div>
          </div>
        </div>
      </header>
  );
  }
  }
