
# API Project: Timestamp Microservice 

[![Run on Repl.it](https://repl.it/badge/github/freeCodeCamp/boilerplate-project-timestamp)](https://boilerplate-project-timestamp-1.bryanw1.repl.co/)

## About:
An API project that returns a JSON with the timestamps for unix and utc. Access the API via the following relative link **/api/timestamp/:date_string**. If the **:date_string** field is left empty, the API will provide the current time.

### Example usage:
- [[project url]/api/timestamp/2015-12-25](https://boilerplate-project-timestamp-1.bryanw1.repl.co/api/timestamp/2015-12-25)
- [[project url]/api/timestamp/1451001600000](https://boilerplate-project-timestamp-1.bryanw1.repl.co/api/timestamp/1451001600000)

### Example output:
```
{"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}
```

### Startup instructions
1. After downloading the package, `npm install` to download all dependencies.
2. `npm start` to start the application and head over to `localhost:3001`.