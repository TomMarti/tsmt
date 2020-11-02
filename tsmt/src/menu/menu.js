import file from "@/utils/file";
import store from '../store/index'

export default [
    {
        label: 'File',
        submenu: [
            {
                label: 'Save',
                accelerator: 'CmdOrCtrl+s',
                click() {
                    file.saveas(store.state.editorPayload)
                }
            },
            {
                label: 'Save as',
                accelerator: 'Shift+CmdOrCtrl+s',
                click() {
                    file.saveas(store.state.editorPayload)
                }
            },
            {
                label: 'Import',
                click() {
                    file.fileImport(data => {
                        console.log(data)
                    })
                }
            }
        ]
    }
]