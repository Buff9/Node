// const fs = require('fs').promises


// fs.mkdir('./Files').catch((e) => {
//     console.log(e)
// })

// fs.appendFile('./Files/file.txt', 'hello world\n' ).then(()=>{
//     console.log('done')
// }).catch((e) => {
//     console.log(e)
// })

// fs.readFile('./Files/file.txt').then(data => {
//     console.log(data)
// })

// fs.readdir('./Files').then(files => {
//     for (const file of files) {
//         fs.stat(`./Files/${file}`).then(statInfo => {
//             console.log(statInfo)
//         })
//     }
// })

// fs.unlink('./file.txt').then(value => {
//     console.log(value)
// })

// fs.stat('./Files/file.txt').then(info => {
//     console.log(info)
//     console.log(info.isDirectory())
//     console.log(info.isFile())
// })