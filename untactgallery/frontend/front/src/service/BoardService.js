import axios from 'axios';

const Basket_API_BASE_URL = "http://localhost:10002/basket";
const BOARD_API_BASE_URL = "http://localhost:10002/api/board";
class BoardService {

    getBasket() {
        return axios.get(Basket_API_BASE_URL);
    }

    getBoards() {
        return axios.get(BOARD_API_BASE_URL);
    }

    createBoard(board) {
        return axios.post(BOARD_API_BASE_URL, board);
    }
}

export default new BoardService();