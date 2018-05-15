import React, { Component } from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
// import Hello from './Hello';

// const styles = {
//   fontFamily: 'sans-serif',
//   textAlign: 'center',
// };

// const App = () => (
//   <div style={styles}>
//     <Hello name="CodeSandbox" />
//     <h2>Start editing to see some magic happen {'\u2728'}</h2>
//   </div>
// );

// render(<App />, document.getElementById('root'));
class MyComponent extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<MyComponent />, document.getElementById("root"));
