import axios from 'axios';
import {base_url} from './api';
import qs from 'qs';
import AsyncStorage from '@react-native-community/async-storage';

export function request(url, data = {}) {
  let token = AsyncStorage.getItem('token');
  console.log('---token----', token);
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
