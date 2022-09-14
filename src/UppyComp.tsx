import Uppy from '@uppy/core'
import {
    AwsS3, Dashboard
} from 'uppy'

const uppy = new Uppy()
    .use(Dashboard, {
        trigger: '#select-files',
    })
    .use(AwsS3, {companionUrl: 'http://localhost:3020'})

uppy.on('upload-success', (file: any, data: any) => {
    const s3Key = file.meta['key']
})