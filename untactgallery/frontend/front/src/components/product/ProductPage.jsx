import React, { Component } from "react";
import ProductService from '../service/ProductService';

class ProductPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        ProductService.getProducts().then((res) => {
            this.setState({products: res.data});
        });
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>가격</th>
                            <th>소개</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.products.map(
                                product =>
                                <tr key = {product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                    <td>{product.info}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductPage;
