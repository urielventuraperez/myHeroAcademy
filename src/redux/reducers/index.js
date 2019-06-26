import { GET_HEROES, GET_HERO, LOAD_DATA, SHOW_DETAIL, HERO_SELECTED } from "../constants";

const initialState = {
  heroes: [],
  hero: [],
  loading: false,
  isShow: false,
  heroSelect: "",
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
    case HERO_SELECTED:
        return {...state,
            heroSelect: state.heroSelect
          }
    case GET_HEROES:
      return Object.assign(
        {},
        { ...state, loading: false },
        {
          heroes: [...state.heroes.concat(action.payload)]
        }
      );
    case GET_HERO:
      return Object.assign(
        {},
        { ...state, hero: state.hero.pop() },
        {
          hero: [...state.hero.concat(action.payload)]
        }
      );
    default:
      return state;
  }
}

export default reducer;
