<h1 align="center">Welcome to hexo-plugin-schnack 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/bedwardly-down/hexo-plugin-schnack#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/bedwardly-down/hexo-plugin-schnack/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/bedwardly-down/hexo-plugin-schnack/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/bedwardly-down/hexo-plugin-schnack" />
  </a>
</p>

> Plugin for adding the Schnack comment system to your Hexo Blog.

### 🏠 [Homepage](https://github.com/bedwardly-down/hexo-plugin-schnack)

### ✨ [Demo](https://thearchival.one)

## How to Install and Use

Add to your hexo blog folder using either one of these (or your prefered methon):

```sh
yarn add hexo-plugin-schnack
npm install hexo-plugin-schnack --save
```

Add these lines to `<blog folder>/theme/<your theme>/layout/_partial/article.ejs` or your theme's equivalent:

```html
<% if (config.schnack.enable){ %>
    <section id="comments" class="vcomment">
       <!-- Optional header that may or may not exist in your theme -->
       <%= __('comment') %>
       <div class="<%- config.schnack.target.replace('.','') %>"></div>
    </section>
<% } %>
```

*Note: some themes will already have most of this in their `article-footer` or `sidebar / widget` sections. Copy the `<div>` section exactly like this or Schnack will not appear on your blog. If you hit the `<F12>` key while in your browser and see an Unhandled Exception null error in the console tab, you most likely have a typo in the div or your Schnack config section (look below).*

Grab Schnack from [here](https://schnack.cool/) and follow the instructions with some slight modifications:

* Create a `schnack.json` file instead of `config.json` (this changed a good while back but wasn't updated in the docs)
* `page_url` needs to be `https://<your blog domain name>/%SLUG%` or your comments may not show up.
* If you're running your site through a reverse proxy and or CloudFlare, you may have to use `http` instead of `https` for your urls. The Github has a possible workaround involving using local SSL certificates, but that's outside the scope of this project and doc
* [PM2](https://pm2.keymetrics.io) is your friend if you need to have Schnack start at boot and run full time on your server

## Configuration

The minimum required in your `_config.yml`:

```
schnack:
  enable: true
  host: <domain name of your Schnack instance>
  target: <this must begin with a `.` and be a string or you may error out>
```

Advanced customizations:

```
schnack:
  slug: <probably won't need to change this>
  partials: <these are all strings and change what language/text is shown for every aspect of the web client>
    preview:
    edit:
    sendComment:
    cancel:
    or: <not sure what this is for>
    mute:
    unmute:
    postComment:
    adminApproval: <if moderation is on, this is what is shown to you when a new comment appears>
    waitingForApproval: <same thing but for your readers>
    signInVia: <readers must be authenticated through any service you set up and will get this warning message>
    reply:
    loginStatus:
```

If you ever want to use the defaults or start over, just remove or comment out anything under partials.

## Author

👤 **Brandon D <bedwardly-down>**

* Github: [@bedwardly-down](https://github.com/bedwardly-down)

## 🤝 Contributing

Contributions, issues, feature requests and feedback are welcome!<br />Feel free to check [issues page](https://github.com/bedwardly-down/hexo-plugin-schnack/issues). You can also take a look at the [contributing guide](https://github.com/bedwardly-down/hexo-plugin-schnack/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!u!

## 📝 License

Copyright © 2022 [Brandon D <bedwardly-down>](https://github.com/bedwardly-down).<br />
This project is [MIT](https://github.com/bedwardly-down/hexo-plugin-schnack/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
