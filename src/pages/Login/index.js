import React, { useState, useEffect } from 'react';
import './Login.scss';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../_actions/users.action';


function Login(){


    const [inputs, setInputs] = useState({
        email:'',
        password:''
    })
    const { email, password } = inputs;
    const dispatch = useDispatch();
    const loading = useSelector(state => state.users.isLoading);
    const errorMsg = useSelector(state => state.users.error);
    

    function handleChange(e) {
        const { id, value } = e.target;
        setInputs(inputs => ({ ...inputs, [id]: value }));
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(userActions.login(email,password));
    }

    return(
        <div className="login-card">
            <div className="card m-5 p-5">
            <h2>Login</h2>
            <form>
                <div className="form-group">
                    <label >Email address</label>
                    <input onChange={handleChange} type="email" className={`form-control ${ errorMsg.success === false ? `invalid` : ''}`} id="email" aria-describedby="emailHelp" value={email}></input>
                    {
                        errorMsg.success === false &&  <small id="emailHelp" className="form-text text-invalid">{errorMsg.email[0]}</small>
                    }
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input onChange={handleChange} type="password" className="form-control" id="password"></input>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                    <label className="form-check-label">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                    { loading && <span className="spinner-border spinner-border-sm mr-1"></span>}
                    Submit</button>
                </form>
        </div>
        </div>
    );
}

export default Login;