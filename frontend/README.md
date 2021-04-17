# BLThunderstorm/frontend
This repo contains the frontend codebase for BLThunderstorm. If you want to check out the backend, [click here](https://gitlab.com/BLThunderstorm/backend). For more info and documentation for the BLThunderstorm project, [click here](https://gitlab.com/BLThunderstorm/about).
| |
| ---- |
| You can preview the site on production [here](https://blthunderstorm.vercel.app) |

In order to run this thing you need the following environment variables.

| Name                 | Description 
| -------------------- | ----------- |
| `GITHUB_CLIENT_SECRET` | A secret token for your GitHub OAuth app.             |
| `GITHUB_CLIENT_ID`    | The ID of your GitHub OAuth app. |

[Click here](https://docs.github.com/en/developers/apps/creating-an-oauth-app) for more information on how to create an OAuth app on GitHub.

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start
```

Also, the frontend app cannot be used in static mode. But it is possible to use SPA mode instead.

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
