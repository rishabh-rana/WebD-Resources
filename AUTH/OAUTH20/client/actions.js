import axios from 'axios';

export const loginSignup = () => {  //use this on login button, no reducer
  return async dispatch => {

    window.authenticate('google');


  }
}

export const logout = () => {  //logout button
  return async dispatch => {

    dispatch({type:"logout"})


  }
}

export const getprotected = (token) => {  //use to retrieve protected resource, no reducer AND PASS TOKEN FROM STATE AS ARGUMENT
  return async dispatch => {

    const res = await axios({method:"GET", url: '/auth/protected', headers: {'authorization': token }});
    console.log(res.data);



  }
}
