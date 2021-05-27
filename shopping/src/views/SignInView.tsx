import './SignInView.css'


export const SignInView = () => {
    return (
  
        <div className="wrapper">
        <div className="first-dev">
            
           
            <span className="header-text">Login</span>
                <span className="user-name" >Username</span> <input className="user-input" placeholder="Username"/>

                <span className="user-password" >Password </span>
                <input className="password-input" placeholder="Password"/>
                <button className="btn-grad-small" id="btn-grad-login" >Login</button>
                <button className="btn-grad-small" id="btn-grad-register">Register</button>
                
                
            </div>
            </div>
       
    )
}
