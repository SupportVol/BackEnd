import { Authentication } from '../../firebaseCP/authentication.js'
import Firestore from '../../firebaseCP/firestore.js'
import FirestoreAbstract from '../../utils/firestore/FirestoreAbstract.js'
import updateData from '../../utils/firestore/updateData.js'

export default class MembershipRequestModel extends FirestoreAbstract {
  constructor (
    registrationCertificateUrl,
    annualReportUrl,
    legalDocumentsUrl,
    name,
    email,
    password,
    description,
    requestID = false
  ) {
    super()
    this.createStructure = {
      name,
      description,
      email,
      password,
      registrationCertificateUrl,
      annualReportUrl,
      legalDocumentsUrl,
      creationDate: Date.now()
    }
    const currentRecord = this.read()
    this.updateStructure = updateData(
      [
        'name',
        'description',
        'email',
        'password',
        'registrationCertificateUrl',
        'annualReportUrl',
        'legalDocumentsUrl',
        'creationDate',
        'accepted'
      ],
      [
        name,
        description,
        email,
        password,
        registrationCertificateUrl,
        annualReportUrl,
        legalDocumentsUrl,
        Date.now(),
        false
      ],
      currentRecord
    )
    this.requestID = requestID
    this.fs = new Firestore('organizationsRequests', this.requestID)
  }

  approve () {
    const record = this.fs.read()
    this.fs.delete()
    this.fs = new Firestore('organizations', this.requestID)
    const orgID = this.fs.create(record)[1]
    this.auth = new Authentication()
    this.auth.createUser({ email: record.email, password: record.password })
    this.authFS = new Firestore('users', orgID)
    this.authFS.create({
      orgID,
      role: 'Organization',
      level: 0
    })
    return orgID
  }

  decline () {
    this.fs.delete()
    return true
  }
}
