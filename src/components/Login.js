import axios from "axios";
import { useState } from "react";
import LoginPage from "./LoginPage";
import { Link} from "react-router-dom";


const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const [userData,setUserData] = useState([])

    const login = async()=>{
            await axios.post('http://localhost:4000/login',{
                email:email,
                password:password
            }).then(response=>setUserData(response.data))
            console.log(userData);
    }
    // const [loginData, setLoginData] = useState({
    //     email:"",
    //     password:""
    // });

    // async function get() {
    //     await axios.post('http://localhost:4000/login',{
    //         email:loginData.email,
    //         password:loginData.password
    //         })
    //         .then(data => {
    //             setUserData(data.data)
    //             console.log(data)
    //             console.log(userData)
    //         })
    //         .catch(err=>{
    //             setErrorMessage(true)
    //             forceUpdate()
    //         }
    //         );
    //         console.log(userData)
    //     }
        
    //     const getLoginData=(e)=>{
    //         const name = e.target.name
    //         const value = e.target.value
    //         setLoginData({
    //             ...loginData,
    //         [name]:value
    //     })
    // }
    return (
        <div>
            <div className="mb-3">
                <label className="form-label">email address or Phone</label>
                <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="email or Phone"
                    name="email"
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <label className="form-label">password</label>
                <input
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3" 
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <button className="btn btn-outline-success" onClick={login}>Login</button>
                {/* {errorMessage && <div className="text-danger">email or password is incorrect</div>} */}
            </div>
            <div className="text-primary"><Link to="/post">Create an Account or Register</Link></div>
            {/* {userData && <LoginPage userDetail={userData}/>} */}
            {userData && <LoginPage userDetail={userData}/>}
        </div>
    )
}

export default Login;