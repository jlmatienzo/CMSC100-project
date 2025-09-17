import React, { Component } from 'react';
import './css/animate.css';
import './css/style.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
    <div id="wrapper">
         <nav className="navbar-default navbar-static-side"  style={{ position: 'fixed' }}>
            <div className="sidebar-collapse">
                <ul className="nav metismenu" id="side-menu">
                    <li className="nav-header">
                        <div className="dropdown profile-element"> <span>
                            <img alt="" className="img-circle" src="img/profile_small.jpg" />
                             </span>
                            <a data-toggle="dropdown" className="dropdown-toggle" href="">
                                <span className="clear"> <span className="block m-t-xs"> <strong className="font-bold">User Name</strong></span>
                                </span>
                             </a>
                        </div>
                        <div className="logo-element">
                        </div>
                    </li>
                    <li className="active">
                        <a href="index-2.html"><i className="fa fa-th-large"></i> <span className="nav-label">Dashboard</span> <span className="fa arrow"></span></a>
                        <a href="index-2.html"><i className="fa fa-th-large"></i> <span className="nav-label">Profile</span> <span className="fa arrow"></span></a>
                        <a href="index-2.html"><i className="fa fa-th-large"></i> <span className="nav-label">Other Users</span> <span className="fa arrow"></span></a>
                        <a href="index-2.html"><i className="fa fa-th-large"></i> <span className="nav-label">Edit Profile</span> <span className="fa arrow"></span></a>
                        <a href="index-2.html"><i className="fa fa-th-large"></i> <span className="nav-label">Settings</span> <span className="fa arrow"></span></a>
                    </li>
                    <li className="landing_link">
                        <a target="_blank" href="landing.html"><i className="fa fa-star"></i> <span className="nav-label"> LOG OUT</span></a>
                    </li>
                    <li>
                        <a href="index-2.html"><i className="fa fa-th-large"></i> <span className="nav-label">Messages</span>
                        </a>
                            <div className="sidebard-panel">
                                <div>
                                    <h4>Recent Messages <span className="badge badge-info pull-right">16</span></h4>
                                    <div className="feed-element">
                                        <a href="" className="pull-left">
                                            <img alt="" className="img-circle" src="img/a1.jpg"/>
                                        </a>
                                        <div className="media-body">
                                            There are many variations of passages of Lorem Ipsum available.
                                            <br/>
                                            <small className="text-muted">Today 4:21 pm</small>
                                        </div>
                                    </div>
                                    <div className="feed-element">
                                        <a href="" className="pull-left">
                                            <img alt="" className="img-circle" src="img/a2.jpg"/>
                                        </a>
                                        <div className="media-body">
                                            TIt is a long established fact that.
                                            <br/>
                                            <small className="text-muted">Yesterday 2:45 pm</small>
                                        </div>
                                    </div>
                                    <div className="feed-element">
                                        <a href="" className="pull-left">
                                            <img alt="" className="img-circle" src="img/a3.jpg"/>
                                        </a>
                                        <div className="media-body">
                                            Many desktop publishing packages.
                                            <br/>
                                            <small className="text-muted">Yesterday 1:10 pm</small>
                                        </div>
                                    </div>
                                    <div className="feed-element">
                                        <a href="" className="pull-left">
                                            <img alt="" className="img-circle" src="img/a4.jpg"/>
                                        </a>
                                    <div className="media-body">
                                            The generated Lorem Ipsum is therefore always free.
                                            <br/>
                                        <small className="text-muted">Monday 8:37 pm</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>

        <div id="page-wrapper" className="gray-bg dashbard-1">
            <div className="row border-bottom">
                <nav className="navbar navbar-static-top"  style={{ marginBottom:'0' }}>
                    <div className="navbar-header">
                        <a className="navbar-minimalize minimalize-styl-2 btn btn-primary " href=""><i className="fa fa-bars"></i> </a>
                        <form role="search" className="navbar-form-custom" action="">
                            <div className="form-group">
                                <input type="text" placeholder="Search for something..." className="form-control" name="top-search" id="top-search"/>
                            </div>
                        </form>
                    </div>
                    <ul className="nav navbar-top-links navbar-right">
                        <li>
                            <a href="/">
                                <i className="fa fa-sign-out"></i> Log out
                            </a>
                        </li>
                        <li>
                            <a className="right-sidebar-toggle">
                                <i className="fa fa-tasks"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="row  border-bottom white-bg dashboard-header">
                <div className="col-sm-3">
                    <h2>Search Results</h2>
                </div>
            </div>
            <br/>

            <div className="wrapper wrapper-content animated fadeInRight">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ibox float-e-margins">
                            <div className="ibox-content">
                                <h2>
                                    n results found for: <span className="text-navy">"Search Keyword"</span>
                                </h2>
                                <small>Request time  (0.23 seconds)</small>

                                <div className="search-form">
                                    <form action="" method="get">
                                        <div className="input-group">
                                            <input type="text" placeholder="Search Again" name="search" className="form-control input-lg"/>
                                            <div className="input-group-btn">
                                                <button className="btn btn-lg btn-primary" type="submit">
                                                    Search
                                                </button>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                                <div className="hr-line-dashed"></div>
                                <div className="search-result">
                                    <h3><a href="">Sample Profile</a></h3>
                                    <p>
                                        About the user
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default App;
