import { GET_HEROES, GET_HERO, LOAD_DATA, SHOW_DETAIL } from "../constants";

const initialState = {
  heroes: [],
  hero: [],
  loading: false,
  isShow: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_DATA:
      return { ...state, loading: !state.loading };
    case SHOW_DETAIL:
      return {
        ...state,
        isShow: !state.isShow
      };
    case GET_HEROES:
      return Object.assign(
        {},
        { ...state, loading: false },
        {
          heroes: [...state.heroes.concat(action.payload)]
        }
      );
    case GET_HERO:
      return [...state];
    default:
      return state;
  }
}

export default reducer;
