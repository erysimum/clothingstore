import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import HatsPage from './pages/hatspage/hatspage.component.jsx';
import { Route, Switch } from 'react-router-dom';
import Shop from './././pages/shop/shop.component';
import Header from './components/Header/header.component.jsx';
import SignInSignUp from './pages/signin-signup/signin-signup.component';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/signin' component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
