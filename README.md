# 👋🤖 - Greeter bot for Pusher Chatkit

A sample bot implementation for [Pusher Chatkit](https://pusher.com/chatkit). The greeter bot will send a message to every user joining a specified chatroom.

Uses the [Architect serverless framework](https://arc.codes) running on AWS Lambda, and Chatkit's webhooks.

## Implementation details

A chatbot is a chat user that works automatically, without human interaction. It can react to human users sending messages, or on external activities.

In this bot's case, it's a service that monitors a specified chatroom in Chatkit for new users being added to that room, and sending them a welcome message!

The bot is deployed on AWS lambda using the Architect serverless framework. 
To get notified of new users joining, we've set up a webhook in Chatkit that triggers on new users being added to the chatroom. To send welcome messages to the room, it uses the Chatkit server SDK.

## Getting the bot to work...

- Have a working Chatkit setup, some users, and some rooms! [Our Tutorials hub](https://pusher.com/tutorials?q=chatkit) is a great place to start! 
Alternatively, fork the one at this [Chatkit Sample GitHub repo](https://github.com/zmarkan/chatkit-sample-client).

- Follow this guide to set up Architect, and AWS credentials if you require: https://arc.codes/quickstart

- Run `npm install` to install Architect and Chatkit dependencies.

- Write down the ID of the Chatkit room you wish to deploy the bot to.

- Create a Chatkit user that will serve as the bot. Note its user ID as the bot will use that ID to send its messages!
Make sure to add the bot to the Chatkit room you wish to send messages to. 

- Set up the following architect environment variables using Architect's `npx env` command. Read about it here: https://arc.codes/reference/arc-env. Staging environment is fine.

    - CHATKIT_INSTANCE_LOCATOR - get this from your Chatkit dashboard
    - CHATKIT_KEY  - get thhis from your Chatkit dashboard
    - GREETER_BOT_ID  - the ID of the bot user
    - GREETER_ROOM_ID 

- Run `npx create`. This will deploy the service on AWS for you.  

- Note the staging URL that Architect has deployed your service to. You'll use this to de

- In your Chatkit dashboard for your instance, create a new webhook (under the Settings tab in the dashboard), with the URL your lambda, followed by `/joinroom`. Select Users added to room (if you're adding users to room via server).

- Make a user join the room! The sample app linked above makes all newly created users join a "Playground" room, and the bot works there.

- Profit 🎉