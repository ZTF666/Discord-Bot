const Discord = require('discord.js')
const client = new Discord.Client()




client.on('ready',() => {
    console.log("connected as " +client.user.tag)

   // client.user.setActivity("Php")//shoiws playing with php
    client.user.setActivity("your dreams die!",{type:"Watching"})//type taybdl lmsg li tayban avant shno tandir!WATCHING,LISTENING,STREALING,PLAYING
    client.guilds.forEach((guild) => {
        console.log(guild.name)//shows all server the bot is connected to
        guild.channels.forEach((channel) => {
            console.log(` - ${channel.name} ${channel.type} ${channel.id}`)//hna you can get your general chat channel's ID
        })
       

    })
    let generalChannel = client.channels.get("YOUR GENERAL CHAT CHANNEL ID HERE")
    const attachement = new Discord.Attachment("https://nabilelatif.firebaseapp.com/assets/images/works/LMAO.jpg")
   
    generalChannel.send("Lok'tar Ogar"+attachement)
})
//this will make the bot react and tag the sender and display his message
client.on('message', (recievedMessage) => {
if(recievedMessage.author == client.user){return}
/*recievedMessage.channel.send("Message recieved: "+ recievedMessage.author.toString() +": " + recievedMessage.content)
*///resend the msg and tag the sender


/*recievedMessage.guild.emojis.forEach(customEmoji => {
    console.log(`${customEmoji.name} ${customEmoji.id}`)
    recievedMessage.react(customEmoji)})*///affiche ga3 les emoji li zdt
   /* let customEmoji = recievedMessage.guild.emojis.get("597346115267854346")//this is your emoji's id , emoji perso uploaded !
    recievedMessage.react(customEmoji)*/ // reacts to the msg sent before

if(recievedMessage.content.startsWith("!")){
    DecodeCommand(recievedMessage)
}

})

function DecodeCommand(recievedMessage){
let fullcommmand = recievedMessage.content.substr(1)
let splitcommand = fullcommmand.split(" ")
let primarycommand= splitcommand[0]
let arguments = splitcommand.slice(1)

if(primarycommand == "help"){
    helpCommand(arguments, recievedMessage)
}else if(primarycommand == "commands"){
    AllCommands(arguments,recievedMessage)
}else if(primarycommand =="makegay"){ MakeGayCommand(arguments,recievedMessage)}//makes someone gay hhh
else if(primarycommand == "insult"){ InsultCommand(arguments,recievedMessage)}//insults someone b rifia or shel7a or darija 
else if (primarycommand == "chkoun"){ ChkounCommand(arguments,recievedMessage)}//return **** hhnnghghgh

else {
    recievedMessage.channel.send('You need to enter a valid command!')
}
}

//les fonctions dyal les commands hna !!
function helpCommand(arguments, recievedMessage){
    if(arguments.length == 0){
        recievedMessage.channel.send("try !commands")
    }
    else{
        recievedMessage.channel.send("try !commands")
    }
}

function AllCommands(arguments, recievedMessage){
    if(arguments.length == 0){
        recievedMessage.channel.send("!makegay : taunt someone !"+"\n"+"!insult : insults someone !"+"\n"+"!help : there's no help kek !" +"\n"+"!chkoun : jrrb 7dk !")
       
    }
    else{
        recievedMessage.channel.send("!makegay : taunt someone !"+"\n"+"!insult : insults someone !"+"\n"+"!help : there's no help kek !" +"\n"+"!chkoun : jrrb 7dk !")
    }
}
//taunt 
function MakeGayCommand(arguments,recievedMessage){
    if(arguments.length < 1){recievedMessage.channel.send("please add a username.. i.e : !makegay Tom")}
    else{
        let gay=recievedMessage.mentions.members.first()
        recievedMessage.channel.send(gay + " you're now the gayest person on discord !")
//let customEmoji = recievedMessage.guild.emojis.get("597346115267854346")//activate this gha fash ykoun 3ndk custom emoji o 3arf id dyalo !
        //recievedMessage.react(customEmoji)
   
}}
//insults
function InsultCommand(arguments,recievedMessage){
    let mentioned=recievedMessage.mentions.members.first()
    recievedMessage.channel.send(mentioned+"! you're a feggit kek !!")
}

function ChkounCommand(arguments,recievedMessage){
    recievedMessage.channel.send("1-0 hhh "+recievedMessage.author.toString())
    //let customEmoji = recievedMessage.guild.emojis.get("597346115267854346")
   // recievedMessage.react(customEmoji)
}
//music QQ




client.login("INSERT YOUR LOGIN TOKEN HNA BASH YKHDM LBOT")