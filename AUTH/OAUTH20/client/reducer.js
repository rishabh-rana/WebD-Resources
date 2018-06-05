const reducer =  (state = {token : localStorage.getItem('token')}, action) => {

  if(action.type=='loggedin'){ //this is dipatched from index.html
    localStorage.setItem("token", action.payload);
    return {token : action.payload}
  }
  if(action.type=="logout"){  //logout
    localStorage.setItem('token', false);
    return {token : "false"}
  }

  return state;
}


export default reducer;
