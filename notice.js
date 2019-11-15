/* eslint-env meteor */
if (Package['accounts-ui'] &&
  !Package['service-configuration'] &&
  !Object.prototype.hasOwnProperty.call(Package, 'leaonline:oauth-lea-config-ui')) {
  console.warn(
    "Note: You're using accounts-ui and leaonline:oauth-lea-config-ui,\n" +
    "but didn't install the configuration UI for the lea\n" +
    'OAuth. You can install it with:\n' +
    '\n' +
    '    meteor add leaonline:oauth-lea-config-ui' +
    '\n'
  )
}
