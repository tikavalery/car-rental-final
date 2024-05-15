import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk'
import { carsReducer } from './reducers/carsReducer';
import { alertsReducer } from './reducers/alertsReducer';
import { bookingsReducer } from './reducers/bookingsReducer';

// export const bookingsReducer = (state = initialData, action) =>{
//   switch(action.type){
//       case "GET_ALL_BOOKINGS" : {
//           return{
//               ...state,
//               bookings: action.payload
//           }
//       }
//       default:return state;
//   }
// }

const composeEnhancers = composeWithDevTools({
  
});

const rootReducer = combineReducers({
   carsReducer,
   alertsReducer,
   bookingsReducer
})
const store = createStore(
   rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);

export default store;