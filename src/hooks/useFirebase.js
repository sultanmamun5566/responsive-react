import { getAuth, signInWithPopup, GoogleAuthProvider ,signOut, onAuthStateChanged  } from "firebase/auth";
import { useEffect, useState } from "react";
import initailizeAuthentication from "../Pages/Login/Firebase/firebase.init";

initailizeAuthentication();

const useFirebase = () => {
    const [users, setUsers] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUingGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUsers(result.user);
            })
            .finally(()=>setIsLoading(false));
    }
    useEffect(() => {
      const unsubscribed =  onAuthStateChanged(auth, user => {
            if (user) {
                setUsers(user)
            }
            else {
                setUsers({})
          }
          setIsLoading(false);
      })
        return () => unsubscribed;
    },[])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUsers({});
                
            })
        .finally(()=> setIsLoading(false))
    }

    return{users,signInUingGoogle,logOut,isLoading}
}

export default useFirebase;