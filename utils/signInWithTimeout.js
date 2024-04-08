// async function signInWithTimeout(email, password) {
//   const signInPromise = firebase
//     .auth()
//     .signInWithEmailAndPassword(email, password);
//   const timeoutPromise = new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error("Sign-in operation timed out")), 50000);
//   });

//   try {
//     // Wait for either the signInPromise to resolve or the timeoutPromise to reject
//     await Promise.race([signInPromise, timeoutPromise]);
//     return signInPromise;
//   } catch (error) {
//     return false, error.message; // or handle it as you need
//   }
// }

// export default signInWithTimeout;
