import React from "react";

const Installation = () => {
  return (
    <div className="singleComponent">
      <h3 className="headers">Installation Guide</h3>
      <p>
        - Install a npm package named as {""}
        <span className="highlighter">yo-components-yuvraj</span>
      </p>
      <iframe
        title="installGuide"
        className="iframes"
        style={{ minHeight: "25vh" }}
        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=41px&ph=100px&ln=false&fl=1&fm=Hack&fs=14px&lh=158%25&si=false&es=2x&wm=false&code=npm%2520install%2520yo-components-yuvraj"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>

      <p>
        - Inside <span className="highlighter">App.css</span> file (your app's
        root css file , add the below code at the top )
      </p>
      <iframe
        title="installGuide"
        className="iframes"
        style={{ width: "60vw", minHeight: "30vh" }}
        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=41px&ph=100px&ln=false&fl=1&fm=Hack&fs=14px&lh=158%25&si=false&es=2x&wm=false&code=%2540import%2520%2522..%252Fnode_modules%252Fyo-components-yuvraj%252Fsrc%252FApp.css%2522%253B"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
      <h3>
        - Now use any css classNames available here in your app components (like
        tailwind css).
      </h3>
    </div>
  );
};

export default Installation;
