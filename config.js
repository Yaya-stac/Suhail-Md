const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "221784278949 " // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "221784278949";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_04_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAxLFxuICAgICAgICA4NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDYsXG4gICAgICAgIDMsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDksXG4gICAgICAgIDUwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDUzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjksXG4gICAgICAgIDIwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE0LFxuICAgICAgICA0NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDQ4LFxuICAgICAgICA3MixcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDM5LFxuICAgICAgICA4NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzcsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIzLFxuICAgICAgICA2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTQsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzksXG4gICAgICAgIDgwLFxuICAgICAgICAzNSxcbiAgICAgICAgMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDMzLFxuICAgICAgICAxODUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAxLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDY1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTMyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDcwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDU5LFxuICAgICAgICA4MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ2LFxuICAgICAgICA1LFxuICAgICAgICA0MixcbiAgICAgICAgNzgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTcsXG4gICAgICAgIDY0LFxuICAgICAgICA5MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDksXG4gICAgICAgIDcwLFxuICAgICAgICA2MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTksXG4gICAgICAgIDM4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM0LFxuICAgICAgICA0NCxcbiAgICAgICAgMixcbiAgICAgICAgOTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjIzLFxuICAgICAgICA2OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDczLFxuICAgICAgICAyNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAzNixcbiAgICAgICAgMzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM4LFxuICAgICAgICA4MixcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwielY4V29qNGpMN2szWUFtWGVYeVVNaEo5SzVTODBYb2xBdURaQ2FkbWtxQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMjE3ODQyNzg5NDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQ1MUUwMkNDMTYzQjVEMDk5RjFDMjE0NUFCQTExNzlGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjA2Mzg0NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJXcy1IYTdUc1N3S1pMM1IyN2VmeEZ3XCIsXG4gIFwicGhvbmVJZFwiOiBcImMzZWM4NTNmLTAxNDctNDQ4MS1iMTgwLWY5NzAwMjk3MDE4ZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MSxcbiAgICAgIDc1LFxuICAgICAgNTEsXG4gICAgICAxOTEsXG4gICAgICA3LFxuICAgICAgNjMsXG4gICAgICAxOTQsXG4gICAgICAyMSxcbiAgICAgIDE4LFxuICAgICAgMTUxLFxuICAgICAgNjksXG4gICAgICA4MixcbiAgICAgIDYxLFxuICAgICAgNjksXG4gICAgICAyLFxuICAgICAgMTM4LFxuICAgICAgMzYsXG4gICAgICAyMixcbiAgICAgIDIxMixcbiAgICAgIDExMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MCxcbiAgICAgIDEyOCxcbiAgICAgIDI1NCxcbiAgICAgIDI1NSxcbiAgICAgIDIzNSxcbiAgICAgIDE1MSxcbiAgICAgIDcxLFxuICAgICAgMTc4LFxuICAgICAgMTUyLFxuICAgICAgMjExLFxuICAgICAgMTgxLFxuICAgICAgMjUsXG4gICAgICA4OCxcbiAgICAgIDE5NCxcbiAgICAgIDU0LFxuICAgICAgODIsXG4gICAgICA2MyxcbiAgICAgIDE3MCxcbiAgICAgIDI0NyxcbiAgICAgIDU4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZMUzFIU0U4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjE3ODQyNzg5NDk6NTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLhtLnhtL/hrYTwlqSN8J2QjvCdkKvwnZCo8J2Qm/CdkKjwnZCr8J2QqPCdkKzwnZCO8J2Qn/CdkIPwnZCa8J2Qq/CdkKRzXCIsXG4gICAgXCJsaWRcIjogXCIyMzA5NDA4Mjc3NzUxMDY6NTdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3FXdWNVQ0VOcTNrclVHR0JzZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIrR0JadXhUSWVHSHgxUHZkMkdsV1BhTjIzaVNlYnRwblVWYXZzcUNHSFVJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlJCVktqazg1cDhRdUZPeUJ6b1FqQlJEL0NYRkZsWCs2R2U3SDk0VDZqcnJXenhGVTJVN095M01jM2dKVWd3Z1RnNmpJaVdaZUY4akJXKyt0NmNUM0RnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIndhL2FoRFRWRENSSDJGaEZIYjN2UUVaM0pmZjQyZ2hYcm5BZFhkbFJlOXJaK1hlNkZQUWIyN0hPVTlRMm5jRnBlbUhoeTdmcC9mbW1sUzY2TFd1ZWpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyMTc4NDI3ODk0OTo1N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIwNjM4MzgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNd0RcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU13RC5qc29uIjogIntcImtleURhdGFcIjpcIi8zbjY0bkUvYlkvdTc5TmwrUTgzdHhYL2JRL0hVZWZmcnY1RU13Q092Y2s9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjgyNTExMTQ2LFwiY3VycmVudEluZGV4XCI6MjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsMjVdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjAzODE5OTE2NFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Devil's",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
