Package.describe({
  name: 'leaonline:accounts-lea',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.8.1');
  api.use('ecmascript');
  api.use('accounts-base', ['client', 'server']);

  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('leaonline:oauth-lea');
  api.imply('leaonline:oauth-lea');

  // If users use accounts-ui but not facebook-config-ui, give them a tip.
  api.use(['accounts-ui', 'facebook-config-ui'], ['client', 'server'], { weak: true });
  api.addFiles("notice.js");

  api.addFiles("accounts-lea.js");
});
