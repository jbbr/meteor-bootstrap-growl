Package.describe({
  git: 'https://github.com/zimme/meteor-bootstrap-growl.git',
  name: 'zimme:bootstrap-growl',
  summary: 'Turns standard Bootstrap alerts into "Growl-like" notifications.',
  version: '2.0.1',
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.3');

  api.use('jquery', 'client');

  api.addFiles('bootstrap-growl/bootstrap-growl.js', 'client');
});
