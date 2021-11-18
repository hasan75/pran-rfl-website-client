import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header></Header>
          <Switch>
              <Route exact path="/">

              </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
    </div>
  );
}

export default App;
