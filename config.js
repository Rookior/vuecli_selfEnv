

const fs=require('fs')
const code = process.env.npm_lifecycle_event.split(':')


if(code[0] === 'serve'){
    fs.readFile('./.env.development','utf8',function(err,datastr){
        if(err){
            console.log("读取配置失败")
            process.exit(1)
        }else{

            console.log('读取成功后的'+datastr);
           
                //开发
                const myconfig = 'VUE_APP_SECRET = ' + code[1] + '\r\n'+  datastr
                fs.writeFile('./.env', myconfig, function (error) {
                    if (error) {
                        console.log("写入配置失败")
                        process.exit(1)
                    } else {
                        console.log("写入配置成功")
                    }
                })
          
           
        }
       
    })
}else{
    const myconfig = 'VUE_APP_SECRET = ' + code[1] + '\r\n' + 'VUE_APP_BASE = 999'
    fs.writeFile('./.env', myconfig, function (error) {
        if (error) {
            console.log("写入配置失败")
            process.exit(1)
        } else {
            console.log("写入配置成功")
        }
    })
}





// console.log(22,process.env.npm_lifecycle_event)
// const fs=require('fs')

// // if(process.env.npm_lifecycle_event === 'serve:a'){
//     console.log(333)
    
//     fs.readFile('./.env.development','utf8',function(err,datastr){
//         if(err){
//             console.log("读取配置失败")
//             process.exit(1)
//         }else{

//             console.log('读取成功后的'+datastr);
//             if(code[0] === 'serve'){
//                 //开发
//                 const myconfig = 'VUE_APP_SECRET = ' + code[1] + '\r\n'+  datastr
//                 fs.writeFile('./.env', myconfig, function (error) {
//                     if (error) {
//                         console.log("写入配置失败")
//                         process.exit(1)
//                     } else {
//                         console.log("写入配置成功")
//                     }
//                 })
//             }else{
//                 const myconfig = 'VUE_APP_SECRET = ' + code[1] + '\r\n' + 'VUE_APP_BASE = 999'
//                 fs.writeFile('./.env', myconfig, function (error) {
//                     if (error) {
//                         console.log("写入配置失败")
//                         process.exit(1)
//                     } else {
//                         console.log("写入配置成功")
//                     }
//                 })
//             }
           
//         }
       
//     })
    
// // }else{
// //     console.log(444)
// // }