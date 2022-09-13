import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../services/firebase";
import { getAdmin } from "../api/adminDB.js";
import AuthContext from "../context/auth-context";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const [userCred, setUserCred] = useState({
    email: "",
    password: ""
  });
  const [style, setStyle] = useState("");

  const onChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserCred((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, userCred.email, userCred.password)
      .then((cred) => {
        const user = cred.user;
        let userId = user.uid;
        // alert("Success!!!");
        // do a db call, and fetch the admin details, and check whether he is admin
        getAdmin(userId, (admin) => {
          if (admin === undefined) {
            alert("You're not admin!!!");
          } else {
            sessionStorage.setItem("userId", userId);
            sessionStorage.setItem("role", admin.role);
            authCtx.setUser(admin);
            authCtx.setRole(admin.role);
            authCtx.setIsLoggedIn(true);
            navigate("/admin", { replace: true });
          }
        });
      })
      .catch((e) => {
        if (e.code === "auth/wrong-password") {
          alert("Incorrect password. Try again.");
        } else if (e.code === "auth/network-request-failed") {
          alert("Internet connection is down!!!");
        } else {
          alert("User doesn't exist. Please do register.");
        }
      });
  };

  function showHidePassword(target) {
    var input = document.getElementById("password-input");
    if (input.getAttribute("type") === "password") {
      setStyle("view");
      input.setAttribute("type", "text");
    } else {
      setStyle("");
      input.setAttribute("type", "password");
    }
    return false;
  }

  return (
    <>
      <section className="section">
        <div className="box">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>

          <div className="container">
            <div className="form">
              <h2>ADMIN LOGIN</h2>
              <form onSubmit={submitHandler}>
                <div className="inputBx">
                  <input
                    type="email"
                    required
                    name="email"
                    value={userCred.email}
                    onChange={onChangeHandler}
                  />
                  <span>Email</span>
                  <i className="fas fa-user-circle"></i>
                </div>
                <div className="inputBx password">
                  <input
                    id="password-input"
                    type="password"
                    name="password"
                    required
                    value={userCred.password}
                    onChange={onChangeHandler}
                  />
                  <span>Password</span>
                  <div
                    className={`password-control ${style}`}
                    onClick={showHidePassword}
                  ></div>
                  <i className="fas fa-key"></i>
                </div>
                {/* <label className="remember">
                  <input type="checkbox" />
                  Remember
                </label> */}
                <div className="inputBx">
                  <input type="submit" value="Log in" />
                </div>
              </form>
              <p className="para">
                Forgot password? <a href="#">Click Here</a>
              </p>
              {/* <p className="para">
                Don't have an account <a href="#">Sign up</a>
              </p> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
