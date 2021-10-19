import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Main from "./routes/Main";
import Header from "./common/Header";
import ArtistDetail from "./routes/ArtistDetail";
import { useEffect } from "react";
import LoginDetail from "./routes/LoginDetail";
import Footer from "./common/Footer";
import ProductDetail from "./routes/ProductDetail";
import BasketDetail from "./routes/BasketDetail";

const Container = styled.div``;

function App() {
  return (
    <Container>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/artist-detail" component={ArtistDetail} />
          <Route path="/login-detail" component={LoginDetail} />
          <Route path="/product-detail" component={ProductDetail} />
          <Route path="/basket-detail" component={BasketDetail} />
        </Switch>
        <Footer />
      </Router>
    </Container>
  );
}

export default App;
