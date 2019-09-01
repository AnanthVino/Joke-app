import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  const [firstname, updateFirstname] = useState('');
  const [lastname, updateLastname] = useState('');
  
  const save = () => {
    localStorage.setItem("firstname", firstname);
    localStorage.setItem("lastname", lastname);
  }

  return (
    <div className="container m-t100">
      <div className="row">
        <div className="col-md-12"> 
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card rounded-0">
                <div className="card-header">
                  <h3 className="mb-0">User</h3>
                </div>
                <div className="card-body">
                  <form className="form" id="formUser" name="formUser">
                    <div className="form-group">
                      <label>Firstname</label> 
                      <input className="form-control rounded-0" type="text" onChange={(evt) => updateFirstname(evt.target.value)} />
                    </div>
                    <div className="form-group">
                      <label>Lastname</label> 
                      <input className="form-control rounded-0" type="text" onChange={(evt) => updateLastname(evt.target.value)} />
                    </div>
                    <div className="d-flex justify-content-center">
                      <Link className="btn btn-lg save rounded-0" to="/joke" onClick={save}>Submit</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default Home;