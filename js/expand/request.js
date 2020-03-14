import axios from 'axios';
import {base_url} from './api';
import qs from 'qs';

export function request(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      baseURL: base_url,
      data: qs.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
      .then(res => {
        console.log('res ======== data', res.data);
        resolve(res.data);
      })
      .catch(err => {
        console.log('err ======== data', err);
        reject(err);
      });
  });
}
