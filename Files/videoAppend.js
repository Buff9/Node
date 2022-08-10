const fs = require('fs').promises


fs.appendFile('./Files/video.avi', '12421hf4512griu12g4iu\n').then(()=>{
    console.log('text added')
})

