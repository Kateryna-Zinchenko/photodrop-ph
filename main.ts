import {Uppy} from '@uppy/core'
import {Dashboard, AwsS3} from 'uppy'

const uppy = new Uppy({
  debug: true,
})

uppy.use(Dashboard, {
  inline: true,
  target: '#drag-drop-area',
})

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiI3MjFlNTVmOS0xY2VjLTQ3MTUtYjM0Ni02YTk4MzQ1MjBhY2EiLCJpYXQiOjE2NjMxNzIyNTksImV4cCI6MTY2MzI1ODY1OX0.p6nNVIbEpfsBqxjgejFlH-bDPA56jA7tJC3v8ahi20E'

uppy.use(AwsS3, {
  getUploadParameters (file: any) {
    return fetch('https://rn2yqv86r0.execute-api.eu-central-1.amazonaws.com/dev/phgraphs/photos/s3url', {
      method: 'post',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
      body: JSON.stringify({
        albumId: '1ea6ab9e-f89e-406d-b51e-489881f8521e',
        contentType: file.type,
      }),
    }).then((response) => {
      return response.json()
    }).then((result) => {
      file.meta['key'] = result.key;
      return result.data;
    }).then((data) => {
      return {
        method: data.method,
        url: data.url,
        fields: data.fields,
        headers: data.headers,
      }
    })
  },
})

// After single file
uppy.on('upload-success', (file: any, data: any) => {
  console.log(file.meta['key']);
})

// After all files
uppy.on('complete', (result: any) => {
  console.log(result.successful.map((item: any) => item.meta['key']))
})
