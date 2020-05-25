import React from "react"
import { Link } from 'react-router-dom';
import { Toolbar, AppBar, Button, Typography, } from '@material-ui/core';
import './Navegacion.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import Menu from './Menu';

import { useState } from 'react';



export default function Navegacion() {


  const [usuario, setUsuario] = useState({});

  const logginGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      setUsuario(user)

      // ...
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });





  }
  return (
    <div>
    <div className="Center">

      <Toolbar variant="dense">
        <Menu />

        <div className="Option" >
          <Button color="inherit" onClick={logginGoogle}  > GOOGLE<Typography>:{usuario.displayName}</Typography></Button>
        </div>

      </Toolbar>
    </div>

    </div>
  )

}

