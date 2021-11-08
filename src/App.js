import './App.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Contract from './components/contract/Contract';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Tourist from './components/Tourist/Tours'
import Booking from './components/Booking/Booking';
import Customer from './components/Customer/Customer';
import AddUser from './components/AddUser/AddUser';
import UpdateUser from './components/UpdataUser/UpdateUser';
import MyOrder from './components/MyOrder/MyOrder';
function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route exact path="/home">
              <Home></Home>
          </Route>
          <Route exact  path="/services">
              <Services></Services>
          </Route>
          <PrivateRoute path="/tourist">
            <Tourist></Tourist>
          </PrivateRoute>
          <Route exact path="/myorder">
            <MyOrder></MyOrder>
          </Route>
          <Route path="/user/add">
            <AddUser></AddUser>
          </Route>
          <Route path="/user/update/:id">
            <UpdateUser></UpdateUser>
          </Route>
          <Route path="/booking">
            <Booking></Booking>
          </Route>
          <Route exact  path="/contract">
              <Contract></Contract>
          </Route>
          <Route path="/customer">
              <Customer></Customer>
          </Route>
          <PrivateRoute exact  path="/about">
              <About></About>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <Route  path="*">
              <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;