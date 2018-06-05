// THIS IS IN REACT SRC

ReactDOM.render(
    <App ref={(Component) => {window.Component = Component}}/>,
  document.getElementById("root")
);



// just passing this reference allows us to access this component in script tag in index.html as window.xyz


// BOOM
