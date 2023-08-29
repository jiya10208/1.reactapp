import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

function App() {
  return (
    <div className="card">
      <div className="avatar data ">
        <Header />
      </div>
      <div className="data">
        <Main />
      </div>
      <div className=" data skill-list ">
        <Footer />
      </div>
    </div>
  );
}

function Header() {
  return <img src="jiya.png" />;
}

function Main() {
  return (
    <div>
      <h1>Jiya</h1>
      <p>
        Full-stack web developer and writer of two books. While I am not coding
        i love to jott down things and they turn out to be poetry. I like
        machine learning as well and currently I am doing internship in the
        same.{" "}
      </p>
    </div>
  );
}
function Skills(props) {
  return (
    <span className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.text}</span>
      <span>{props.emoji}</span>
    </span>
  );
}
function Footer() {
  return (
    <div className="skill-list">
      <Skills text="HTML+CSS" emoji="😊 " color="teal" />
      <Skills text="Javascript" emoji="❤️" color="azure" />
      <Skills text="Web Design" emoji="👌" color="lavendar" />
      <Skills text="machinelearning" emoji="😁" color="yellow" />
      <Skills text="content writting" emoji="😍" color="pink" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React.render(<App />);
