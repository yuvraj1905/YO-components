import React from "react";

const Installation = () => {
  return (
    <div className="singleComponent">
      <h3 className="headers">Installation Guide</h3>
      <p>
        Embed the below stylesheet link into your head element before all other
        stylesheets to load our CSS.
      </p>
      <iframe
        title="installGuide"
        className="iframes"
        style={{ width: "60vw" }}
        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=41px&ph=100px&ln=false&fl=1&fm=Hack&fs=14px&lh=158%25&si=false&es=2x&wm=false&code=%253Clink%2520rel%253D%2522stylesheet%2522%2520href%253D%2522https%253A%252F%252Fyocomponents.netlify.app%252Fsrc%252FApp.css%2522%253E"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
};

export default Installation;
