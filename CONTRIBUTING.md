# Contributing to BLThunderstorm

## Commits Convention
I personally follow the Conventional Commits specification that can be read [here](https://www.conventionalcommits.org/en/v1.0.0/). Please use it in all of your commits.

### Examples
**Good**:
```
fix: Updated SoldiersManager.structureData() to fit the new BattlelogMap API. 

Resolves bug #72
```
```
feat: /<game>/servers
```
```
fix: Fix the position of the footer handy links 
```
**Bad**:
```
I don't have an idea of what I'm commiting
```
```
ok
```
```
Resolves bug #72
```
```
A lot of changes
```
## Running BLThunderstorm locally

### Frontend server 

#### Requirements:
- 2GB of RAM (If you are running on a Docker container 1GB should work)
- Some enough amount of vCPU
- Some gigabytes of storage. The app itself isn't that big but the `node_modules` folder maybe is.

#### Vercel deployment
The frontend itself is deployed to Vercel, it should work out of the box there. Click the following button to easily deploy BLThunderstorm in minutes to Vercel.

<div>
  <p align="center">
    <a href="https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world&env=GITHUB_CLIENT_ID,GITHUB_CLIENT_TOKEN&envDescription=In%20order%20to%20run%20the%20frontend%2C%20you%20need%20to%20create%20a%20GitHub%20OAuth%20app%20first.%20&envLink=https%3A%2F%2Fgithub.com%2FNefomemes%2FBLThunderstorm%2Fblob%2Fdevelopment%2FCONTRIBUTING.md%23environment-variables"><img src="https://vercel.com/button" alt="Deploy with Vercel"/></a>
    </p>
 </div>

#### Environment variables
In order to run this thing you need the following environment variables.

| Name                 | Description 
| -------------------- | ----------- |
| `GITHUB_CLIENT_SECRET` | A secret token for your GitHub OAuth app.             |
| `GITHUB_CLIENT_ID`    | The ID of your GitHub OAuth app. |

[Click here](https://docs.github.com/en/developers/apps/creating-an-oauth-app) for more information on how to create an OAuth app on GitHub.

#### Run script

```bash
# Start hot-loading dev server
yarn dev

# Build and start for production-use
yarn build
yarn start
```

#### Static mode
The frontend app cannot be used in static mode. But it is possible to use SPA mode instead.


### Backend
```bash
# Run Babel first
yarn build

# Start server
yarn start
```
