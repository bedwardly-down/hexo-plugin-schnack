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

## Installation

1. Enter your blog folder and install the plugin: `yarn add hexo-plugin-schnack`

2. Add `<div class="schnack"></div>` in the location you want your comments to show in `theme/<your theme>/layout/_partials/article.js` (usually will be under `article-footer` if you want comments to show under your posts). I would recommend wrapping it with `<% if (config.schnack.enable){ %>` and `<% } %>` so that you can easily disable in the future if needed.

3. Add the schnack, create-schnack, and jst libraries: `yarn add schnack create-schnack jst`

4. Create a basic `schnack.json` config file using the create-schnack helper library, making sure you say `y` to the first question and answering each question to the best of your ability: `yarn exec create-schnack`

#### Important

When you arrive at the plugins question, there is a bug where all plugins are checkmarked but won't install or configure correctly. Use the arrow keys to select the ones you wanna install and then hit the spacebar to select. You can always manually add more later but at least one OAUTH and notification one are required. All plugins are named `@schnack/plugin-<plugin name>`. See guide in next step for more info.

5. Configure the rest following the [configuration guide\(https://schnack.cool/#configuration).

#### Important

* `page_url` needs to be `<your blog url>/%SLUG%`
* If you're running your site through a reverse proxy such as CloudFlare, you may have to use `http` instead of `https` for your urls. A possible workaround is downloading both your certificate and key files to a directory on the server that's outside of your blog folder and then telling schnack where to find them using the `ssl` configuration option.

6. Test your config: `yarn exec schnack start`. If all goes well, it shouldn't crash or error out.

7. Enable and configure schnack in your `_config.yml` file:

```
schnack:
  enable: true
  host: <full url of your Schnack instance>
```

#### Advanced configuration options:

```
schnack:
  slug: <probably won't need to change this>
  partials: <these are all strings and change what language/text is shown for every aspect of the web client; most should be self-explanatory>
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

### Optional but Recommended Steps

7. Globally install the pm2 process manager and pm2-logrotate so you can monitor, run and keep local logs of schnack quickly and easily: `yarn global add pm2 pm2-logrotate`. Lograte's defaults are pretty sane but if you need to further tweak them, check [here](https://www.npmjs.com/package/pm2-logrotate).

All logs can be found under `~/.pm2/logs` and they are named well enough that you should be able to figure them out if you run into issues.

8. Add `yarn exec schnack start` to your `package.json`:

```
"scripts": {
    ...
    "chat": "yarn exec schnack start"
    ...
}
```

9. Start schnack and monitor it with pm2: `pm2 start --name "<blog name> Schnack" 'yarn chat' && pm2 monit`

10. If everything's working as intended, the logs shouldn't show any errors and the process should show that it's using memory. Hit `Q` to exit.

11. Add pm2 to system startup: `pm2 startup`. It should print out a message telling you to use a command to add pm2 to your init system. Run it and you should be good to go.

## Author

👤 **Brandon D <bedwardly-down>**

* Github: [@bedwardly-down](https://github.com/bedwardly-down)

## 🤝 Contributing

Contributions, issues, feature requests and feedback are welcome!<br />Feel free to check [issues page](https://github.com/bedwardly-down/hexo-plugin-schnack/issues) for plugin related ones or [schnack](https://github.com/schn4ck/schnack) for the rest.

## Show your support

Give a ⭐️ if this project helped you!u!

## 📝 License

Copyright © 2022 [Brandon D <bedwardly-down>](https://github.com/bedwardly-down).<br />
This project is [MIT](https://github.com/bedwardly-down/hexo-plugin-schnack/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
