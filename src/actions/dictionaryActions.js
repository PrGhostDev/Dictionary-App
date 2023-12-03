import axios from "axios";

// Action types
export const FETCH_WORD_DETAILS_REQUEST = "FETCH_WORD_DETAILS_REQUEST";
export const FETCH_WORD_DETAILS_SUCCESS = "FETCH_WORD_DETAILS_SUCCESS";
export const FETCH_WORD_DETAILS_FAILURE = "FETCH_WORD_DETAILS_FAILURE";
export const SEARCH_WORD = "SEARCH_WORD";
export const ADD_TO_HISTORY = "ADD_TO_HISTORY";
export const SET_SELECTED_HISTORY = "SET_SELECTED_HISTORY";

// Action creators
export const fetchWordDetailsRequest = () => ({
  type: FETCH_WORD_DETAILS_REQUEST,
});

export const fetchWordDetailsSuccess = (data) => ({
  type: FETCH_WORD_DETAILS_SUCCESS,
  payload: data,
});

export const fetchWordDetailsFailure = (error) => ({
  type: FETCH_WORD_DETAILS_FAILURE,
  payload: error,
});

export const fetchWordDetails = (searchTerm) => {
  return async (dispatch) => {
    dispatch(fetchWordDetailsRequest());

    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
      );
      dispatch(fetchWordDetailsSuccess(response.data));
    } catch (error) {
      dispatch(fetchWordDetailsFailure(error.message));
    }
  };
};

export const searchWord = (term) => ({
  type: SEARCH_WORD,
  payload: term,
});

export const addToHistory = (term) => ({
  type: ADD_TO_HISTORY,
  payload: term,
});

export const setSelectedHistory = (term) => ({
  type: SET_SELECTED_HISTORY,
  payload: term,
});
