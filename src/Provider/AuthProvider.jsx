
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from '../firebase_config';


// create context user
 export const AuthContext = createContext(null)

const singInWithGoogle = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loding, setLoding] = useState(true)

// create user :

  const createUser = (email, password) => {
    setLoding(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // create sing in user :
   const singInUser = (email, password) => {
    setLoding(true)
     return signInWithEmailAndPassword(auth, email, password);
   }


   // crate sing out user :

   const LogOut = () =>{
      setLoding(true)
       return signOut(auth)
   }

 
   const GoogleProvider = () => {
    setUser(true)
    return signInWithPopup( auth, singInWithGoogle)
   }

 
//observer on the Auth object:
useEffect( () =>{
const  unSubscribe = onAuthStateChanged(auth , current => {
     console.log("observer on the Auth objects")
     setUser(current)
     setLoding(false)
     return () => {
      unSubscribe()
     }

})

},[]) 


    const AuthInfo = { 
      user,
      loding,
       createUser, 
       singInUser,
       GoogleProvider,
       LogOut
      }

    return (
        <AuthContext.Provider value={AuthInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
  };