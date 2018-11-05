const fs = require("fs");

 function done(output) {
     process.stdout.write(output);
     process.stdout.write('\nprompt > ');
 }

 function evaluateCmd(userInput) {
  // console.log(userInput)
   const userInputArray = userInput.split(" ");
 // console.log(userInputArray);
   const command = userInputArray[0];
 // console.log(command)
   switch (command) {
    case "echo":  
      commandLibrary.echo(userInputArray.slice(1).join(" "));
      break;

    case "cat":
      commandLibrary.cat(userInputArray.slice(1));
        break;
    
    case "head":
      commandLibrary.head(userInputArray.slice(1));
        break;

    case "tail":
      commandLibrary.tail(userInputArray.slice(1));
        break;
        
    default:
      commandLibrary.errorHandler();
      break;
  }
    
}

const commandLibrary = {
     "echo": function(userInput) {
         done(userInput);
     },

     "cat": function(fullPath){
        const fileName = fullPath[0];
        fs.readFile(fileName, (err, data) => {
            if(err) throw err;
            done(data)
        })
     },

     "head": function(options){
       const linesToShow = options[0].substring(1);

        const fileName = options[1];
        fs.readFile(fileName, "utf8", (err, data) => {
            if(err) throw err;
            const dataLines = data.split('\n');
            const headData =  dataLines.slice(0,linesToShow).join('\n');
            done(headData)
        })
     },

     "tail": function(options){
      const linesToShow = options[0].substring(1);
      const fileName = options[1];
      fs.readFile(fileName, "utf8", (err, data) => {
          if(err) throw err;
          const dataLines = data.split('\n');
          const tailData =  dataLines.slice(dataLines.length-linesToShow,dataLines.length).join('\n');
          done(tailData)
      })
     },

     "errorHandler" : function(){
       done("Command not found ")
     }
   };

 module.exports.commandLibrary = commandLibrary;
 module.exports.evaluateCmd = evaluateCmd;