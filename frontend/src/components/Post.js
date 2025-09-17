import React, { Component } from 'react';
import './css/animate.css';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as fa from 'react-icons/lib/fa/';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user_id: "",
      user_name: "John Louie",
      post_id: this.props.match.params.id,
      post_details: {},
      comments: [],
      comment_content: ""
    };
    this.getDetails = this.getDetails.bind(this);
    this.getComments = this.getComments.bind(this);
    this.submitComment = this.submitComment.bind(this);
    this.getDetails();
    this.getComments();
  }

  getDetails(){
    fetch('http://localhost:3001/post?post_id='+this.state.post_id)
    .then((response) => { return response.json() })
    .then((result) => {
      this.setState({
        post_details: result
      })
    });
  }

  getComments(){
      fetch('http://localhost:3001/post/comments?post_id='+this.state.post_id)
      .then((response) => { return response.json() })
      .then((result) => {
        this.setState({
          comments:result
        })
      });
    }

    submitComment(e){
      fetch('http://localhost:3001/post/create_comment',
        {
    			method: 'POST',
    			headers: {
    				'Accept': 'application/json',
    				'Content-Type': 'application/json',
    			},
    			body: JSON.stringify({
            'postid': this.state.post_id,
            'author_id': this.state.user_id,
    				'author_name': this.state.user_name,
    				'content': this.state.comment_content//get value from form
    			})
    		}
      )
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
                        <form role="search" className="navbar-form-custom" action="http://localhost:3000/search">
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

            <div className="row  border-bottom white-bg dashboard-header">
                <div className="col-sm-3">
                    <h2>Post Page</h2>
                </div>
            </div>
            <br/>
             <div className="wrapper wrapper-content  animated fadeInRight article">
                        <div className="row">
                            <div className="col-lg-10 col-lg-offset-1">
                                <div className="ibox">
                                    <div className="ibox-content">
                                        <div className="pull-right">
                                            <button className="btn btn-white btn-xs" type="button">Edit Post</button>

                                        </div>
                                        <div className="text-center article-title">
                                        <span className="text-muted"><i className="fa fa-clock-o"></i> {this.state.post_details.timestamp}</span>
                                            <h1>
                                                { this.state.post_details.content }
                                            </h1>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h2>Comments:</h2>
                                            </div>
                                            <div>
                                                <form action="" method="get">
                                                    <div className="input-group">
                                                        <input type="text" placeholder=" Write Comment" name="search" className="form-control input-lg"
                                                          onChange={ (e) => {
                                                            this.setState({comment_content:e.target.value })
                                                          }}
                                                        />
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-lg btn-primary" type="submit" onClick={this.submitComment}>
                                                                Post Comment
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                        {this.state.comments.map((comment) => {
                                          return(
                                            <div className="social-feed-box">
                                                <div className="social-avatar">
                                                    <div className="media-body">
                                                        <a href="#">
                                                            {comment.author_name}
                                                        </a>
                                                        <small className="text-muted">{comment.timestamp}</small>
                                                    </div>
                                                </div>
                                                <div className="social-body">
                                                    <p>
                                                      {comment.content}
                                                    </p>
                                                </div>
                                                <div className="ibox-footer">
                                                  <button className="btn-primary" style={{width: '100px', height: '20px'}} type="submit"
                                                    onClick={()=>{}}
                                                  >LIKE</button>
                                                </div>
                                            </div>
                                          )
                                        })}

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
