import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut  } from "firebase/auth";
import {useState,useEffect} from 'react';
import initializeAuthentication from "../firebase/Firebase.init";

initializeAuthentication();
const useFirebase = () =>{
    const [user,setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle =() =>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            // console.log(result.user);
        })
    }
    const logOut = () =>{
        signOut(auth)
        .then(() =>{
            setUser({});
        })
    }
    useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                    setUser(user);
            } 
            else{
                setUser({});
            }
          });
    },[]) 
    return{
        user,
        signInUsingGoogle,
        logOut

    }
}
export default useFirebase;