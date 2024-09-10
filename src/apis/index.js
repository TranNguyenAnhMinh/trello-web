import axios from 'axios'
import { API_ROOT } from '~/utils/constants'
export const fetchBoardDetailsAPI = async(boardId) =>{
  const response = await axios.get(`${API_ROOT}/v1/boards/${boardId}`)
  // axios trả về kết quả về qua property của nó là dâta
  // catch lỗi bawgf Interceptors => chặn vào giữa request hoặc reponse để xử lý logic
  return response.data
}