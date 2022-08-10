const fs = require('fs').promises
const path = require('path')

const link = './Files/hw'

fs.readdir(link).then(directories => {
    for (const directory of directories) {

        const directoryIf = fs.stat(path.join(link, directory)).then(dir => {
            dir.isDirectory()
        })

        if (directoryIf) {
            fs.readdir(path.join(link, directory)).then(dirs => {
                for (const dir of dirs) {
                    console.log(dir)

                    // const dirIf = fs.stat(path.join(link, directory, dir)).then(filesCheck => {
                    //     filesCheck.isDirectory()
                    // })
                    //
                    // if (dirIf) {
                    //     fs.readdir(path.join(link, directory, dir)).then( async files => {
                    //         for (const file of files) {
                    //             await fs.rename(`${path.join(link, directory, dir, file)}`,
                    //                 `${path.join(link, file)}`)
                    //         }
                    //     }).catch(() => {})
                    // }
                }
            }).catch(() => {})
        } else {
            return (console.log('none'))
        }
    }
}).catch(() => {})