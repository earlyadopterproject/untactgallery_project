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
import CreateProduct from "./components/product/CreateProduct";
import ListProduct from "./components/product/ListProduct";
import ProductDetail from "./components/product/ProductDetail";

const Container = styled.div``;

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
                    <Route path="/board" component={ListProduct}></Route>
                    <Route path="/create-board/:no" component={CreateProduct}></Route>
                    <Route path="/read-board/:no" component={ProductDetail}></Route>
                </Switch>
                <Footer/>
            </Router>
        </Container>
    );
}

export default App;
