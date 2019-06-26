import { GET_HEROES, GET_HERO, LOAD_DATA } from "../constants";

const initialState = {
  heroes: [],
  hero: [],
  loading: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_DATA:
      return {...state, loading: true}
    case GET_HEROES:
      return Object.assign({}, {...state, loading: false}, {
        heroes: [...state.heroes.concat(action.payload)]
      });
    case GET_HERO:
      return [...state];
    default:
      return state;
  }
}

export default reducer;
