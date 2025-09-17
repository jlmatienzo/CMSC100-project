import React, { Component } from 'react';
import './css/animate.css';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(props){
        super(props);
        this.state = {
            Email: "",//id of currently logged in user
            Password: "",
            Name: "",
            About: ""
        };
      this.Register = this.Register.bind(this);
  }
  
  Register(e){

      console.log("iamhere");
      fetch('http://localhost:3001/signup',
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            'email': this.state.Email,
            'password': this.state.Password,
            'name': this.state.Name,
            'about': ""
          })
        }
      )
    }

  render() {
    return (
   <div className="body-wrapper gray-bg" style={{padding: '170px'}}>
    <div className="loginColumns animated fadeInDown">
        <div className="row">

            <div className="col-md-6">
                <h2 className="font-bold">Register to Intereact</h2>

                <p>
                    Intereact is a Social Media Networking site that caters connections for many
                </p>

                <p>
                    THIS IS A PROJECT OF MAURICIO-MATIENZO-LEANO-INGAN for CMSC 100
                </p>

                <p>
                    sana po pumasa kami lahat. AMEN
                </p>

                <p>
                </p>

            </div>
            <div className="col-md-6">
                <div className="ibox-content">
                    <form className="m-t"  action="/home">
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email Address" onChange={(e)=>{
                              this.setState({Email:e.target.value})
                            }} required/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password" onChange={(e)=>{
                              this.setState({Password:e.target.value})
                            }} required/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Name" onChange={(e)=>{
                              this.setState({Name:e.target.value})
                            }} required/>
                        </div>
                        <button type="submit" className="btn btn-primary block full-width m-b" onClick={this.Register}>Join INTEREACT</button>
                    </form>
                </div>
            </div>
        </div>
        <hr/>
    </div>
   </div>
    );
  }
}

export default App;
