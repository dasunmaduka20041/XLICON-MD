const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "94781586406"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'asia colombo'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '94781586406' 
global.devs = '94781586406';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMExlSVR6T1BXSFlCTzd0c2JRV3hWWGMwUHU3K245b1JPRWY3WUJnQXgyVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM1JnYlBNSkRwWXFkR3U0OUNIa2RtZWk5YTZuUm83ZUFEbFR3S1dDeVRCMD0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVRS9KWExDY05CZ0NVNVBQRmVOY29oZUVQTC85VzhEOURVaVpwemU5VWtJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1eTU5dGs1a0hVNE03V1VJblBmS0ZMTmJaWlVIMUNSaDVJTmQzRjZIb2pJPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJESE42T0s1K1VYMDZPU1BCVDBBNENWU2M1L1hHenVJUEcyd2EzWjM4V009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1nTW5JRVFFNHNReHl1c2NkRFJQOEZueEsyWDljV2RFRSs1OTV5a2dPeWc9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBemJrTFN6emJ1Y1h0VSs0bm0wZHU0NWpFN0JONVhhZmE2dVVkS0JxREVDVHh4VEt5OG9YR3E5L3Joa0RlUTR3ZGNXaTNxbXdFSGtRWndXWWRlNWZoQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjQ1LCJhZHZTZWNyZXRLZXkiOiJOaHRhanozOXllU1pvMjZQODNYVHNFMVB1UzJ2NldNeHdzK09BOVFSRUxNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJFSzhfSDBoTlRzbWtjMjNZcFhNb3d3IiwicGhvbmVJZCI6ImM1NGI3ZmVlLTk5MTYtNDFlNi04NzZiLWM5NjdhNzZkNjdhOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHY1phN1VXbEd5UGJnbjZMVEJocDZjamFodFU9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZqZ0M2U1dSK3RtbnhSeVdVekFWTUo4NGtQdz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pDcjd1RUhFSXJHeXJNR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjQ1WldkQzZLcVcrbzY5ZlRMK2dNdXFxU2UzVnBKalFNbkw2V2Vmc29CU1U9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlNWdVNqcy9CN3BBWVA2VkFOTUlONDJMSkpRbnk0ckdRS1FpaUFqVHp0clpEdzduUE82bUViSTFhV1R2bmlIRG11bmtXMXk3WUV6QUdTQWhyVk1EVkNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ5a1VRQ2ZPUXQvanRwaDlzUHlCS29xVWxzSUhmSFJzcE81Ykd1czBvbmFxNUkzb1oyWUZvMVg3dTNzaDhPZXpPdjNDeDJJcWZGZVVXWEt3RG9sRWtodz09In0sIm1lIjp7ImlkIjoiOTQ3ODE1ODY0MDY6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJEYXN1biBCb3QifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3ODE1ODY0MDY6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlT1dWblF1aXFsdnFPdlgweS9vRExxcWtudDFhU1kwREp5K2xubjdLQVVsIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE4Nzg4ODc3fQ==",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '@DARK DASUN',
  packname:  process.env.PACK_NAME || 'DDASUN',
   
  botname:   process.env.BOT_NAME === undefined ? "DARK DASUN" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'DARKDASUN' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? true : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'HI IM ALIVE NOW' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
