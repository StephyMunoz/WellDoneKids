import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import translateMessage from "../utils/translateMessage";
import { message } from "antd";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const auth = useAuthProvider();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

function useAuthProvider() {
  const [user, setUser] = useState(null);

  const handleUser = (user) => {
    if (user) {
      // si tengo sesión activa
      setUser(user);

      return user;
    } else {
      // no tengo sesión activa
      setUser(false);
      return false;
    }
  };

  async function register(data) {
    console.log("data", data);
    try {
      const userData = await auth.createUserWithEmailAndPassword(
        data.email,
        data.password
      );
      console.log("USER", user);
      const { uid } = userData.user;
      let score = 0;
      const { username, email, selectedYear } = data;
      await db
        .ref(`users/${userData.user.uid}`)
        .set({
          username,
          email,
          uid,
          score,
          selectedYear,
        })
        .then((user) => {
          // Signed in
          message.success("Usuario registrado");
          handleUser(user);
        });
      //return true;
    } catch (error) {
      console.log("error", error);
      const errorCode = error.code;
      // message.error(translateMessage(errorCode));
      handleUser(false);
      throw error;
    }
  }

  async function login(email, password) {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        // Signed in
        handleUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        message.error(translateMessage(errorCode));
        handleUser(false);
      });
  }

  async function logout() {
    try {
      await auth.signOut();
      handleUser(false);
    } catch (error) {}
  }

  // const sendPasswordResetEmail = (email) => {
  //   return firebase
  //     .auth()
  //     .sendPasswordResetEmail(email)
  //     .then(() => {
  //       return true;
  //     });
  // };
  //
  // const confirmPasswordReset = (password, code) => {
  //   const resetCode = code || getFromQueryString('oobCode');
  //
  //   return firebase
  //     .auth()
  //     .confirmPasswordReset(resetCode, password)
  //     .then(() => {
  //       return true;
  //     });
  // };

  // }

  useEffect(() => {
    // try {
    const init = () => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          console.log("SESIÓN ACTIVA", user);
          handleUser(user);

          // history.replace(Routes.HOME);
        } else {
          // User is signed out
          console.log("SIN SESIÓN", user);
          handleUser(false);
        }
      });
    };

    async function register(data) {
      console.log("data", data);
      try {
        const userData = await auth.createUserWithEmailAndPassword(
          data.email,
          data.password
        );
        console.log("USER", user);
        const { uid } = userData.user;
        let score = 0;
        const { username, email, selectedYear } = data;
        await db.ref(`users/${userData.user.uid}`).set({
          username,
          email,
          uid,
          score,
          selectedYear,
        });
        //.then((user) => {
        // Signed in
        message.success("Usuario registrado");
        //handleUser(user);
        // })
        //return true;
      } catch (error) {
        console.log("error", error);
        const errorCode = error.code;
        // message.error(translateMessage(errorCode));
        handleUser(false);
        throw error;
      }
    }

    async function login(email, password) {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          // Signed in
          //handleUser(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          message.error(translateMessage(errorCode));
          handleUser(false);
        });
    }

    async function logout() {
      try {
        await auth.signOut();
        handleUser(false);
      } catch (error) {}
    }

    // const sendPasswordResetEmail = (email) => {
    //   return firebase
    //     .auth()
    //     .sendPasswordResetEmail(email)
    //     .then(() => {
    //       return true;
    //     });
    // };
    //
    // const confirmPasswordReset = (password, code) => {
    //   const resetCode = code || getFromQueryString('oobCode');
    //
    //   return firebase
    //     .auth()
    //     .confirmPasswordReset(resetCode, password)
    //     .then(() => {
    //       return true;
    //     });
    // };

    init();
    // } catch (error) {
    //   console.log("NO USER");
    // }
  }, []);

  return {
    user,
    register,
    login,
    logout,

    // sendPasswordResetEmail,
    // confirmPasswordReset
  };
}
