/*
 * @Author: your name
 * @Date: 2020-01-19 10:21:20
 * @LastEditTime : 2020-01-20 14:46:26
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /music_app/js/redux/store/index.js
 */

'use strict';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/index';
import {middleware} from '../../navigation/AppNavigation';
import logger from 'redux-logger';

const middlewares = [middleware, thunk, logger];

export default createStore(reducers, applyMiddleware(...middlewares));
