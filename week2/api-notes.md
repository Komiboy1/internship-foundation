# API Notes

# What is an API?
An API (Application Programming Interface) allows two applications to communicate with each other. It acts as a messenger between a client and a server.

# What is an Endpoint?
An endpoint is a specific URL that allows access to an API resource.

# HTTP Methods
# GET 
Retrieves data from a server

# POST
Creates new data on a server

# PUT
Updates existing data

# DELETE
Removes data

# Status Codes
# 200 OK
The request was successful

# 404 Not Found
The requested resource could not be found

# 500 Internal Server Error
An error occurred on the server

# API Example 1: Genderize API
# URL
https://api.genderize.io?name=james

# URL Response
{"count":1459299,"name":"james","gender":"male","probability":1.0}

# URL Explanation
name: submitted name
gender: predicted gender
probability: confidence level
count: recoeds analyzed

# API Example 2: Joke API
# URL
https://official-joke-api.appspot.com/random_joke

# URL Response
{"type":"general","setup":"Why did the house go to the doctor?","punchline":"It was having window panes.","id":326}

# URL Explanation
type: joke category
setup: joke question
punchline: joke answer
id: unique identifier