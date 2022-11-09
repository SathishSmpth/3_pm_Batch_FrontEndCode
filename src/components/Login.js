import axios from "axios";
import { useState } from "react";
import LoginPage from "./LoginPage";
import { Link} from "react-router-dom";


const Login = () => {
    const [userData, setUserData] = useState("");
    const [errorMessage, setErrorMessage] = useState(false);
    const [, forceUpdate] = useState("");
    const [loginData, setLoginData] = useState({
        Email:"",
        Password:""
    });

    async function get() {
        await axios.post('http://localhost:4000/login',{
            Email:loginData.Email,
            Password:loginData.Password
            })
            .then(data => {
                setUserData(data)
            })
            .catch(err=>{
                setErrorMessage(true)
                forceUpdate()
            }
            );
            console.log(userData)
        }
        
        const getLoginData=(e)=>{
            const name = e.target.name
            const value = e.target.value
            setLoginData({
                ...loginData,
            [name]:value
        })
    }
    return (
        <div>
            <div className="mb-3">
                <label className="form-label">Email address or Phone</label>
                <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Email or Phone"
                    name="Email"
                    onChange={getLoginData}
                    value={loginData.Email}
                />
                <label className="form-label">Password</label>
                <input
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3" 
                    type="password"
                    placeholder="Password"
                    name="Password"
                    onChange={getLoginData}
                    value={loginData.Password}
                />
                <button className="btn btn-outline-success" onClick={() => get()}>Login</button>
                {errorMessage && <div className="text-danger">Email or Password is incorrect</div>}
            </div>
            <div className="text-primary"><Link to="/post">Create an Account or Register</Link></div>
            {userData && <LoginPage userDetail={userData}/>}
        </div>
    )
}

export default Login;