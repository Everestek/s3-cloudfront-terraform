import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React + S3 + Cloudfront</h1>
        <p>Learn how to Deploy React app on S3 and CloudFront</p>
      </header>
    </div>
  );
}

export default App;
