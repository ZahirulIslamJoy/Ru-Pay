import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../config/firebase';

export const AuthContext=createContext();

const AuthProviders = ({children}) => {
    const [user,setUser]=useState(null)

    const auth=getAuth(app)
    const createUserWithEmailPass=(email,pass)=>{
        return createUserWithEmailAndPassword(auth,email,pass)
    }

    const signInWithEP=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

      //get the current logged in user
  useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth, (loggedUser) => {
        if(loggedUser){
            setUser(loggedUser)
        }
      });
      return ()=>{
       unSubscribe();
      }
  },[])

    const authShare={
        createUserWithEmailPass,signInWithEP,user
    }


    return (
        <div>
            <AuthContext.Provider value={authShare} >
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProviders;