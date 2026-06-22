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
count: records analyzed

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

# Postman Practice
# What is a Postman?
It is a tool that lets you send API requests and see the responses.

# Requests I sent
1. https://api.genderize.io?name=james
- Status code: 200

# What came back
- {"count":1459299,"name":"james","gender":"male","probability":1.0}

# What it means
- name: submitted name, gender: predicted gender, probability: confidence level, count: records analyzed

2. https://official-joke-api.appspot.com/random_joke
- Status code: 200

# What came back
- {"type":"general","setup":"Why did the house go to the doctor?","punchline":"It was having window panes.","id":326}

# What it means
- type: joke category, setup: joke question, punchline: joke answer, id: unique identifier

3. https://jsonplaceholder.typicode.com/posts/1
- Status code: 200

# What came back
- {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}

# What it means
userId : the ID of the user who write this post
id: the unique id of this post
title: the title of the blog post
body: the main content/text of the blog post

4. https://jsonplaceholder.typicode.com/users/1
- Status code: 200

# What came back
{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}

# What it means
id: the unique id of the user
name: the user's full name
username: the user's display/login name
email: the user's email address
phone: the user's phone number
website: the user's personal website

# The 404 Test
4. https://jsonplaceholder.typicode.com/posts/9999
# What it means
The post with ID 9999 does not exist

# Screenshots
![https://api.genderize.io?name=james](<Screenshot 2026-06-22 115118-2.png>)
![https://official-joke-api.appspot.com/random_joke](<Screenshot 2026-06-22 115256.png>)
![https://jsonplaceholder.typicode.com/posts/9999](<Screenshot 2026-06-22 115756.png>)
