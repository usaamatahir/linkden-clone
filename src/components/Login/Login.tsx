import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/userSlice";
import { auth } from "../Firebase/Firebase";
import "./Login.css";

const Login = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [profilePic, setProfilePic] = useState<string>("");
  const dispatch = useDispatch();

  const loginToApp = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user?.email,
            uid: userAuth.user?.uid,
            displayName: userAuth.user?.displayName,
            profilePic: userAuth.user?.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };
  const register = () => {
    if (!name) {
      return alert("Please enter a full Name!");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          ?.updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user?.email,
                uid: userAuth.user?.uid,
                displayName: userAuth.user?.displayName,
                profilePic: profilePic,
              })
            );
          });
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div>
      <div className="login">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1920px-LinkedIn_Logo.svg.png"
          alt="Linkedin Logo"
        />

        <form>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
          />
          <input
            type="text"
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
            placeholder="Profile Pic URL (optional)"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            name=""
            id=""
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            name=""
            id=""
          />
          <button type="submit" onClick={loginToApp}>
            Sign In
          </button>
        </form>
        <p>
          Not a member?{" "}
          <span className="login__register" onClick={register}>
            Register Now
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
