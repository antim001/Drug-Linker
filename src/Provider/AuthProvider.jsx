import {createContext,useEffect,useState} from 'react';
import {  createUserWithEmailAndPassword,signOut,signInWithEmailAndPassword ,onAuthStateChanged} from "firebase/auth";
import { auth } from './../Firebase/firebase.config';

export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState({})
//user sign up
    const createUser=(email,password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
    }
//user log in
const signIn=(email,password)=>{
  return  signInWithEmailAndPassword(auth, email, password)
}    
//observer
useEffect(()=>{
   const unSubscribe= onAuthStateChanged(auth, (user) => {
        setUser(user)
      })
      return ()=>{
        unSubscribe();
      }
},[])
//log out
const logOut=()=>{
 return  signOut(auth)
}
console.log(user);

    const authInfo={
       createUser,
signIn,user,logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
{children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;