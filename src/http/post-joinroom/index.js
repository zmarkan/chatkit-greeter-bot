const chatkit = require('@architect/shared/chatkit')

exports.handler = async function http(req) {

  console.log(req)
  const payload = req.body.payload

  const roomId = payload.room.id
  let userId = payload.users[0].id
  let userName = payload.users[0].name

  let userToGreet = userName || userId

  if(roomId === process.env.GREETER_ROOM_ID){
    
    console.log(`User ${userName || userId } joined room that the Greeter monitors - will greet!`)

    let result = await chatkit
      .sendSimpleMessage({
        userId: process.env.GREETER_BOT_ID,
        roomId: process.env.GREETER_ROOM_ID,
        text: `Welcome to Chatkit, ${userToGreet}! 👋`
      })

    console.log(result)

    return {
      status: 202
    }
  }

  else {
        console.log(
          `User ${userName ||
            userId} didn't join the room that the Greeter monitors - will not greet.`
        )
    return {
      status: 202
    }
  }
}
