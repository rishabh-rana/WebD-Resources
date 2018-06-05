// CLIENT SRC

...

ReactDOM.render(

    <App ref={(ourComponent) => {window.ourComponent = ourComponent}}/>  //passing reference so that we can dispatch action from index.html
  ,
  document.getElementById("root")
);

...
