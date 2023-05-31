import { useState } from 'react'
import { FilePond, registerPlugin, FilePondProps } from 'react-filepond'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

export default (
    {
        onChange
    }: {
        onChange: (files: FilePondProps[]) => void;
    }) => {
    const [files, setFiles] = useState([])
    return (
        <div className="App">
            <FilePond
                files={files}
                onupdatefiles={onChange}
                allowMultiple={true}
                allowReorder={true}
                maxFiles={5}
                // server="/api"
                name="files" /* sets the file input name, it's filepond by default */
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
            />
        </div>
    )
}