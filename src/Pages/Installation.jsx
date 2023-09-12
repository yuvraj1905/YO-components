import React from "react";

const Installation = () => {
  return (
    <div className="componentsPage">
      <h2 style={{ marginTop: "2rem" }}>Installation Guide</h2>
      <div className="main__installPage">
        <p>
          Embed the below stylesheet link into your head element before all
          other stylesheets to load our CSS.
        </p>
        <iframe
          className="iframes"
          title="installation"
          src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Clink%2520rel%253D%2522stylesheet%2522%2520href%253D%2522https%253A%252F%252Ftriples-ui.netlify.app%252Fstyle.css%2522%253E%2520%2520%2520%2520%2520%250A"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
    </div>
  );
};

export default Installation;
