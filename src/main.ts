import {Uppy} from '@uppy/core'
import {AwsS3} from 'uppy'
import TokensLocalStorage from "./utils/local-storage/TokensLocalStorage";
import store from "./store";

export const uppy = new Uppy({
  debug: true
})

const token = TokensLocalStorage.getInstance().getAccessToken();

uppy.use(AwsS3, {
  getUploadParameters (file: any) {
    return fetch('///', {
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
  console.log(file.meta['key']);
  console.log(file);
})

// After all files
// uppy.on('complete', (result: any) => {
//   //console.log(result.successful.map((item: any) => item.meta['key']))
//   console.log(result)
// })

//https://rn2yqv86r0.execute-api.eu-central-1.amazonaws.com/dev/phgraphs/photos/s3url
