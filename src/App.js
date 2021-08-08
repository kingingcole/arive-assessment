import {useReducer} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header'
import ContactForm from './pages/ContactForm';
import PSF from './pages/PizzaSelectionForm';
import CardForm from './pages/CardForm';
import OCP from './pages/OrderConfirmation';

function App() {

  const initialOrderDetails = {
    firstName: '',
    lastName: '',
    streetName: '',
    houseNumber: '',
    postalCode: '',
    city: '',
    phone: '',
    pizzaSize: '',
    pizzaPrice: 0,
    toppings: [],
    toppingsPrice: 0,
    cc: '',
    expiryDate: '',
    cvv: '',
    totalPrice: 0
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_FIRST_NAME':
        return {
          ...state,
          firstName: action.payload
        }
      case 'SET_LAST_NAME':
        return {
          ...state,
          lastName: action.payload
        }
      case 'SET_STREET_NAME':
        return {
          ...state,
          streetName: action.payload
        }
      case 'SET_HOUSE_NUMBER':
        return {
          ...state,
          houseNumber: action.payload
        }
      case 'SET_POSTAL_CODE':
        return {
          ...state,
          postalCode: action.payload
        }
      case 'SET_CITY':
        return {
          ...state,
          city: action.payload
        }
      case 'SET_PHONE':
        return {
          ...state,
          phone: action.payload
        }
      case 'SET_PIZZA_SIZE':
        return {
          ...state,
          pizzaSize: action.payload.size,
          pizzaPrice: action.payload.price
        }
      case 'SET_TOPPINGS':
        return {
          ...state,
          toppings: action.payload.toppings,
          toppingsPrice: action.payload.toppingsPrice
        }
      case 'SET_CC':
        return {
          ...state,
          cc: action.payload
        }
      case 'SET_EXPIRY_DATE':
        return {
          ...state,
          expiryDate: action.payload
        }
      case 'SET_CVV':
        return {
          ...state,
          cvv: action.payload
        }
      case 'SET_TOTAL_PRICE':
        return {
          ...state,
          totalPrice: action.payload
        }
      default:
        throw new Error("unknown action type")
    }
  }

  const [orderDetails, dispatch] = useReducer(reducer, initialOrderDetails);

  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route exact path='/'>
            <ContactForm orderDetails={orderDetails} dispatch={dispatch}/>
          </Route>
          <Route exact path='/select-pizza'>
            <PSF orderDetails={orderDetails} dispatch={dispatch}/>
          </Route>
          <Route exact path='/pay'>
            <CardForm orderDetails={orderDetails} dispatch={dispatch}/>
          </Route>
          <Route exact path='/confirm'>
            <OCP orderDetails={orderDetails} dispatch={dispatch}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
