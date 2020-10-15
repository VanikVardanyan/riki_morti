import request from '../../constans/api';
import { charactersSuccess, charactersPending, charactersFailure } from '../actions';

export const fetchCharaters = () => (dispatch) => {
  dispatch(charactersPending());
  request.get()
    .then((res) => dispatch(charactersSuccess(res.data.results)))
    .catch((err) => dispatch(charactersFailure()));
};
