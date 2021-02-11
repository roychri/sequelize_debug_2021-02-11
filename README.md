
= Instructions

In order to use this repo, please follow these instructions.

=== 1. Create a file called `.env` and put the following information in it

```
DB_NAME=test
DB_USER=postgres
DB_PASS=postgres
NODE_PORT=8787
```

=== 2. Start the application using `docker-compose` in one terminal

```
docker-compose up
```


=== 3. Test the application in another terminal

```
curl localhost:8787/seed
curl localhost:8787/seed
curl localhost:8787/test
```

You should see `Found 2 sites.` as output of the last request if all works as expected.

Feel free to update the code (the app will reload your code change automatically) and test again until you can break it.

Once you finish testing, shutdown the app.

=== 4. Shutdown the app

Hit CTRL-C in the first terminal running `docker-compose up` to stop it.
Then shutdown the app using:

```
docker-compose down
```
