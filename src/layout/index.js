import React from 'react';
import Header from '../components/Header';
import Accordion from '../components/Accordion';
function Layout (props) {
    return (
      <div>
        <Header/>
        <div className="container-acc">
            <div style={{padding:"3rem",marginBottom:"-4%"}} className="row">
                <h4>Personal Data</h4>
            </div>
            <div style={{padding:"2rem"}} className="row">
                <div className="col-md-3">
                        <Accordion/>
                </div>
                <div className="col-md-9">
                    {props.children}
                </div>
            </div>
        </div>
      </div>
      
    );
  }

  export default Layout;