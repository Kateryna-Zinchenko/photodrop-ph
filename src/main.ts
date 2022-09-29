import {Uppy} from '@uppy/core'
import {AwsS3} from 'uppy'
import TokensLocalStorage from "./utils/local-storage/TokensLocalStorage";
import store from "./store";
import axios from 'axios';

export const uppy = new Uppy({
  debug: true
})

const token = TokensLocalStorage.getInstance().getAccessToken();
let id = window.localStorage.getItem('Id')

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
        albumId: 'edf0e470-4956-413b-8bd1-53650f8580d4',
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
})

// After all files
uppy.on('complete', async (result: any) => {

  console.log(result.successful.map((item: any) => item.meta['key']));
      const response = await axios({
        method: 'post',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
        },
        url: 'https://rn2yqv86r0.execute-api.eu-central-1.amazonaws.com/dev/phgraphs/photos/',
        data: {
          albumId: id,
          keys: result.successful.map((item: any) => item.meta['key'])
        }
      });
      console.log(response);
    }
)

//https://rn2yqv86r0.execute-api.eu-central-1.amazonaws.com/dev/phgraphs/photos/s3url
