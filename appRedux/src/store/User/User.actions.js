import axios from 'axios';
import {fetchData, fetchSuccess, fetchError} from '../../ApiAction';
import ACTION_TYPES from '../../ApiAction';

export const getToken = (url) => (dispatch) => {
  dispatch(fetchData());
  return new Promise(() => {
    axios({
      method: 'post',
      url: url,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        dispatch({
          type: ACTION_TYPES.API_SUCCESS,
          payload: {
            data: response.data.data,
          },
        });
      })
      .catch((error) => {
        dispatch(fetchError(error));
        console.log(error);
      });
  });
};

export const signIn = (url) => (dispatch) => {
  dispatch(fetchData());
  return new Promise(() => {
    axios({
      method: 'post',
      url: url,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        dispatch(fetchSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchError(error));
        console.log(error);
      });
  });
};
