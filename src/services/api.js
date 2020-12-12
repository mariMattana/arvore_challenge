import axios from 'axios'

export function apiCall(path) {
  return new Promise((resolve, reject) => {
    return axios.get(path)
      .then(res => {
        return resolve(res)
      })
      .catch (err => {
        return reject(err)
      })
  })
}