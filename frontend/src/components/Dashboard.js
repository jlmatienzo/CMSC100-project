import React, { Component } from 'react';
import './css/animate.css';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as fa from 'react-icons/lib/fa/';

export default class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            user_id: "5a1a5f01abeaec796529936b",//id of currently logged in user
            user_name: "John Louie Matienzo",
            posts: [],
            post_content: ""
        };
        this.getPosts = this.getPosts.bind(this);
        this.submitPost = this.submitPost.bind(this);
        this.getPosts();
    }

    getPosts(){
      fetch('http://localhost:3001/posts')
      .then((response) => {return response.json() })
      .then((result) => {
        this.setState({posts:result})
      })
    }

    submitPost(e){
      fetch('http://localhost:3001/create_post',
        {
    			method: 'POST',
    			headers: {
    				'Accept': 'application/json',
    				'Content-Type': 'application/json',
    			},
    			body: JSON.stringify({
    				'author_id': this.state.user_id,
    				'author_name': this.state.user_name,
    				'content': this.state.post_content//get value from form
    			})
    		}
      )
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
                        <form role="search" className="navbar-form-custom" action="http://localhost:3000/search">
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
                    <h2>Welcome User</h2>
                    <small>You have 42 messages and 6 notifications.</small>
                </div>
            </div>

            <br/>

            <div className="row  border-bottom white-bg dashboard-header">
                <div className="col-sm-14">
                    <div className="form-group has-success"><label className="col-sm-14 control-label">Write a new post</label>

                    <form className="m-t" action="http://localhost:3000/home">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Write your post here..." style={{height: '100px'}} required=""
                              onChange={ (e) => {
                                this.setState({post_content: e.target.value});
                              }}
                            />
                            <br/>
                            <button type="submit" className="btn btn-primary pull-right" style={{width:'100px', height: '30px'}} onClick={this.submitPost}>Post</button>
                        </div>
                    </form>

                    </div>
                </div>
            </div>
            <br/>
            {this.state.posts.map(
                (post)=> {
                    return(
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ibox float-e-margins">
                                <div className="ibox-title">
                                    <h5> {post.author_name}<small className="m-l-sm">Timestamp</small></h5>
                                </div>
                                <div className="ibox-content">
                                    <h2 >
                                        {post.content}<br/>
                                    </h2>
                                    <p>
                                        {post.content}
                                    </p>
                                </div>
                                <div className="ibox-footer">
                                    <span className="pull-right">
                                      <form className="m-t" action={`http://localhost:3000/post/${post._id}`} >
                                        <button className="btn-primary" style={{width: '100px', height: '20px'}} type="submit">COMMENT</button>
                                      </form>
                                    </span>
                                      <button className="btn-primary" style={{width: '100px', height: '20px'}} type="submit">LIKE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    </div>
    );
  }
}
