import React, { Component } from 'react';
import BoardService from "../../service/BoardService";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 30px 30px;
`;
const Container = styled.div`
    display: flex;
  justify-content: end;
  margin-right: 30px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: auto;
  height: auto;
`;

const Table = styled.th`
    text-align: center;
`;

const Table1 = styled.td`
    text-align: center;
`;

class ListProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            p_num: 1,
            paging: {},
            boards: []
        }

        this.createBoard = this.createBoard.bind(this);
    }

    componentDidMount() {
        //BoardService.getBoards().then((res) => {
            //this.setState({ boards: res.data});
        BoardService.getBoards(this.state.p_num).then((res) => {
            this.setState({ 
                p_num: res.data.pagingData.currentPageNum,
                paging: res.data.pagingData,
                boards: res.data.list});

        });
    }

    createBoard() {
        this.props.history.push('/create-board/_create');
    }

    readBoard(no) {
        this.props.history.push(`/read-board/${no}`);
    }

    listBoard(p_num) {
        console.log("pageNum : "+ p_num);
        BoardService.getBoards(p_num).then((res) => {
            console.log(res.data);

            this.setState({ 
                p_num: res.data.pagingData.currentPageNum,
                paging: res.data.pagingData,
                boards: res.data.list});
        });
        //console.log(this.state.boards);
    }

    viewPaging() {
        const pageNums = [];

        for (let i = this.state.paging.pageNumStart; i <= this.state.paging.pageNumEnd; i++ ) {
            pageNums.push(i);
        }

        return (pageNums.map((page) => 
        <li className="page-item" key={page.toString()} >
            <a className="page-link" onClick = {() => this.listBoard(page)}>{page}</a>
        </li>
        ));
        
    }

    isPagingPrev(){
        if (this.state.paging.prev) {
            return (
                <li className="page-item">
                    <a className="page-link" onClick = {() => this.listBoard( (this.state.paging.currentPageNum - 1) )} tabindex="-1">Previous</a>
                </li>
            );
        }
    }

    isPagingNext(){
        if (this.state.paging.next) {
            return (
                <li className="page-item">
                    <a className="page-link" onClick = {() => this.listBoard( (this.state.paging.currentPageNum + 1) )} tabIndex="-1">Next</a>
                </li>
            );
        }
    }

    isMoveToFirstPage() {
        if (this.state.p_num != 1) {
            return (
                <li className="page-item">
                    <a className="page-link" onClick = {() => this.listBoard(1)} tabIndex="-1">Move to First Page</a>
                </li>
            );
        }
    }

    isMoveToLastPage() {
        if (this.state.p_num != this.state.paging.pageNumCountTotal) {
            return (
                <li className="page-item">
                    <a className="page-link" onClick = {() => this.listBoard( (this.state.paging.pageNumCountTotal) )} tabIndex="-1">LastPage({this.state.paging.pageNumCountTotal})</a>
                </li>
            );
        }
    }

    render() {
        return (
            <Wrapper>
                <h2 className="text-center"> 작품 </h2>
                <Container className = "row">
                    <Button className="btn btn-primary" onClick={this.createBoard}> 작품 등록</Button>
                </Container>
                <div className ="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <Table>작품 종류 </Table>
                                <Table>작가 명 </Table>
                                <Table>작성 일 </Table>
                                <Table>수정 일 </Table>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.boards.map(
                                    board => 
                                    <tr key = {board.no}>
                                        <Table1> <a onClick = {() => this.readBoard(board.no)}>{board.title} </a></Table1>
                                        <Table1> {board.memberNo} </Table1>
                                        <Table1> {board.createdTime} </Table1>
                                        <Table1> {board.updatedTime} </Table1>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div className ="row">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            {
                                this.isMoveToFirstPage()
                            }
                            {
                                this.isPagingPrev()
                            }
                            {
                                this.viewPaging()
                            }
                            {
                                this.isPagingNext()
                            }
                            {
                                this.isMoveToLastPage()
                            }
                        </ul>
                    </nav>
                </div>
            </Wrapper>
        );
    }

}

export default ListProduct;