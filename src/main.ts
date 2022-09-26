import {Uppy} from '@uppy/core'
import {AwsS3} from 'uppy'

export const uppy = new Uppy({
  debug: true
})

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiI3MjFlNTVmOS0xY2VjLTQ3MTUtYjM0Ni02YTk4MzQ1MjBhY2EiLCJpYXQiOjE2NjQxODQ3NjQsImV4cCI6MTY2NDI3MTE2NH0.Q-Z3vg224jollrO_Qkid2XIVQWuye_1St1w10zcRRlc'

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
uppy.on('upload-success', (file: any) => {
  //console.log(file.meta['key']);
  console.log(file);
})

// After all files
// uppy.on('complete', (result: any) => {
//   //console.log(result.successful.map((item: any) => item.meta['key']))
//   console.log(result)
// })
