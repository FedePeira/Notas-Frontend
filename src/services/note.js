import axios from 'axios'
const baseUrl = '/api/notes'

let token = null

const setToken = newToken => {
  console.log(newToken.token)
  token = `Bearer ${newToken.token}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async newObject => {
  console.log('Creating note...')
  const config = {
    headers: { Authorization: token },
  }

  console.log(config)
  console.log('Sending request...')
  const request = await axios.post(baseUrl, newObject, config)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default {
  getAll, create, update, setToken
}