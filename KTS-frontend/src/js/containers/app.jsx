import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './layout/header';
import Footer from './layout/footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <div className="site-main-container">
          <section className="top-post-area pt-10">
            <div className="container no-padding">
              <div className="row small-gutters">
                <div className="col-lg-8 top-post-left">
                  <div className="feature-image-thumb relative">
                    <div className="overlay overlay-bg"></div>
                    <img className="img-fluid" src={require("../../assets/img/top-post1.jpg")} alt=""/>
                  </div>
                  <div className="top-post-details">
                    <ul className="tags">
                      <li><a href="#">Food Habit</a></li>
                    </ul>
                    <a href="image-post.html">
                      <h3>A Discount Toner Cartridge Is Better Than Ever.</h3>
                    </a>
                    <ul className="meta">
                      <li><a href="#"><span className="lnr lnr-user"></span>Mark wiens</a></li>
                      <li><a href="#"><span className="lnr lnr-calendar-full"></span>03 April, 2018</a></li>
                      <li><a href="#"><span className="lnr lnr-bubble"></span>06 Comments</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 top-post-right">
                  <div className="single-top-post">
                    <div className="feature-image-thumb relative">
                      <div className="overlay overlay-bg"></div>
                      <img className="img-fluid" src={require("../../assets/img/top-post2.jpg")} alt=""/>
                    </div>
                    <div className="top-post-details">
                      <ul className="tags">
                        <li><a href="#">Food Habit</a></li>
                      </ul>
                      <a href="image-post.html">
                        <h4>A Discount Toner Cartridge Is Better Than Ever.</h4>
                      </a>
                      <ul className="meta">
                        <li><a href="#"><span className="lnr lnr-user"></span>Mark wiens</a></li>
                        <li><a href="#"><span className="lnr lnr-calendar-full"></span>03 April, 2018</a></li>
                        <li><a href="#"><span className="lnr lnr-bubble"></span>06 Comments</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="single-top-post mt-10">
                    <div className="feature-image-thumb relative">
                      <div className="overlay overlay-bg"></div>
                      <img className="img-fluid" src={require("../../assets/img/top-post3.jpg")} alt=""/>
                    </div>
                    <div className="top-post-details">
                      <ul className="tags">
                        <li><a href="#">Food Habit</a></li>
                      </ul>
                      <a href="image-post.html">
                        <h4>A Discount Toner Cartridge Is Better</h4>
                      </a>
                      <ul className="meta">
                        <li><a href="#"><span className="lnr lnr-user"></span>Mark wiens</a></li>
                        <li><a href="#"><span className="lnr lnr-calendar-full"></span>03 April, 2018</a></li>
                        <li><a href="#"><span className="lnr lnr-bubble"></span>06 Comments</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="news-tracker-wrap">
                    <h6><span>Breaking News:</span> <a href="#">Astronomy Binoculars A Great Alternative</a></h6>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="latest-post-area pb-120">
            <div className="container no-padding">
              <div className="row">
                <div className="col-lg-8 post-list">
                  <div className="latest-post-wrap">
                    <h4 className="cat-title">Latest News</h4>
                    <div className="single-latest-post row align-items-center">
                      <div className="col-lg-5 post-left">
                        <div className="feature-img relative">
                          <div className="overlay overlay-bg"></div>
                          <img className="img-fluid" src={require("../../assets/img/l1.jpg")} alt=""/>
                        </div>
                        <ul className="tags">
                          <li><a href="#">Lifestyle</a></li>
                        </ul>
                      </div>
                      <div className="col-lg-7 post-right">
                        <a href="image-post.html">
                          <h4>A Discount Toner Cartridge Is
                            Better Than Ever.</h4>
                        </a>
                        <ul className="meta">
                          <li><a href="#"><span className="lnr lnr-user"></span>Mark wiens</a></li>
                          <li><a href="#"><span className="lnr lnr-calendar-full"></span>03 April, 2018</a></li>
                          <li><a href="#"><span className="lnr lnr-bubble"></span>06 Comments</a></li>
                        </ul>
                        <p className="excert">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                        </p>
                      </div>
                    </div>
                    <div className="single-latest-post row align-items-center">
                      <div className="col-lg-5 post-left">
                        <div className="feature-img relative">
                          <div className="overlay overlay-bg"></div>
                          <img className="img-fluid" src={require("../../assets/img/l2.jpg")} alt=""/>
                        </div>
                        <ul className="tags">
                          <li><a href="#">Science</a></li>
                        </ul>
                      </div>
                      <div className="col-lg-7 post-right">
                        <a href="image-post.html">
                          <h4>A Discount Toner Cartridge Is
                            Better Than Ever.</h4>
                        </a>
                        <ul className="meta">
                          <li><a href="#"><span className="lnr lnr-user"></span>Mark wiens</a></li>
                          <li><a href="#"><span className="lnr lnr-calendar-full"></span>03 April, 2018</a></li>
                          <li><a href="#"><span className="lnr lnr-bubble"></span>06 Comments</a></li>
                        </ul>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                        </p>
                      </div>
                    </div>
                    <div className="single-latest-post row align-items-center">
                      <div className="col-lg-5 post-left">
                        <div className="feature-img relative">
                          <div className="overlay overlay-bg"></div>
                          <img className="img-fluid" src={require("../../assets/img/l3.jpg")} alt=""/>
                        </div>
                        <ul className="tags">
                          <li><a href="#">Travel</a></li>
                        </ul>
                      </div>
                      <div className="col-lg-7 post-right">
                        <a href="image-post.html">
                          <h4>A Discount Toner Cartridge Is
                            Better Than Ever.</h4>
                        </a>
                        <ul className="meta">
                          <li><a href="#"><span className="lnr lnr-user"></span>Mark wiens</a></li>
                          <li><a href="#"><span className="lnr lnr-calendar-full"></span>03 April, 2018</a></li>
                          <li><a href="#"><span className="lnr lnr-bubble"></span>06 Comments</a></li>
                        </ul>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                        </p>
                      </div>
                    </div>
                    <div className="single-latest-post row align-items-center">
                      <div className="col-lg-5 post-left">
                        <div className="feature-img relative">
                          <div className="overlay overlay-bg"></div>
                          <img className="img-fluid" src={require("../../assets/img/l4.jpg")} alt=""/>
                        </div>
                        <ul className="tags">
                          <li><a href="#">Fashion</a></li>
                        </ul>
                      </div>
                      <div className="col-lg-7 post-right">
                        <a href="image-post.html">
                          <h4>A Discount Toner Cartridge Is
                            Better Than Ever.</h4>
                        </a>
                        <ul className="meta">
                          <li><a href="#"><span className="lnr lnr-user"></span>Mark wiens</a></li>
                          <li><a href="#"><span className="lnr lnr-calendar-full"></span>03 April, 2018</a></li>
                          <li><a href="#"><span className="lnr lnr-bubble"></span>06 Comments</a></li>
                        </ul>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 ad-widget-wrap mt-30 mb-30">
                    <img className="img-fluid" src={require("../../assets/img/banner-ad.jpg")} alt=""/>
                  </div>
                  <div className="popular-post-wrap">
                    <h4 className="title">Popular Posts</h4>
                    <div className="feature-post relative">
                      <div className="feature-img relative">
                        <div className="overlay overlay-bg"></div>
                        <img className="img-fluid" src={require("../../assets/img/f1.jpg")} alt=""/>
                      </div>
                      <div className="details">
                        <ul className="tags">
                          <li><a href="#">Food Habit</a></li>
                        </ul>
                        <a href="image-post.html">
                          <h3>A Discount Toner Cartridge Is Better Than Ever.</h3>
                        </a>
                        <ul className="meta">
                          <li><a href="#"><span className="lnr lnr-user"></span>Mark wiens</a></li>
                          <li><a href="#"><span className="lnr lnr-calendar-full"></span>03 April, 2018</a></li>
                          <li><a href="#"><span className="lnr lnr-bubble"></span>06 Comments</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="row mt-20 medium-gutters">
                      <div className="col-lg-6 single-popular-post">
                        <div className="feature-img-wrap relative">
                          <div className="feature-img relative">
                            <div className="overlay overlay-bg"></div>
                            <img className="img-fluid" src={require("../../assets/img/f2.jpg")} alt=""/>
                          </div>
                          <ul className="tags">
                            <li><a href="#">Travel</a></li>
                          </ul>
                        </div>
                        <div className="details">
                          <a href="image-post.html">
                            <h4>A Discount Toner Cartridge Is
                              Better Than Ever.</h4>
                          </a>
                          <ul className="meta">
                            <li><a href="#"><span className="lnr lnr-user"></span>Mark wiens</a></li>
                            <li><a href="#"><span className="lnr lnr-calendar-full"></span>03 April, 2018</a></li>
                            <li><a href="#"><span className="lnr lnr-bubble"></span>06 </a></li>
                          </ul>
                          <p className="excert">
                            Lorem ipsum dolor sit amet, consecteturadip isicing elit, sed do eiusmod tempor incididunt
                            ed do eius.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 single-popular-post">
                        <div className="feature-img-wrap relative">
                          <div className="feature-img relative">
                            <div className="overlay overlay-bg"></div>
                            <img className="img-fluid" src={require("../../assets/img/f3.jpg")} alt=""/>
                          </div>
                          <ul className="tags">
                            <li><a href="#">Travel</a></li>
                          </ul>
                        </div>
                        <div className="details">
                          <a href="image-post.html">
                            <h4>A Discount Toner Cartridge Is
                              Better Than Ever.</h4>
                          </a>
                          <ul className="meta">
                            <li><a href="#"><span className="lnr lnr-user"></span>Mark wiens</a></li>
                            <li><a href="#"><span className="lnr lnr-calendar-full"></span>03 April, 2018</a></li>
                            <li><a href="#"><span className="lnr lnr-bubble"></span>06 </a></li>
                          </ul>
                          <p className="excert">
                            Lorem ipsum dolor sit amet, consecteturadip isicing elit, sed do eiusmod tempor incididunt
                            ed do eius.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relavent-story-post-wrap mt-30">
                    <h4 className="title">Relavent Stories</h4>
                    <div className="relavent-story-list-wrap">
                      <div className="single-relavent-post row align-items-center">
                        <div className="col-lg-5 post-left">
                          <div className="feature-img relative">
                            <div className="overlay overlay-bg"></div>
                            <img className="img-fluid" src={require("../../assets/img/r1.jpg")} alt=""/>
                          </div>
                          <ul className="tags">
                            <li><a href="#">Lifestyle</a></li>
                          </ul>
                        </div>
                        <div className="col-lg-7 post-right">
                          <a href="image-post.html">
                            <h4>A Discount Toner Cartridge Is
                              Better Than Ever.</h4>
                          </a>
                          <ul className="meta">
                            <li><a href="#"><span className="lnr lnr-user"></span>Mark wiens</a></li>
                            <li><a href="#"><span className="lnr lnr-calendar-full"></span>03 April, 2018</a></li>
                            <li><a href="#"><span className="lnr lnr-bubble"></span>06 Comments</a></li>
                          </ul>
                          <p className="excert">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                          </p>
                        </div>
                      </div>
                      <div className="single-relavent-post row align-items-center">
                        <div className="col-lg-5 post-left">
                          <div className="feature-img relative">
                            <div className="overlay overlay-bg"></div>
                            <img className="img-fluid" src={require("../../assets/img/r2.jpg")} alt=""/>
                          </div>
                          <ul className="tags">
                            <li><a href="#">Science</a></li>
                          </ul>
                        </div>
                        <div className="col-lg-7 post-right">
                          <a href="image-post.html">
                            <h4>A Discount Toner Cartridge Is
                              Better Than Ever.</h4>
                          </a>
                          <ul className="meta">
                            <li><a href="#"><span className="lnr lnr-user"></span>Mark wiens</a></li>
                            <li><a href="#"><span className="lnr lnr-calendar-full"></span>03 April, 2018</a></li>
                            <li><a href="#"><span className="lnr lnr-bubble"></span>06 Comments</a></li>
                          </ul>
                          <p className="excert">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                          </p>
                        </div>
                      </div>
                      <div className="single-relavent-post row align-items-center">
                        <div className="col-lg-5 post-left">
                          <div className="feature-img relative">
                            <div className="overlay overlay-bg"></div>
                            <img className="img-fluid" src={require("../../assets/img/r3.jpg")} alt=""/>
                          </div>
                          <ul className="tags">
                            <li><a href="#">Travel</a></li>
                          </ul>
                        </div>
                        <div className="col-lg-7 post-right">
                          <a href="image-post.html">
                            <h4>A Discount Toner Cartridge Is
                              Better Than Ever.</h4>
                          </a>
                          <ul className="meta">
                            <li><a href="#"><span className="lnr lnr-user"></span>Mark wiens</a></li>
                            <li><a href="#"><span className="lnr lnr-calendar-full"></span>03 April, 2018</a></li>
                            <li><a href="#"><span className="lnr lnr-bubble"></span>06 Comments</a></li>
                          </ul>
                          <p className="excert">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="sidebars-area">
                    <div className="single-sidebar-widget editors-pick-widget">
                      <h6 className="title">Editor’s Pick</h6>
                      <div className="editors-pick-post">
                        <div className="feature-img-wrap relative">
                          <div className="feature-img relative">
                            <div className="overlay overlay-bg"></div>
                            <img className="img-fluid" src={require("../../assets/img/e1.jpg")} alt=""/>
                          </div>
                          <ul className="tags">
                            <li><a href="#">Travel</a></li>
                          </ul>
                        </div>
                        <div className="details">
                          <a href="image-post.html">
                            <h4 className="mt-20">A Discount Toner Cartridge Is
                              Better Than Ever.</h4>
                          </a>
                          <ul className="meta">
                            <li><a href="#"><span className="lnr lnr-user"></span>Mark wiens</a></li>
                            <li><a href="#"><span className="lnr lnr-calendar-full"></span>03 April, 2018</a></li>
                            <li><a href="#"><span className="lnr lnr-bubble"></span>06 </a></li>
                          </ul>
                          <p className="excert">
                            Lorem ipsum dolor sit amet, consecteturadip isicing elit, sed do eiusmod tempor incididunt
                            ed do eius.
                          </p>
                        </div>
                        <div className="post-lists">
                          <div className="single-post d-flex flex-row">
                            <div className="thumb">
                              <img src={require("../../assets/img/e2.jpg")} alt=""/>
                            </div>
                            <div className="detail">
                              <a href="image-post.html"><h6>Help Finding Information
                                Online is so easy</h6></a>
                              <ul className="meta">
                                <li><a href="#"><span className="lnr lnr-calendar-full"></span>03 April, 2018</a></li>
                                <li><a href="#"><span className="lnr lnr-bubble"></span>06</a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="single-post d-flex flex-row">
                            <div className="thumb">
                              <img src={require("../../assets/img/e3.jpg")} alt=""/>
                            </div>
                            <div className="detail">
                              <a href="image-post.html"><h6>Compatible Inkjet Cartr
                                world famous</h6></a>
                              <ul className="meta">
                                <li><a href="#"><span className="lnr lnr-calendar-full"></span>03 April, 2018</a></li>
                                <li><a href="#"><span className="lnr lnr-bubble"></span>06</a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="single-post d-flex flex-row">
                            <div className="thumb">
                              <img src={require("../../assets/img/e4.jpg")} alt=""/>
                            </div>
                            <div className="detail">
                              <a href="image-post.html"><h6>5 Tips For Offshore Soft
                                Development </h6></a>
                              <ul className="meta">
                                <li><a href="#"><span className="lnr lnr-calendar-full"></span>03 April, 2018</a></li>
                                <li><a href="#"><span className="lnr lnr-bubble"></span>06</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-sidebar-widget ads-widget">
                      <img className="img-fluid" src={require("../../assets/img/sidebar-ads.jpg")} alt=""/>
                    </div>
                    <div className="single-sidebar-widget newsletter-widget">
                      <h6 className="title">Newsletter</h6>
                      <p>
                        Here, I focus on a range of items
                        andfeatures that we use in life without
                        giving them a second thought.
                      </p>
                      <div className="form-group d-flex flex-row">
                        <div className="col-autos">
                          <div className="input-group">
                            <input className="form-control" placeholder="Email Address"  type="text"/>
                          </div>
                        </div>
                        <a href="#" className="bbtns">Subcribe</a>
                      </div>
                      <p>
                        You can unsubscribe us at any time
                      </p>
                    </div>
                    <div className="single-sidebar-widget most-popular-widget">
                      <h6 className="title">Most Popular</h6>
                      <div className="single-list flex-row d-flex">
                        <div className="thumb">
                          <img src={require("../../assets/img/m1.jpg")} alt=""/>
                        </div>
                        <div className="details">
                          <a href="image-post.html">
                            <h6>Help Finding Information
                              Online is so easy</h6>
                          </a>
                          <ul className="meta">
                            <li><a href="#"><span className="lnr lnr-calendar-full"></span>03 April, 2018</a></li>
                            <li><a href="#"><span className="lnr lnr-bubble"></span>06</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="single-list flex-row d-flex">
                        <div className="thumb">
                          <img src={require("../../assets/img/m2.jpg")} alt=""/>
                        </div>
                        <div className="details">
                          <a href="image-post.html">
                            <h6>Compatible Inkjet Cartr
                              world famous</h6>
                          </a>
                          <ul className="meta">
                            <li><a href="#"><span className="lnr lnr-calendar-full"></span>03 April, 2018</a></li>
                            <li><a href="#"><span className="lnr lnr-bubble"></span>06</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="single-list flex-row d-flex">
                        <div className="thumb">
                          <img src={require("../../assets/img/m3.jpg")} alt=""/>
                        </div>
                        <div className="details">
                          <a href="image-post.html">
                            <h6>5 Tips For Offshore Soft
                              Development </h6>
                          </a>
                          <ul className="meta">
                            <li><a href="#"><span className="lnr lnr-calendar-full"></span>03 April, 2018</a></li>
                            <li><a href="#"><span className="lnr lnr-bubble"></span>06</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="single-list flex-row d-flex">
                        <div className="thumb">
                          <img src={require("../../assets/img/m4.jpg")} alt=""/>
                        </div>
                        <div className="details">
                          <a href="image-post.html">
                            <h6>5 Tips For Offshore Soft
                              Development </h6>
                          </a>
                          <ul className="meta">
                            <li><a href="#"><span className="lnr lnr-calendar-full"></span>03 April, 2018</a></li>
                            <li><a href="#"><span className="lnr lnr-bubble"></span>06</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="single-sidebar-widget social-network-widget">
                      <h6 className="title">Social Networks</h6>
                      <ul className="social-list">
                        <li className="d-flex justify-content-between align-items-center fb">
                          <div className="icons d-flex flex-row align-items-center">
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                            <p>983 Likes</p>
                          </div>
                          <a href="#">Like our page</a>
                        </li>
                        <li className="d-flex justify-content-between align-items-center tw">
                          <div className="icons d-flex flex-row align-items-center">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                            <p>983 Followers</p>
                          </div>
                          <a href="#">Follow Us</a>
                        </li>
                        <li className="d-flex justify-content-between align-items-center yt">
                          <div className="icons d-flex flex-row align-items-center">
                            <i className="fa fa-youtube-play" aria-hidden="true"></i>
                            <p>983 Subscriber</p>
                          </div>
                          <a href="#">Subscribe</a>
                        </li>
                        <li className="d-flex justify-content-between align-items-center rs">
                          <div className="icons d-flex flex-row align-items-center">
                            <i className="fa fa-rss" aria-hidden="true"></i>
                            <p>983 Subscribe</p>
                          </div>
                          <a href="#">Subscribe</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;

App.propTypes = {
  children: PropTypes.node,
};
