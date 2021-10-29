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
import ProductDetail from "./routes/ProductDetail";
import BasketDetail from "./routes/BasketDetail";
import SignUpDetail from "./routes/SignUpDetail";

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
          <Route path="/board" component={BasketDetail} />
          <Route path="/signup" component={SignUpDetail}/>
        </Switch>
        <Footer />
      </Router>
    </Container>
  );
}

export default App;
