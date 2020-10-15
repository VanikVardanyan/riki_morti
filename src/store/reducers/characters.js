import {
  GET_CHARACTERS_PENDING,
  GET_CHARACTERS_SEARCH,
  GET_CHARACTERS_SUCCESS,
  GET_CHARACTERS_FAILURE,
} from "../actionTypes";

const initialState = {
  isLoading: false,
  characters: [],
  showCharacters: [],
};

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_CHARACTERS_PENDING:
      return {
        ...state,
        isLoading: true,
      };

    case GET_CHARACTERS_SUCCESS:
      const characters = action.characters
        .map(({
          episode, gender, id, image, location: { name: location },
          name, origin: { name: origin }, species, status
        }) => ({
          episodesId: episode.map(episodeUrl => episodeUrl.split('episode/')[1]),
          gender,
          id,
          image,
          location,
          name,
          origin,
          species,
          status,
        }));
      return {
        isLoading: false,
        characters,
        showCharacters: characters,
      };

    case GET_CHARACTERS_SEARCH:
      const { episodeId } = action;
      const filteredCharacters = 
        episodeId
          ? state.characters.filter(({ episodesId }) => episodesId.includes(String(episodeId)))
          : [...state.characters];
      return {
        ...state,
        showCharacters: filteredCharacters,
      };

    case GET_CHARACTERS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
