var exec = require('child_process').exec
var commandLineArgs = require('command-line-args')
var moment = require('moment')

var optionDef = [
    {
        name: 'search', 
        alias: 's', 
        type: String
    },
    {
        name: 'begin', //after
        alias: 'b', 
        type: String, 
    },
    {
        name: 'end', //before
        alias: 'e', 
        type: String,
        defaultOption: moment().format()
    }
]

function gitlog(){
    var option = commandLineArgs(optionDef)
    var commandline = "git log "
    if (option.begin){
        commandline += " --after=\'" + option.begin + "\'"
    }
    if (option.end){
        commandline += " --before=\'" + option.end + "\'"
    }
    if (option.search){
        commandline += " --grep=\'"  + option.search + "\'"
    }
    console.log('\x1b[36m%s\x1b[0m', commandline)
    exec(commandline, function(error,stdout, stderr) {
        
        if(error){
            console.error('error: ' + error)
        }else{
           console.log(stdout)
        }
    })
}

module.exports = gitlog