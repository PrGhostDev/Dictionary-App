// dictionaryReducer.js
import {
  FETCH_WORD_DETAILS_REQUEST,
  FETCH_WORD_DETAILS_SUCCESS,
  FETCH_WORD_DETAILS_FAILURE,
} from "../actions/dictionaryActions";

const initialState = {
  isLoading: false,
  wordDetails: null,
  error: null,
  selectedHistory: null,
  searchedWord: null,
  searchHistory: [],
};

export const SET_SELECTED_HISTORY = "SET_SELECTED_HISTORY";


const dictionaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WORD_DETAILS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_WORD_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        wordDetails: action.payload,
        error: null,
      };
    case FETCH_WORD_DETAILS_FAILURE:
      return {
        ...state,
        isLoading: false,
        wordDetails: null,
        error: action.payload,
      };
    case "SEARCH_WORD":
      return {
        ...state,
        searchedWord: action.payload,
      };
    case "ADD_TO_HISTORY":
      return {
        ...state,
        searchHistory: [...state.searchHistory, action.payload],
      };

    case SET_SELECTED_HISTORY:
      return {
        ...state,
        selectedHistory: action.payload,
      };

    default:
      return state;
  }
};

export default dictionaryReducer;
