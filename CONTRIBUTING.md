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
The frontend itself is deployed to Vercel, it ahould work out of the box there.
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
