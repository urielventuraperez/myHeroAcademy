import { GET_HEROES, GET_HERO, LOAD_DATA } from "../constants";

export function getHeroes() {
  return function(dispatch) {
    dispatch({ type: LOAD_DATA })
    return fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then(response => response.json())
      .then(json => {
        return dispatch({ type: GET_HEROES, payload: json });
      });
  };
}
