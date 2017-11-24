import * as api from '../../api'
export const fetchProduct = async token => {
  const { status, data } = await api.get(`${api.SERVER}/product?token=${token}`)
  return data
}
