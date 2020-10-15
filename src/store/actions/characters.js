import {
  GET_CHARACTERS_PENDING,
  GET_CHARACTERS_SEARCH,
  GET_CHARACTERS_SUCCESS,
  GET_CHARACTERS_FAILURE
} from "../actionTypes";

export const charactersPending = () => ({
  type: GET_CHARACTERS_PENDING
});

export const charactersSearch = (episodeId) => ({
  type: GET_CHARACTERS_SEARCH,
  episodeId,
});

export const charactersSuccess = (characters) => ({
  type: GET_CHARACTERS_SUCCESS,
  characters,
});

export const charactersFailure = () => ({
  type: GET_CHARACTERS_FAILURE,
});
