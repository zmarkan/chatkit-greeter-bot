const Chatkit = require("@pusher/chatkit-server")

const chatkit = new Chatkit.default({
  instanceLocator: "INSTANCE_LOCATOR",
  key:
    "CHATKIT_KEY"
})

chatkit
  .createUser({
    id: "greeter_bot",
    name: "🤖",
    avatarURL: "http://i.imgur.com/Hty8As6.jpg",
  })
  .then(() => {
    console.log("User updated successfully")
  })
  .catch(err => {
    console.log(err)
  })

  chatkit.addUsersToRoom({
    roomId: "19952722",
    userIds: ["greeter_bot"]
  }).then( () => console.log("Added bot to room"))
  .catch( error => console.log(error))