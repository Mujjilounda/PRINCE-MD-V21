const fs = require("fs");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = false;                //make true to enable auto recording
global.autoviewstatus = true;                 //make true to view statuses 
global.anticall = false


global.SESSION_ID = process.env.SESSION_ID || "taira_tech-z0cQhYTZ#1U_vMLKN4LDSGn6jWK1d886qh9TXTqvz7L9g2QfXlUU"
global.Owner = ["237682698517"]; //like 2347080968564 
global.OwnerName =  "PRINCE";
global.BotName = "PRINCE-MD-V2";
global.packname = "PRINCE-MD-V2";                             //Do not change.
global.author = "PRINCE-TECH";                               //Do not change.
global.BotSourceCode = "https://github.com/Mayelprince/PRINCE-MD-V2"; //Do not change.
global.SupportGroupLink = "https://whatsapp.com/channel/0029VajcRr0GpLHR6PjdgN3N"; 
global.SupportGroupLink = "https://whatsapp.com/channel/0029VajcRr0GpLHR6PjdgN3N"; //Do not change!
global.menutype = "v3"

global.prefa = ['.'] 

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic7.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");
global.OwnerNumber = [""] //Ignore,Unused

//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: '_Sorry Only group Admin can use the command_  ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command!',
    grouponly: 'This command is only made for *Groups*',
    privateonly: 'This command is only made for *Private Chat*',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: '_Wait a lil bit_...',
    nolink: ' provide me *link*',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}