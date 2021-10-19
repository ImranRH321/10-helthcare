import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialization from '../firebase/firebase.init'

firebaseInitialization()


const useFirebase = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState({});
  const [error, setError] = useState("");




  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        // console.log(result.user);
        setError("");
      })
      .catch((error) => setError(error.message));
  };



  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        const uid = user.uid;
      } 
    });
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUserRegister = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  const handleUserLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  return {
    handleGoogleLogin,
    user,
    handleLogout,
    handleUserRegister,
    handleUserLogin,
  };
};

export default useFirebase;
