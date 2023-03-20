# S2T-task

This project takes a phone number as input and feeds the number to a lookup service provided by Twilio named "Twilio Lookup" to fetch information about the phone number from the web. After that, the same input is feeded to an android virtual machine to fetch a Whataspp profile by searching in Whatsapp with the phone number. 

## Getting Started

* Clone the repository in your local system. 

### Prerequisites

* Nodejs installed version > 14.0
* Appium GUI installed
* A virtual machine created on Android Studio

### Installing
* open terminal and go to the project directory. 
* run the command "npm install"
* run the command "npm run dev" 

### Creating Docker Image
* open terminal and go to the project directory. 
* run the command "docker build -t s2t_task ."
* run the command "docker run -p 80:80 s2t_task" 

## Environment Variables

| VARIABLE NAME | DEFAULT VALUE | DESCRIPTION |
| --- | --- | --- |
| PORT | 5000 | port for hosting |
| DB_URL | mongodb+srv:<url> | database url |
| TWILIO_AUTHSID | ****** | Twilio authsid to work with Twilio Lookup |
| TWILIO_AUTHTOKEN | ****** | Twilio auth token to work with Twilio Lookup |
  
## Endpoints

* /userInfo[POST] > Fetches information from twilio using Twilio Lookup API
* /search[POST] > Searches for phone number in Whatsapp in a virtual machine
* /userCard[GET] > Fetches user card from the database 

## Sample Payload for the given endpoints
```json
    {
    "contact" : "+14372999897"
    }
```

## Description of Life cycle process

* The project starts from the index.js file in which first it creates and hosts a server as well as establishes a connection with the database. 
* The routes are accessible from index.js which will lead to the file UserRoutes.js where the routes are defined.
* UserRoutes will execute the functions defined in UserController. 
* UserCrontrolle will process on the provided data, store it in the database in will provide a response.
 
## Tools and Methodologies:
 * Agile Development Methodology
 * MVC Structure 
 * Git for Version Control
 * GitHub for Collaboration
 * NodeJS for Back-end Development
 * MongoDB for Database Management
 
## Libraries used:
 * appium: To run operations on android virtual machine
 * body-parser: To parse the body in json format
 * CORS: To manage cross origins sharing
 * dotenv: To configure env file
 * express: To configure and manage the server
 * mongoose: To perform operations on MongoDB
 * socket.io: To perform operations with web socket
 * twilio: To use twilio lookup service
 * wd: To automate the process
 * webdriverio: To automate the process
