module.exports = function makeExpressCallback (controller) {
  return (req, res) => {
    const httpRequest = {
      body: req.body,
      query: req.query,
      params: req.params,
      token: req.token,
      ip: req.ip,
      method: req.method,
      path: req.path,
      headers: {
        'Content-Type': req.get('Content-Type'),
        Referer: req.get('referer'),
        'User-Agent': req.get('User-Agent'),
        Authorization: req.get('authorization')
      }
    }

    const bearerHeader = httpRequest.headers.Authorization

    if (!bearerHeader) {
      res.status(403).send({ error: 'forbidden' })
      return
    }

    const bearer = bearerHeader.split(' ')
    const bearerToken = bearer[1]
    httpRequest.token = bearerToken

    controller(httpRequest)
      .then(httpResponse => {
        if (httpResponse.headers) {
          res.set(httpResponse.headers)
        }
        res.type('json')
        res.status(httpResponse.statusCode).send(httpResponse.body)
      })
      .catch(e => res.status(500).send({ error: 'An unkown error occurred.' }))
  }
}
