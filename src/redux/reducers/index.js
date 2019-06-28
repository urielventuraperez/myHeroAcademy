import {
  GET_HEROES,
  GET_HERO,
  LOAD_DATA,
  SHOW_DETAIL,
  HERO_SELECTED,
  ADD_FAVORITE,
  TOTAL_FAVORITES,
  SEARCH_HERO
} from "../constants";

const initialState = {
  heroes: [],
  hero: [],
  loading: false,
  isShow: false,
  heroSelect: "",
  favorites: [],
  sumFavorites: 0,
  heroSearch: []
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
      return { ...state, heroSelect: action.payload };
    case GET_HEROES:
      return Object.assign(
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
    case SEARCH_HERO:
      return Object.assign({}, state, {
        heroSearch: [...state.heroSearch.filter(item => item.name !== action.payload)]
      });
    case ADD_FAVORITE:
      return Object.assign({}, state, {
        favorites: state.favorites.concat(action.payload)
      });
    case TOTAL_FAVORITES:
      return {
        ...state,
        sumFavorites: state.sumFavorites + 1
      };
    default:
      return state;
  }
}

export default reducer;
