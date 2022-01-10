hexo.extend.filter.register('after_post_render', function(data) {
  var cfg = hexo.config.schnack;
  if (cfg) {
    data.content += buildJS(cfg);
  };
});

function buildJS(cfg) {
  return '' +
    '<script src="' +
    cfg.host + '/client.js"></script>' +
    '<script>' + 'new Schnack({ ' +
    'target: \'' + (cfg.target || '.schnack') + '\', ' +
    'slug: \'' + (cfg.slug || 'post-slug') + '\', ' +
    'host: \'' + (cfg.host || 'http://localhost:3000') + '\', ' +
    'partials: { ' +
    'Preview: `' + (cfg.preview || 'Preview') + '`, ' +
    'Edit: `' + (cfg.edit || 'Edit') + '`, ' +
    'SendComment: `' + (cfg.sendComment || 'Send comment') + '`, ' +
    'Cancel: `' + (cfg.cancel || 'Cancel') + '`, ' +
    'Or: `' + (cfg.or || '') + '`, ' +
    'Mute: `' + (cfg.mute || 'mute notifications') + '`, ' +
    'UnMute: `' + (cfg.unmute || 'unmute') + '`, ' +
    'PostComment: `' + (cfg.postComment || 'Post a comment. Markdown is supported!') + '`, ' +
    'AdminApproval: `' + (cfg.adminApproval || 'This comment is still waiting for your approval') + '`, ' +
    'WaitingForApproval: `' + (cfg.waitingForApproval || 'Your comment is still waiting for approval by the site owner') + '`, ' +
    'SignInVia: `' + (cfg.signInVia || 'To post a comment you need to sign in with one of these providers:') + '`, ' +
    'Reply: `' + (cfg.reply || '<i class=\'icon schnack-icon-reply\'></i> reply') + '`, ' +
    'LoginStatus: "' + (cfg.loginStatus || '(signed in as <span class=\'schnack-user\'>@%USER%</span> :: <a class=\'schnack-signout\' href=\'#\'>sign out</a>)') + '" ' +
    '}});</script>';
};
