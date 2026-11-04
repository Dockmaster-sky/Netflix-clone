import React from 'react'


function Login() {
  return (
    <div className="container">
        <div className="row">
            <div className="header">
                <div className="logo">
                    <div className="logo__wrapper">
                        <img src="" alt="" className="logo" />
                        <h2>Netflix</h2>
                    </div>
                </div>
                <div className="buttons">
                    <select name="hom__select--language" id="">
                        <option value="english" className="cars">English</option>
                    </select>
                    <button className="sign__in">Sign In</button>
                </div>
            </div>
            <div className="body">
                <div className="home__title">
                    <h1 className="title">Unlimited movies, TV shows, and more</h1>
                </div>
                <div className="home__price">Starts at $8.99. Cancel anytime.</div>
                <div className="home__create--prompt">
                    <h3 className="">ready to watch? Enter your email to create or restart your membership.</h3>
                </div>
                <div className="home__sign-in">
                    <input type="text" className="email__request" />
                    <button className="get__started">Get Started</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Login
