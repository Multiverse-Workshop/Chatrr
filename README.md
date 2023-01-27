# Getting Started with Chattr

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It is a project to showcase fundamental usage of socket.io, logging, postgresql, redux toolkit, express, daisyUI, and tailwind. 

## Readme for Chattr API
- [click here for README for Chattr API](https://github.com/Multiverse-Workshop/Chattr/tree/dev/server#readme)

## How to get project started on local machine

  1.    Fork then clone main branch
  2.    change directories into server and ```npm install```
  3.    change directories into client and ```npm install```
  4.    If you are running into any issues with ```npm install```, try deleting the ```package-lock.json``` in client and server then retry ```npm install```

## To run project on local
1. ```npm run dev``` in server directory
2.  ```npm start``` in client directory 

## How to use app
- Currently all users are directed into the same room, to login click on anonymous button, this will log you in as an anon user and you can then send messages.
- Ack of message is sent is logged in front end in console, it can be viewed by using ```console.log(logger)``` in Chat.jsx.
- All other logs like user connected, disconnected, ack for message delivered, and more can be viewed in console in server directory as long as server is running.

## Additional features to add
- Complete settings and profile page and logging out functionality
- Save prior messages in database
- Save logs to database
- Add functionality so users can message a specific person
- For sidebar change ```<a>``` tags to use react-router-dom and add different functionality for links
- functionality for user login or sign up not just anon login

