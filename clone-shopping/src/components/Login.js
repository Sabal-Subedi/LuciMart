import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "../css/Login.css";
import { auth } from "../firebase";

const Login = () => {
  const history = useHistory();
  const { user, dispatch } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerHandler = (e) => {
    e.preventDefault();
    // some firebase register codes
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          console.log("user register successfully");
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  const signInHandler = (e) => {
    e.preventDefault();
    // some firebase login codes
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        console.log("signin successful");
        console.log("User added ");
        dispatch({
          type: "ADD USER",
          user: {
            email: email,
            password: password,
          },
        });
        console.log(user);
        history.push("/");
      })
      .catch((error) => error.message);
  };

  return (
    <div className="login">
      <Link className="login__link" to="/">
        <h2 className="login__title">Login</h2>
      </Link>
      <form className="login__form" onSubmit={signInHandler}>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="example@gmail.com"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
          placeholder="********"
          minLength="8"
        />
        <input className="submitBtn" type="submit" name="submit" />
      </form>
      <button onClick={registerHandler} className="registerBtn">
        Create new Account
      </button>
    </div>
  );
};

export default Login;
