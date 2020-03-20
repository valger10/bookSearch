import axios from 'axios'

let BASE_URL = 'http://openlibrary.org/search.json'

// variable for all gets
export const get = async (path, params = {}) => {
  return axios.get(`${BASE_URL}${path}${params}`).then(res => res.data)
}
export const getBookData = parms => {
  return get(`?title=`, parms)
}
