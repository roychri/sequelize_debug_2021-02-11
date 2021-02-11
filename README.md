
This repo exists to test and explain the problem when using MariaDB and a JSON field when excluding the json field from the list of attributes while using association include.

# Instructions

In order to use this repo, please follow these instructions.

### 1. Create a file called `.env` and put the following information in it

```
DB_NAME=test
DB_USER=root
DB_PASS=root
NODE_PORT=8787
```

### 2. Start the application using `docker-compose` in one terminal

```
docker-compose up
```


### 3. Test the application in another terminal

```
curl localhost:8787/seed
curl localhost:8787/seed
curl localhost:8787/test
```

You should see `Found 2 sites.` as output of the last request if all works as expected.

But MariaDB does not work as expected. It will return `Found 0 sites`.

Try uncommenting the line to add `someJsonValue` to the list of attributes and you will see that it returns 2 sites when runing the site.

Once you finish testing, shutdown the app.

### 4. Shutdown the app

Hit CTRL-C in the first terminal running `docker-compose up` to stop it.
Then shutdown the app using:

```
docker-compose down
```
