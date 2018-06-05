import axios from 'axios';

export const xyz = () => {
  return async dispatch => {

    //do something async

    dispatch();


  }
}


export const abc = (dispatch) => {
  //do something sync
  dispatch();
}
