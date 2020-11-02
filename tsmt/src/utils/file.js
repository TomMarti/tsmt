import {dialog} from "electron";
import fs from 'fs'

export default class File {
    static saveas (data) {
        dialog.showSaveDialog().then(file => {
            if (!file.canceled) {
                try {
                    fs.writeFileSync(file.filePath + ".tsmt", data);
                } catch(e) {
                    alert('Failed to save the file !');
                }
            }
        })
    }

    static fileImport (callback) {
        dialog.showOpenDialog().then(file => {
            if (!file.canceled) {
                try {
                    let data = fs.readFileSync(file.filePaths[0], 'utf8')
                    callback(data)
                } catch (e) {
                    console.log('Unable to load file')
                }
            }
        }).catch(error => {
            console.log(error)
        })
    }
}