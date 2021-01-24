# E-mail using Node.js

It is a simple server boilerplate for sending emails using NodeJs.I have also integrated it with ejs template as the view engine which consists of a form to enter the mail credentials like sender's mail address, subject and text message of the mail. 
I have used Nodemailer for sending mails which is a module for Node.js to send emails.

### User Stories:-

1. A form consisting of the input fields:- 
      sender's mail address,
      subject and text message of the mail.
2. A server running on port 3000 which enables the mail form validation and sending of mail.

### Steps to run this repository

1. Clone this repo from Github into your favourite Code Editor.
2. In your terminal type the command:- ```npm install``` to install the required dependencies.
3. In the repository folder create a file named as ```.env``` and declare to variables named as ```MAIL``` and ```PASSWORD``` and enter your account credentials, your valid mail-id and password.
   Optionally you can try skipping creating .env file and you can directly enter your credentials in the place of ```process.env.MAIL``` and ```process.env.PASSWORD``` if you want.
4. After entering your credentials, run this command in the terminal ```npm run start```, this will start the developement server.
   You can view the running repo in production mode in 'http://localhost:3000'.
