import React from 'react';
import { Typography, Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import "./Zapatos.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import MisDatos from './Datos'
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAyDhbUf9Q934sDOR2kys4bzAA_8TiwEXQ",
    authDomain: "inventario-3a4b0.firebaseapp.com",
    databaseURL: "https://inventario-3a4b0.firebaseio.com",
    projectId: "inventario-3a4b0",
    storageBucket: "inventario-3a4b0.appspot.com",
    messagingSenderId: "16131723060",
    appId: "1:16131723060:web:da0f5f00a1e0a5f46f5f61",
    measurementId: "G-HWY0EFK3QF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();



class Zapatos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            talla: "",
            cantidad: "",
            marca: "",
            tipo:""
        }
    }

     saveValueFB() {
        return  db.collection("zapatos").add({
            talla: this.state.talla,
            cantidad: this.state.cantidad,
            marca: this.state.marca,
            variedad: this.state.tipo,

        })
    }
    saveValue(e, estado) {
        this.setState({ [estado]: e.target.value })

    }
    send() {
     this.saveValueFB()
    }
    render() {
        return (
            <div className="Zap"> 
             <Paper>
            <Typography variant="h5" component="h5">Registro</Typography>
            <TextField label={"Zapatos/Busos/Camisetas"} fullWidth={true} onChange={(e) => this.saveValue(e, "tipo")} />
            <TextField label={"Talla"} fullWidth={true} onChange={(e) => this.saveValue(e, "talla")} />
            <TextField label={"Cantidad"} fullWidth={true} onChange={(e) => this.saveValue(e, "cantidad")} />
            <TextField label={"Marca"} fullWidth={true} onChange={(e) => this.saveValue(e, "marca")} />

            <Button  onClick={() => this.send()}> <Link to={"/obtenerdatos/"+this.state.tipo+"/"+this.state.talla+"/"+this.state.cantidad+"/"+this.state.marca }  onClick={(e) => this.saveValue(e)}  > ver datos
         </Link ></Button>

        </Paper>

            </div>
            
            )
    }
}

export default Zapatos;