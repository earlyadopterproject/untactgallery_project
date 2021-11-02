import React, {Component} from 'react';
import BoardService from '../../service/BoardService';
import styled from 'styled-components';

const Container = styled.div`
  justify-content: center;
  align-content: center;
  margin: 30px 30px;
`;

const Pont = styled.th`
  text-align: center;
`;

const Pont1 = styled.th`
  text-align: center;
`;

const Button = styled.td`
  align-content: center;
  display: flex;
  justify-content: center;

`;
const Paybtn = styled.button`
  display: inline;
  align-content: center;
  justify-content: center;
  text-align: center;
  margin: auto;
`;


class BusketList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            busket: []
        }
    }


    componentDidMount() {
        BoardService.getBasket().then((res) => {
            this.setState({busket: res.data});
        });
    }

    render() {
        return (
            <Container>
                <h2 className="text-center"> 구매 리스트 </h2>
                <br/>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <Pont>작품명</Pont>
                            <Pont>가격</Pont>
                            <Pont>결제상태</Pont>
                            <Pont>결제</Pont>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.busket.map(
                                busket =>
                                    <tr key={busket.id}>
                                        <Pont1> {busket.product} </Pont1>
                                        <Pont1> {busket.cost} </Pont1>
                                        <Pont1> {busket.paystate} </Pont1>
                                        <Button>
                                            <Paybtn>
                                                결제
                                            </Paybtn>
                                        </Button>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </Container>
        );
    }
}

export default BusketList;