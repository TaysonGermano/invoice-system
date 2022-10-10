import React, { useState, useContext, useEffect } from "react";
import LoginStyles from "../../Styles/LoginStyles";
import { useNavigate } from "react-router-dom";
import { Auth } from "../../Context/auth";

export default function Login() {
  const [error, setError] = useState(false);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const auth = useContext(Auth);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((curr) => ({ ...curr, [e.target.name]: e.target.value }));
  };

  const submit = () => {
    if (user.username === "test" && user.password === "test") {
      auth.setUserLoggedIn(true);
      navigate("/");

      // saves user in case the current window is refreshed
      sessionStorage.setItem("user", JSON.stringify(user));

      error && setError(false);
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    auth.userLoggedIn && navigate("/");
  }, []);

  const classes = LoginStyles();

  document.title = `Login - Invoice App`;

  return (
    <>
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1>Login</h1>
        <p>Login to get access to the dashboard</p>
      </div>
      <div className={classes.Form}>
        {error && (
          <p
            style={{
              color: "#fff",
              background: "rgb(236, 87, 87)",
              padding: "5px 10px",
              borderRadius: "5px",
            }}
          >
            Invalid credentials
          </p>
        )}
        <form className="form">
          <div className="form-input">
            <label>username</label>
            <br />
            <input
              type="text"
              onChange={handleChange}
              value={user.username}
              required
              name="username"
            />
          </div>
          <div className="form-input">
            <label>username</label>
            <br />
            <input
              type="password"
              onChange={handleChange}
              name="password"
              required
              value={user.password}
            />
          </div>
          <div className="btn form-input">
            <button type="button" className="save-btn" onClick={submit}>
              Login
            </button>
          </div>
        </form>
      </div>
      <p style={{ textAlign: "center" }}>
        <sub>username: test | password: test</sub>
      </p>
    </>
  );
}
