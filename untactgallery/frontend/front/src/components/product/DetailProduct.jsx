import React, {useState, useEffect} from 'react';
import ProductService from "../../service/ProductService";
import {Link} from 'react-router-dom'
import styled from "styled-components";

const Image = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 5px;
`;

const Text = styled.h2`
  color: white;
`;
const Container = styled.tbody`
  display: block;
  justify-content: center;
  align-items: center;
`;

const TableWrapper = styled.table`
  display: block;
  justify-content: center;
  align-items: center;
`;
const Table = styled.td`
  height: 100px;
  width: 100vh;
  color: aliceblue;
  font-size: small;
  border: 1px solid;
  text-align: center;
`;

const Table1 = styled.th`
  justify-content: center;
  color: aliceblue;
  font-size: small;
  border: 1px solid;
  text-align: center;
`;


const DetailProduct = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {
        getAllProduct()
    }, [])

    const getAllProduct = () => {
        ProductService.getAllProduct().then((response) => {
            setProduct(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteProduct = (productId) => {
        ProductService.deleteProduct(productId).then((response) => {
            getAllProduct();

        }).catch(error => {
            console.log(error);
        })

    }

    return (
        <Container className="container">
            <Text className="text-center"> 작품 리스트 </Text>
            <TableWrapper>
                <thead>
                <Table1> 작품 명</Table1> {/* name */}
                <Table1> 사진</Table1> {/* file */}
                <Table1> 가격</Table1> {/* pricwe */}
                <Table1> 결제 상태</Table1> {/* product_status */}
                <Table1> 크기 </Table1> {/* createtime */}
                <Table1> 작품 종류</Table1> {/* createtime */}
                <Table1> 게시 일</Table1> {/* createtime */}
                <Table1> 수정 일</Table1> {/* createtime */}
                <Table1> 수정 및 삭제</Table1> {/* createtime */}
                </thead>
                <tbody>
                {
                    product.map(
                        product =>
                            <tr key={product.id}>
                                <Table> {product.name} </Table>
                                <Table >
                                    <Image src={"http://localhost:10002/" + product.fileinfo}></Image>
                                </Table>
                                <Table>{product.price}</Table>
                                <Table>{product.product_status}</Table>
                                <Table>{product.size_hight} * {product.size_width}</Table>
                                <Table>{product.product_type}</Table>
                                <Table>{product.createtime}</Table>
                                <Table>{product.updatetime}</Table>

                                <Table>
                                    <Link class="btn btn-outline-light"
                                          to={`/edit-employee/${product.id}`}>Update</Link>
                                    <button className="btn btn-outline-light" onClick={() => deleteProduct(product.id)}
                                            style={{marginLeft: "9px"}}> Delete
                                    </button>
                                </Table>
                            </tr>
                    )
                }
                </tbody>
            </TableWrapper>
        </Container>
    );
};

export default DetailProduct;