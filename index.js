hexo.extend.filter.register('after_post_render', function(data) {
  var schnackConfig = hexo.config.schnack;
  if (schnackConfig) {
    data.content += '\n\n\n\n\n\n\n<div class="schnack"></div>\n<script src="' + schnackConfig.url + '/embed.js" data-schnack-slug="post-slug" data-schna\
ck-target=".schnack"></script>';
  }

  return data;
});
