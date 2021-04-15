# BLThunderstorm/backend
This repo contains the backend codebase for BLThunderstorm. If you want to check out the frontend, [click here](https://gitlab.com/BLThunderstorm/frontend). For more info and documentation for the BLThunderstorm project, [click here](https://gitlab.com/BLThunderstorm/about).

In order to be able to run the backend, you need to get the MongoDB connection URI and put it into the `MONGO_URI` environment variable.

Also, pass the `MONGO_DB_NAME` environment variable with the name of your designated database name. It's optional tho, will use `main` as the default.