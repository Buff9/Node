const fs = require('fs').promises
const path = require('path')


const reader = async (folderPath) => {
    const files = await fs.readdir(folderPath);

    for (const file of files) {
        const pathToFile = path.join(folderPath, file);
        const stat = await fs.stat(pathToFile);

        if (stat.isFile()) {
            await fs.rename(pathToFile, path.join(__dirname, file));
        }

        if (stat.isDirectory()) {
            await reader(pathToFile);
        }
    }
}

reader(__dirname);

console.log(__dirname)
// const reader = () => {
//     fs.readdir(__dirname).then (async directories => {
//         for (const directory of directories) {
//
//
//
//             const directoryIf = fs.stat(path.join(__dirname, directory)).then(directory => {
//                 directory.isDirectory()
//             })
//
//
//
//             if (directoryIf) {
//                 fs.readdir(path.join(__dirname, directory)).then(async dirs => {
//                     for (const dir of dirs) {
//                         await fs.rename(`${path.join(__dirname, directory, dir)}`,
//                             `${path.join(__dirname, dir)}`)
//
//                         const dirIf = fs.stat(path.join(__dirname, directory, dir)).then(filesCheck => {
//                             filesCheck.isDirectory()
//                         })
//
//                         if (dirIf) {
//                             fs.readdir(path.join(__dirname, directory, dir)).then(async files => {
//                                 for (const file of files) {
//
//                                     await fs.rename(`${path.join(__dirname, directory, dir, file)}`,
//                                         `${path.join(__dirname, file)}`)
//
//                                     await fs.rename(`${path.join(__dirname, directory, dir)}`,
//                                         `${path.join(__dirname, dir)}`)
//
//                                     const dirFile = fs.stat(path.join(__dirname, directory)).then(filesCheck => {
//                                         filesCheck.isDirectory()
//                                     })
//
//
//                                     if (dirFile) {
//                                         await fs.unlink(path.join(__dirname, directory))
//                                     } else {
//                                         console.log('done')
//                                     }
//
//                                 }
//                             }).catch(() => {
//                             })
//                         } else {
//                             console.log('done')
//                         }
//                     }
//                 }).catch(() => {
//                 })
//             } else {
//                 return (console.log('done'))
//             }
//         }
//     }).catch(() => {
//     })
//
// }
//
// reader()
//
//
//
