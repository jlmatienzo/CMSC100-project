import React, { Component } from 'react';
import './css/animate.css';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as fa from 'react-icons/lib/fa/';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      profile_id: this.props.match.id,
      user_id: "5a1ad32258165220f48b5bc2",
      user_name: "",
      friends: [1, 2, 3, 4]
    };

    this.getFriends = this.getFriends.bind(this);
    this.getFriends();
  }

  getFriends(){
    fetch('https://localhost:3001/profile/friends?id='+this.state.user_id)
    .then((response) => { return response.json() })
    .then((result) => {
        console.log("\n\n"+result+"\n\n")
        this.setState({
          friends: result
        })
      }
    );
  }

  render() {
    return (
    <div id="wrapper">
        <nav className="navbar-default navbar-static-side" style={{ position: 'fixed' }}>
           <div className="sidebar-collapse">
               <ul className="nav metismenu" id="side-menu">
                   <li className="nav-header">
                       <div className="dropdown profile-element"> <span>
                           <img alt="" className="img-circle" src="img/profile_small.jpg" />
                            </span>
                           <a data-toggle="dropdown" className="dropdown-toggle" href="">
                               <span className="clear"> <span className="block m-t-xs"> <strong className="font-bold">{this.state.user_name}</strong></span>
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
                <nav className="navbar navbar-static-top" style={{ marginBottom:'0' }}>
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

            <div className="row  border-bottom white-bg dashboard-header">
                <div className="col-sm-3">
                    <h2>Friend List</h2>
                </div>
            </div>
            <br/>
        <div className="row">
            <div className="col-lg-4">

                {this.state.friends.map((friend) => {
                  return(
                  <div className="contact-box">
                      <a href="profile.html">
                      <div className="col-sm-4">
                          <div className="text-center">
                              <img alt="" class="img-circle m-t-xs img-responsive" src="img/a2.jpg"/>
                          </div>
                      </div>
                      <div class="col-sm-8">
                          <h3><strong>friendly</strong></h3>
                          <p><i class="fa fa-map-marker"></i>{friend.email}</p>
                          <address>
                              <strong>About:</strong><br/>
                              {friend.about}<br/>
                              <abbr title="Phone">P:</abbr> (123) 456-7890
                          </address>
                      </div>
                      <div class="clearfix"></div>
                          </a>
                  </div>
                  )
                })}

            </div>
        </div>

        </div>
    </div>
    );
  }
}

export default App;
