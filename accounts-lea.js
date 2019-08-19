Accounts.oauth.registerService('lea')

if (Meteor.isClient) {
  const loginWithLea = (options, callback) => {
    // support a callback without options
    if (!callback && typeof options === 'function') {
      callback = options
      options = null
    }

    const credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback)
    Lea.requestCredential(options, credentialRequestCompleteCallback)
  }
  Accounts.registerClientLoginFunction('lea', loginWithLea)
  Meteor.loginWithLea = (...args) => Accounts.applyLoginFunction('lea', args)
} else {
  Accounts.addAutopublishFields({
    // publish all fields including access token, which can legitimately
    // be used from the client (if transmitted over ssl or on localhost).
    forLoggedInUser: [ 'services.lea' ],
    forOtherUsers: [
      'services.lea.id', 'services.lea.username'
    ]
  })
}
