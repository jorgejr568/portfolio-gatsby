import axios from 'axios'
const { API_URL } = process.env

const useApi = () =>
  axios.create({
    baseURL: API_URL,
  })

export default useApi
