import isAuthorized from '../../utils/validation/isAuthorized.js'

const trainAuthorization = (req, res, next) => {
  const response = isAuthorized(
    req.uid,
    ['Admin', 'Organization'],
    [1, 0],
    req
  )
  if (Array.isArray(response)) {
    res.json({ response })
  }
  next()
}

export default trainAuthorization
