import axios from 'axios'
const apiUrl = import.meta.env.VITE_API_URL
const baseUrl = `${apiUrl}/api/notes`

let token = null

const setToken = newToken => {
  console.log('Setting token...')
  console.log(newToken)
  token = `Bearer ${newToken}`
}

const getAll = () => {
  console.log('Getting all the notes...')
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  console.log('Creating note...')
  const config = {
    headers: { Authorization: token },
  }

  console.log(config)
  console.log('Sending request...')
  const request = axios.post(baseUrl, newObject, config)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  console.log('Updating note...')
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default {
  getAll, create, update, setToken
}