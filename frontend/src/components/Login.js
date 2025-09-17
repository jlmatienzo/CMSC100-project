import React, { Component } from 'react';
import './css/animate.css';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {

    console.log('state: ', this.state);

    return (
   <div className="body-wrapper gray-bg" style={{padding: '170px'}}>
        <div className="loginColumns animated fadeInDown">
            <div className="row">

                <div className="col-md-6">
                    <h2 className="font-bold">Welcome to Intereact</h2>
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
                                <input type="email" className="form-control" placeholder="Email Address" required=""/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password" required=""/>
                            </div>
                            <button type="submit" className="btn btn-primary block full-width m-b">Login</button>
                            <a href="">
                                <small>Forgot password?</small>
                            </a>
                            <p className="text-muted text-center">
                                <small>Do not have an account?</small>
                            </p>
                            <a className="btn btn-sm btn-white btn-block" href="/signup">Create an account</a>
                        </form>
                    
                    </div>
                </div>
            </div>
        </div>
   </div>
    );
  }
}

export default App;
