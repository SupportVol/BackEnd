import auth from '../config/firebase.js'
// import Encryptionn from '../utils/cryptography.js'
export default class Auth {
    constructor(email, password) {
        this.email = email;
        this.password = password;
        this.details = { email: this.email, password: this.password }
    }
    async createUser() {
        try {
            this.details.password = Encryption(this.password)
            const userRecord = await auth.createUser(this.details);
            return (true, userRecord.uid)
        }
        catch (error) {
            return (false, error.message)
        }
    }

    async loginUser() {
        try {
            const userRecord = await auth.getUserByEmail(this.email);
            return (true, userRecord.uid)
        }
        catch (error) {
            return (false, error.message)
        }
    }
}

