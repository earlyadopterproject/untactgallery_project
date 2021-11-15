import styled from "styled-components";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Main from "./routes/Main";
import Header from "./common/Header";
import ArtistDetail from "./routes/ArtistDetail";
import LoginDetail from "./routes/LoginDetail";
import Footer from "./common/Footer";
import BasketDetail from "./routes/BasketDetail";
import SignUpDetail from "./routes/SignUpDetail";
import ListProduct from "./components/product/ListProduct";
import AddProduct from "./components/product/AddProduct";
import BackImage from "./img/cool-background.png";
import DetailProduct from "./components/product/DetailProduct";

const Container = styled.div`
    background-color: gray;
`;

function App() {
    return (
        <Container>
            <Router>
                <Header/>
                <Switch>
                    <Route path="/" exact component={Main}/>
                    <Route path="/artist-detail" component={ArtistDetail}/>
                    <Route path="/login-detail" component={LoginDetail}/>
                    <Route path="/basket-detail" component={BasketDetail}/>
                    <Route path="/signup" component={SignUpDetail}/>
                    <Route path="/product" component={ListProduct}></Route>
                    <Route path="/add-employee" component={AddProduct}></Route>
                    <Route path="/edit-employee/:id" component={AddProduct}></Route>
                    <Route path="/product-detail/:id" component={DetailProduct}></Route>
                </Switch>
                <Footer/>
            </Router>
        </Container>
    );
}

export default App;
