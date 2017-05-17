var exec = require('child_process').exec
var commandLineArgs = require('command-line-args')

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
    },
    {
        name: 'help',
        alias: 'h',
        type: Boolean
    },{
        name: 'dir',
        alias: 'd',
        type: String
    }
]

function gitlog(){
    var option = commandLineArgs(optionDef)

    if (option.help){
        console.log('参数：\n'+
    '--begin, -b 表示开始时间，例子："2017-05-16"、"2017-05-16 11:12"、"2017-05-16T10:00:37.855Z" \n'+
    '--end, -e 表示结束时间\n'+
    '--search, -s 搜索内容\n' +
    '--dir, -d 指定git库路径，默认为当前目录')
        return
    }
    if (option.dir){
        process.chdir(option.dir);
    }
    var commandline = "git log -n 200 "
    if (option.begin){
        commandline += " --after=\'" + option.begin + "\'"
    }
    if (option.end){
        commandline += " --before=\'" + option.end + "\'"
    }
    if (option.search){
        commandline += " --grep=\'"  + option.search + "\'"
    }
    // console.log('\x1b[36m%s\x1b[0m', commandline)
    exec(commandline, function(error,stdout, stderr) {
        
        if(error){
            console.error('error: ' + error)
        }else{
           console.log(stdout)
        }
    })
}

module.exports = gitlog