const Login = () => {
    return (
        <div className="login-form-container">
            <h3>Please Log In</h3>
            <form className="login-form">
                <label htmlFor="username-input">Your Username</label>
                <input type="text" id="username-input" placeholder="enter username" />
                <br></br>
                <label htmlFor="password-input">Your Password</label>
                <input type="password" id="password-input" placeholder="enter password" />
                <br></br>
            </form>

        </div>
    )
}
export default Login;