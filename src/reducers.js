import { combineReducers } from 'redux';
import { FETCH_PAINTINGS, SELECT_ACTIVE_PAINTING, REMOVE_ACTIVE_PAINTING, FETCH_BY_MUSEUM } from './actions/types';

const paintingsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_PAINTINGS:
      return [...action.payload];
    case REMOVE_ACTIVE_PAINTING:
      return state.filter(painting => painting.id !== action.id)
    case FETCH_BY_MUSEUM:    
    // National Gallery of Art, Washington D.C.
      return state.filter(painting => painting.museum.name === action.payload)

    default:
      return state;
  }
};

const activePaintingIdReducer = (state = null, action) => {
  switch (action.type) {
    case SELECT_ACTIVE_PAINTING:
      return action.id;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  paintings: paintingsReducer,
  activePaintingId: activePaintingIdReducer
});

// NOTE:
// the keys in the object passed to combineReducers
// will become the top level keys of redux store state
// i.e. store.getState() would return =>
// {
//   paintings: {
//     /* state returned ftom paintingsReducer */
//   },
//   activePainting: {
//     /* state returned from activePaintingReducer */
//   }
// }

export default rootReducer;
