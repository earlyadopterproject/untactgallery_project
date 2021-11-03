import axios from 'axios';

const Basket_API_BASE_URL = "http://localhost:10002/basket";
const BOARD_API_BASE_URL = "http://localhost:10002/board";
class BoardService {

    getBasket() {
        return axios.get(Basket_API_BASE_URL);
    }

    getBoards(p_num) {
        return axios.get(BOARD_API_BASE_URL + "?p_num="+ p_num);
    }

    createBoard(board) {
        return axios.post(BOARD_API_BASE_URL, board);
    }

    getOneBoard(no) {
        return axios.get(BOARD_API_BASE_URL + "/" + no);
    }

    updateBoard(no, board) {
        return axios.put(BOARD_API_BASE_URL + "/" + no, board);
    }

    deleteBoard(no) {
        return axios.delete(BOARD_API_BASE_URL + "/" + no);
    }
}

export default new BoardService();