import React from "react";
import "./Alert.css";

const Alert = () => {
  return (
    <div className="singleComponent">
      <h3 className="headers">Alert</h3>
      <p>- Alert is used to notify users or give feedback.</p>
      <p>
        - Users can use 3 types of alerts -{" "}
        <span className="highlighter">Success</span> ,{" "}
        <span className="highlighter">Warning</span> , or{" "}
        <span className="highlighter">Failure</span>.
      </p>
      <div className="alerts">
        <p className="success">This is a success alert</p>
        <p className="warning">This is a warning alert </p>
        <p className="error">This is an error alert</p>
      </div>
      <iframe
        title="avatars"
        className="iframes"
        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=26px&dsblur=68px&wc=true&wa=true&pv=34px&ph=100px&ln=false&fl=1&fm=Hack&fs=13px&lh=155%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522alerts%2522%253E%250A%2520%2520%253Cp%2520className%253D%2522success%2522%253EThis%2520is%2520a%2520success%2520alert%253C%252Fp%253E%250A%2520%2520%253Cp%2520className%253D%2522warning%2522%253EThis%2520is%2520a%2520warning%2520alert%2520%253C%252Fp%253E%250A%2520%2520%253Cp%2520className%253D%2522error%2522%253EThis%2520is%2520an%2520error%2520alert%253C%252Fp%253E%250A%253C%252Fdiv%253E%250A"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
};

export default Alert;
