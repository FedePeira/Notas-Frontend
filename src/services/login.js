import axios from 'axios'
const apiUrl = import.meta.env.VITE_API_URL
const baseUrl = `${apiUrl}/api/login`

const login = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

export default { login }