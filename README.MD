# The Node application

This is a basic E-Commerce listing application

# Routes

**/api/auth/signup**
This is the route used to sigup the users of the ecommerce platform
Request method: POST
Payload
{email: "string", password: "string"}
Response
{"message":"User added successfully"}

**/api/auth/login**
This is the request that is used to make a login to the system
Request Method: POST
Payload
{email: "string", password: "string"}
Response
{"userId":"xxxb2bfb519c832fa0b1axxx","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGRiMmJmYjUxOWM4MzJmYTBiMWE1NTgiLCJpYXQiOjE2MjQ5NzYzODksImV4cCI6MTYyNTA2Mjc4OX0.oaCuXZVF1RhigRfv7sFyuTB3dgGRgRNJrjwIF5-fmPM"}

**/api/stuff**
This prints all the available stocks
Request Method: GET

Request Headers
Accept: application/json, text/plain, _/_
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGRiMmJmYjUxOWM4MzJmYTBiMWE1NTgiLCJpYXQiOjE2MjQ5NzYzODksImV4cCI6MTYyNTA2Mjc4OX0.oaCuXZVF1RhigRfv7sFyuTB3dgGRgRNJrjwIF5-fmPM

Response
[{"\_id":"60aea044e78b331798eb76bb","title":"UNLIMITED COLORS","description":"Anwosme thing to buy","imageUrl":"http://localhost:3000/images/UNLIMITED_COLORSfunction now() { [native code] }.png","price":40000,"userId":"60ae7a63737fd03994a8e1e5","\_\_v":0}]

**Docs**
The above is the basic routes in this application
To get better understanding. Studying the routes directory where all the routes are defined and their corresponding
controllers method are registered

The entry point of the application is in the server.js

to get the full understanding of this application it is adviced you go through
all the git branches as each git branch will contain a section of the application
dev. progress

#Master
The master branch contains the original Node Js code that was written in the
first instance, and then commented out to write the express code

#Express Branch
This is the code that contains the express integration to the application
this branch was responsible for all express code and other dependecies
