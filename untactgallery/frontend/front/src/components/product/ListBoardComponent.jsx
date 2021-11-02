import React, {Component} from 'react';
import BoardService from "../../service/BoardService";
import styled from "styled-components";

const Table = styled.td`
  text-align: center;
`;

const Table2 = styled.th`
  text-align: center;
`;

const ButtonWrapper = styled.div`
    display: flex;
  justify-content: end;
  margin-right: 30px;
  margin-bottom: 30px;
`;

const Button = styled.button`
  display: flex;
  width: 90px;
  height: 35px;
  text-align: center;
  align-items: center;
`;

class ListBoardComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            boards: []
        }

        this.createBoard = this.createBoard.bind(this);
    }

    componentDidMount() {
        BoardService.getBoards().then((res) => {
            this.setState({boards: res.data});
        });
    }


    createBoard() {
        this.props.history.push('/create-board/');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Product List</h2>

                <ButtonWrapper className="row">
                    <Button className="btn btn-primary" onClick={this.createBoard}> 글 작성 </Button>
                </ButtonWrapper>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <Table2>글 번호</Table2>
                            <Table2>작가이름</Table2>
                            <Table2>작품이름</Table2>
                            <Table2>작성일</Table2>
                            <Table2>갱신일</Table2>
                            <Table2>좋아요수</Table2>
                            <Table2>조회수</Table2>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.boards.map(
                                board =>
                                    <tr key={board.no}>
                                        <Table> {board.no} </Table>
                                        <Table> {board.title} </Table>
                                        <Table> {board.memberNo} </Table>
                                        <Table> {board.createdTime} </Table>
                                        <Table> {board.updatedTime} </Table>
                                        <Table> {board.likes} </Table>
                                        <Table> {board.counts} </Table>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListBoardComponent;