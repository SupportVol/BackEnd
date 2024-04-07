import  auth from '../config/firebase.js'
// import Encryptionn from '../utils/cryptography.js'
export default class Auth{
    constructor(email, password) { 
        this.email = email;
        this.password = password;
        this.details = {
            email: this.email,
            password: this.password
        }
    }
    async createUser() {
        // this.details.password = Encryption(this.password)
        const userRecord = await auth().createUser(this.details);
        console.log(userRecord);
    }

    async loginUser() { 
        const userRecord = await auth().signInWithEmailAndPassword(this.email);
        console.log(userRecord);
    }
}

