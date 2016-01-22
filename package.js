Package.describe({
  name: 'vazco:autoform-summernote',
  summary: 'Summernote editor for aldeed:autoform',
  version: '0.4.3',
  git: 'https://github.com/MichalW/meteor-autoform-summernote'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'templating',
    'underscore',
    'reactive-var',
    'aldeed:autoform@5.8.1',
    'summernote:standalone@0.7.3'
  ], 'client');

  api.addFiles([
    'lib/client/templates.html',
    'lib/client/templates.js',
    'lib/client/autoform-summernote.js'  
  ], 'client');
});
