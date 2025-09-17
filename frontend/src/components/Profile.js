import React, { Component } from 'react';
import './css/animate.css';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as fa from 'react-icons/lib/fa/';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      profile_id : this.props.match.params.id,
      user_profile: {},
      user_id: "1",
      user_name: "UseName",
      posts_by_user : []
    }

    this.getPosts = this.getPosts.bind(this);
    this.getProfile = this.getProfile.bind(this);
    this.getPosts();
    this.getProfile();
  }

  getPosts(){
    fetch('http://localhost:3001/profile/posts?id='+this.state.profile_id)
    .then((response) => {return response.json() })
    .then((result) => {
      this.setState({
        posts_by_user:result
      })
    })
  }

  getProfile(){
    fetch('http://localhost:3001/profile?id='+this.state.profile_id)
    .then((response) => {return response.json() })
    .then((result) => {
      this.setState({
        user_profile:result
      })
    })
  }

  render() {
    return (
    <div id="wrapper">
        <nav className="navbar-default navbar-static-side" role="navigation" style={{ position: 'fixed' }}>
           <div className="sidebar-collapse">
               <ul className="nav metismenu" id="side-menu">
                   <li className="nav-header">
                       <div className="dropdown profile-element"> <span>
                           <img alt="image" className="img-circle" src="img/profile_small.jpg" />
                            </span>
                           <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                               <span className="clear"> <span className="block m-t-xs"> <strong className="font-bold">{this.state.user_profile.name}</strong></span>
                               </span>
                            </a>
                       </div>
                       <div className="logo-element">
                       </div>
                   </li>
                   <li className="active">
                       <a href="/home"><fa.FaStickyNote/><i className="fa fa-th-large"></i> <span className="nav-label">Dashboard</span> </a>
                       <a href={`/profile/${this.state.user_id}`}><fa.FaUser/><i className="fa fa-th-large"></i> <span className="nav-label">Profile</span> </a>
                       <a href={`/friends/${this.state.user_id}`}> <fa.FaGroup/><i className="fa fa-th-large"></i> <span className="nav-label">Friends</span> </a>
                       <a href="/home"> <fa.FaStreetView/><i className="fa fa-th-large"></i> <span className="nav-label">Edit Profile</span> </a>
                   </li>

                   <li className="landing_link">
                       <a href="/login"><fa.FaPowerOff/> <i className="fa fa-star"></i> <span className="nav-label"> LOG OUT</span></a>
                   </li>
                   <li>
                       <a href="index-2.html"> <fa.FaPaperPlane/><i className="fa fa-th-large"></i> <span className="nav-label">Messages</span>
                       </a>
                           <div className="sidebard-panel">
                               <div>
                                   <h4>Recent Messages <span className="badge badge-info pull-right">16</span></h4>
                                   <div className="feed-element">
                                       <a href="#" className="pull-left">
                                           <img alt="image" className="img-circle" src="img/a1.jpg"/>
                                       </a>
                                       <div className="media-body">
                                           There are many variations of passages of Lorem Ipsum available.
                                           <br/>
                                           <small className="text-muted">Today 4:21 pm</small>
                                       </div>
                                   </div>
                                   <div className="feed-element">
                                       <a href="#" className="pull-left">
                                           <img alt="image" className="img-circle" src="img/a2.jpg"/>
                                       </a>
                                       <div className="media-body">
                                           TIt is a long established fact that.
                                           <br/>
                                           <small className="text-muted">Yesterday 2:45 pm</small>
                                       </div>
                                   </div>
                                   <div className="feed-element">
                                      <a href="#" className="pull-left">
                                          <img alt="image" className="img-circle" src="img/a3.jpg"/>
                                      </a>
                                      <div className="media-body">
                                        Many desktop publishing packages.
                                        <br/>
                                        <small className="text-muted">Yesterday 1:10 pm</small>
                                      </div>
                                    </div>
                                    <div className="feed-element">
                                        <a href="#" className="pull-left">
                                         <img alt="image" className="img-circle" src="img/a4.jpg"/>
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
                <nav className="navbar navbar-static-top" role="navigation" style={{ marginBottom:'0' }}>
                    <div className="navbar-header">
                        <a className="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i className="fa fa-bars"></i> </a>
                        <form role="search" className="navbar-form-custom" action="http://webapplayers.com/inspinia_admin-v2.4/search_results.html">
                            <div className="form-group">
                                <input type="text" placeholder="Search for something..." className="form-control" name="top-search" id="top-search"/>
                            </div>
                        </form>
                    </div>
                    <ul className="nav navbar-top-links navbar-right">
                        <li>
                            <a href="login.html">
                               <fa.FaPowerOff/> <i className="fa fa-sign-out"></i> Log out
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

          <div className="row  border-bottom white-bg dashboard-header" >
            <div className="col-sm-3">
              <h2>Profile Page</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8" style={{position: 'fixed'}}>
              <div className="row">
                <div className="col-lg-4">
                  <div className="widget-head-color-box navy-bg p-lg text-center">
                    <div className="m-b-md">
                      <h2 className="font-bold no-margins">{this.state.user_profile.name}</h2>
                    </div>
                    <img src="img/a4.jpg" className="img-circle circle-border m-b-md" alt="profile"/>
                    <div>
                      <br/>
                      <span>100 Tweets</span> |
                      <span>350 Following</span> |
                      <span>610 Followers</span>
                    </div>
                  </div>

                  <div className="widget-text-box">
                    <h4 className="media-heading">{this.state.user_profile.name}</h4>
                    <h4 className="media-heading">About:</h4>
                    <p>{this.state.user_profile.about}</p>
                    <div className="text-right">
                      <a className="btn btn-xs btn-primary"><i className="fa fa-heart"></i> ADD AS CONTACT</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-2">
                <div className="widget yellow-bg p-lg text-center">
                  <div className="m-b-md">
                    <i className="fa fa-thumbs-up fa-4x"></i>
                    <h1 className="m-xs">520</h1>
                    <small>POSTS</small>
                  </div>
                </div>
              </div>

              <div className="col-lg-2">
                <div className="widget navy-bg p-lg text-center">
                  <div className="m-b-md">
                    <i className="fa fa-shield fa-4x"></i>
                      <h1 className="m-xs">456</h1>
                        <small>FRIENDS</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {this.state.posts_by_user.map((post) => {
            return(
              <div className="row">
                  <div className="col-lg-9" style={{float:'right'}}>
                      <div className="ibox float-e-margins">
                          <div className="ibox-title">
                              <h5> {post.author_name}<small className="m-l-sm">Timestamp</small></h5>
                          </div>
                          <div className="ibox-content">
                              <h2 >
                                  {post.content}<br/>
                              </h2>
                              <p>
                                  <small>
                                    {post.content}
                                  </small>
                              </p>
                          </div>
                          <div className="ibox-footer">
                              <span className="pull-right">
                                <button class="btn-primary" style={{width: '100px', height: '20px'}} type="submit">COMMENT</button>
                          </span>
                              <button class="btn-primary" style={{width: '100px', height: '20px'}} type="submit">LIKE</button>
                          </div>
                      </div>
                  </div>
              </div>
            )})
          }
        </div>
    </div>
    );
  }
}

export default App;
