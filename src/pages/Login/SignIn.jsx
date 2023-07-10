import { useState, React } from 'react'
import './SignIn.css'

const SignIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async(e)=>{
    e.preventDefault();
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password
      }),
    });

    const data = await res.json();
    console.log(data);
    if (!data || data.status === 400) {
      window.alert("INVALID DETAILS");
    } else {
      window.history.pushState(null, null, "/dashboard");
      window.location.reload();
    }

  }

  return (
  <div className="background">
    <div className='container'>
    <form method="POST">
    <div className="title">Student Login</div>
    <div className="input-box underline">
      <input type="text" placeholder="Enter Your Email" required="" name="email"  value={email}
              onChange={(e)=>setEmail(e.target.value)}/>
      <div className="underline"></div>
    </div>
    <div className="input-box">
      <input type="password" placeholder="Enter Your Password" required="" name="password" value={password}
              onChange={(e)=>setPassword(e.target.value)}/>
      <div className="underline"></div>
    </div>
    <div className="input-box button">
      <input type="submit" name="" value="Continue" onClick={loginUser}/>
    </div>
    <div className="login-signup"><span className="text">Not a member?  <a className="text signup-link" href="/signup">Signup Now</a></span></div>
  </form>
    </div>
  </div>
  )
}

export default SignIn