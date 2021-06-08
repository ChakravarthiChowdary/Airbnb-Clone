import { AnyAction } from "redux";
import { GET_CATEGORIES, GET_SEARCHPLACES } from "./actions";

const initialState = {
  categories: [],
  searchPlaces: [],
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case GET_SEARCHPLACES:
      return {
        ...state,
        searchPlaces: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
