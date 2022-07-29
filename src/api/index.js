/*
 * @Author: lisheng lisheng@zingfront.com
 * @Date: 2022-07-29 16:00:26
 * @LastEditors: lisheng lisheng@zingfront.com
 * @LastEditTime: 2022-07-29 16:05:28
 * @FilePath: /chrome-plugin/src/api/index.js
 * @Description: 此文件，用于统一定义管理插件内的接口请求
 */

import { get, post } from '@/utils/axios';

// get请求示例
export const exampleGet = arg => { return get('', arg) };

// post请求示例
export const getProductJson = arg => { return post('', arg) };