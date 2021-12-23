import axios from 'axios'

export const todoApi = axios.create({
  baseURL: 'https://61c45535f1af4a0017d994b5.mockapi.io',
})
