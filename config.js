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


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348026942306";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_41_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDksXG4gICAgICAgIDkwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTU5LFxuICAgICAgICA0LFxuICAgICAgICA1MixcbiAgICAgICAgNTEsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM4LFxuICAgICAgICAxOTksXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDU5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE1LFxuICAgICAgICA3MixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDMzLFxuICAgICAgICA1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgwLFxuICAgICAgICA1LFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDksXG4gICAgICAgIDkzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIsXG4gICAgICAgIDYwLFxuICAgICAgICA3NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEsXG4gICAgICAgIDU3LFxuICAgICAgICA1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTI2LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MyxcbiAgICAgICAgODYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODcsXG4gICAgICAgIDMzLFxuICAgICAgICA2OSxcbiAgICAgICAgMjE4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDgyLFxuICAgICAgICAxNixcbiAgICAgICAgMzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODUsXG4gICAgICAgIDMwLFxuICAgICAgICA3MCxcbiAgICAgICAgNjksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIsXG4gICAgICAgIDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMixcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMyxcbiAgICAgICAgODMsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0LFxuICAgICAgICA0MixcbiAgICAgICAgMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjAyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTYzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNixcbiAgICAgICAgMjMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA0LFxuICAgICAgICA0NyxcbiAgICAgICAgODEsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICA3NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTUwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTk4LFxuICAgICAgICA2NixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDYxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODcsXG4gICAgICAgIDQwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDk1LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwia1pXa1ZKRkg3M21DR2Z5VmhYSWl5Ly9kMGRuUUxBLzBzUzhWcmdNV214ST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidzJLY1BtbzdSTXVZSjJISk1RZmExZ1wiLFxuICBcInBob25lSWRcIjogXCIyZTk4NDIxNS03NzI1LTRkYmMtOWU2Ny1lYWZiMzkxOTEwYjFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI4LFxuICAgICAgOTIsXG4gICAgICAxMDcsXG4gICAgICAxODUsXG4gICAgICAxNzcsXG4gICAgICAyOSxcbiAgICAgIDE1MCxcbiAgICAgIDEyOCxcbiAgICAgIDEzMyxcbiAgICAgIDE5OSxcbiAgICAgIDE2NCxcbiAgICAgIDEzNCxcbiAgICAgIDkwLFxuICAgICAgMTUwLFxuICAgICAgMTEwLFxuICAgICAgMTAxLFxuICAgICAgMTYsXG4gICAgICA2MyxcbiAgICAgIDE5NixcbiAgICAgIDIyN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzEsXG4gICAgICAxODYsXG4gICAgICAxMzAsXG4gICAgICAyMTAsXG4gICAgICAyMTcsXG4gICAgICAzMCxcbiAgICAgIDQyLFxuICAgICAgMTUsXG4gICAgICA3NyxcbiAgICAgIDE3MyxcbiAgICAgIDgxLFxuICAgICAgNDQsXG4gICAgICAyMjUsXG4gICAgICAxODgsXG4gICAgICAxNyxcbiAgICAgIDQwLFxuICAgICAgMSxcbiAgICAgIDEzNixcbiAgICAgIDY0LFxuICAgICAgMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOVZNQUJLSlJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwMjY5NDIzMDY6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTUzNzY4ODIxODEzMzcxOjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTTYyZzVjREVNVFVpclVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJRNjlzMXZHV0xObUxVZno2Ti9CTWhtMmM0Z21MRW5Cb2k1Z2J5d29hMkUwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkptWk9UaGEwKzNXL1g2STVaM0l3OHRzY2R3a1I1emIxbFh4LzdMajMyeG9xY1pyVW5JQmx5SmtGVUtscXB3YlV6cWlmWDNtT0JRR2NHMngzVFVRQ0NRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImR5bXRQR2lWRTBlRi9saC90cGZmY0RxZmR4NjJwME1QZkVaVmpqYzZ6UXJYU09wVVNFSk8xenF4Sk9qZG51cEVsVFcycmJ0ekxmYU9vSmRwcHJjNEFnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwMjY5NDIzMDY6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTkzNjQ1NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJrUVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQmtRLmpzb24iOiAie1wia2V5RGF0YVwiOlwiV0UvUDNhS0U5QkxzSzNDNkZyaGVHSFhlS0dnSmVOdEt3ckdSQ256Z3gwND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NTM1OTcwMDYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTkzNjQ2MjAyNVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Me😅😎👁️😜",


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
