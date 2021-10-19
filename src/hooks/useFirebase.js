import { getAuth, signInWithPopup, GoogleAuthProvider,signOut, onAuthStateChanged, createUserWithEmailAndPassword} from "firebase/auth";
import {useState, useEffect } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";


initializeAuthentication();

const useFirebase =()=>{
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const auth = getAuth();

    

    const signInUsingGoogle = () =>{
        setLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user);
        })
        .finally(()=> setLoading(false));
    }
  
    
    useEffect(() => {
      const unsubscribed =  onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user);
            }
            else{
                setUser({})
            }
            setLoading(false);
        });
        return () => unsubscribed;
    }, []);

   


    const logOut = () => {
        setLoading(true);
        signOut(auth)
        .then(()=> {})
        .finally(()=>setLoading(false));
    }

    return {
        user,
        loading,
        signInUsingGoogle,
        
        logOut
    }
}


export default useFirebase;