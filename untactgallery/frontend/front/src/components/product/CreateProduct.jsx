import React, {Component} from 'react';
import BoardService from "../../service/BoardService";
import styled from "styled-components";

const Button = styled.button`
  margin-bottom: 15px;
  margin-top: 15px;
`;

const H3 = styled.h3`
    margin-top: 15px;
  margin-bottom: 15px;
`;

const Wrapper = styled.div`
margin-bottom: 20px;
  margin-top: 20px;
`;

class CreateProduct extends Component {
    constructor(props) {
        super(props);

        this.state = {
            no: this.props.match.params.no,
            type: 1,
            title: '',
            contents: '',
            memberNo: ''
        }

        this.changeTypeHandler = this.changeTypeHandler.bind(this);
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeContentsHandler = this.changeContentsHandler.bind(this);
        this.changeMemberNoHandler = this.changeMemberNoHandler.bind(this);
        this.createBoard = this.createBoard.bind(this);
    }


    changeTypeHandler = (event) => {
        this.setState({type: event.target.value});
    }

    changeTitleHandler = (event) => {
        this.setState({title: event.target.value});
    }

    changeContentsHandler = (event) => {
        this.setState({contents: event.target.value});
    }

    changeMemberNoHandler = (event) => {
        this.setState({memberNo: event.target.value});
    }

    createBoard = (event) => {
        event.preventDefault();
        let board = {
            type: this.state.type,
            title: this.state.title,
            contents: this.state.contents,
            memberNo: this.state.memberNo
        };
        console.log("board => " + JSON.stringify(board));

        if (this.state.no === '_create') {
            BoardService.createBoard(board).then(res => {
                this.props.history.push('/board');
            });
        } else {
            BoardService.updateBoard(this.state.no, board).then(res => {
                this.props.history.push('/board');
            });
        }
    }

    cancel() {
        this.props.history.push('/board');
    }

    getTitle() {
        if (this.state.no === '_create') {
            return <H3 className="text-center">작품을 등록해주세요</H3>
        } else {
            return <h3 className="text-center">{this.state.no}글을 수정 합니다.</h3>
        }
    }

    // For update function add
    componentDidMount() {
        if (this.state.no === '_create') {
            return
        } else {
            BoardService.getOneBoard(this.state.no).then((res) => {
                let board = res.data;
                console.log("board => " + JSON.stringify(board));

                this.setState({
                    type: board.type,
                    title: board.title,
                    contents: board.contents,
                    memberNo: board.memberNo
                });
            });
        }
    }

    render() {
        return (
            <Wrapper>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> 작품 종류 </label>
                                        <select placeholder="type" name="type" className="form-control"
                                                value={this.state.type} onChange={this.changeTypeHandler}>
                                            <option value="1">그림</option>
                                            <option value="2">조각</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label> 작품 명 </label>
                                        <input type="text" placeholder="title" name="title" className="form-control"
                                               value={this.state.title} onChange={this.changeTitleHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> 작품 소개 </label>
                                        <textarea placeholder="Product Name" name="contents" className="form-control"
                                                  value={this.state.contents} onChange={this.changeContentsHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label> 작가 명 </label>
                                        <input placeholder="Artist Name" name="memberNo" className="form-control"
                                               value={this.state.memberNo} onChange={this.changeMemberNoHandler}/>
                                    </div>
                                    <Button className="btn btn-success" onClick={this.createBoard}> 저장하기 </Button>
                                    <Button className="btn btn-danger" onClick={this.cancel.bind(this)}
                                            style={{marginLeft: "10px"}}> 취소하기 </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </Wrapper>
        );
    }
}

export default CreateProduct;