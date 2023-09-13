import React from "react";
import "./Text.css";

const Text = () => {
  return (
    <div className="singleComponent">
      <h3 className="headers">Texts</h3>
      <p>Text are used to render text and paragraphs within an interface.</p>
      <div className="texts">
        <p className="text-6xl">(6xl) In love with React</p>
        <p className="text-5xl">(5xl) In love with React</p>
        <p className="text-4xl">(4xl) In love with React</p>
        <p className="text-3xl">(3xl) In love with React</p>
        <p className="text-2xl">(2xl) In love with React</p>
        <p className="text-xl">(xl) In love with React</p>
        <p className="text-lg">(lg) In love with React</p>
        <p className="text-md">(md) In love with React</p>
        <p className="text-sm">(sm) In love with React</p>
      </div>
      <iframe
        title="card1"
        style={{ width: "60vw", height: "60vh", marginTop: "1rem" }}
        className="iframes"
        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=javascript&width=680&ds=true&dsyoff=26px&dsblur=68px&wc=true&wa=true&pv=32px&ph=100px&ln=false&fl=1&fm=Hack&fs=15.5px&lh=156%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522texts%2522%253E%250A%2520%2520%253Cp%2520className%253D%2522text-6xl%2522%253E%286xl%29%2520In%2520love%2520with%2520React%2520and%2520Next%253C%252Fp%253E%250A%2520%2520%253Cp%2520className%253D%2522text-5xl%2522%253E%285xl%29%2520In%2520love%2520with%2520React%2520and%2520Next%253C%252Fp%253E%250A%2520%2520%253Cp%2520className%253D%2522text-4xl%2522%253E%284xl%29%2520In%2520love%2520with%2520React%2520and%2520Next%253C%252Fp%253E%250A%2520%2520%253Cp%2520className%253D%2522text-3xl%2522%253E%283xl%29%2520In%2520love%2520with%2520React%2520and%2520Next%253C%252Fp%253E%250A%2520%2520%253Cp%2520className%253D%2522text-2xl%2522%253E%282xl%29%2520In%2520love%2520with%2520React%2520and%2520Next%253C%252Fp%253E%250A%2520%2520%253Cp%2520className%253D%2522text-xl%2522%253E%28xl%29%2520In%2520love%2520with%2520React%2520and%2520Next%253C%252Fp%253E%250A%2520%2520%253Cp%2520className%253D%2522text-lg%2522%253E%28lg%29%2520In%2520love%2520with%2520React%2520and%2520Next%253C%252Fp%253E%250A%2520%2520%253Cp%2520className%253D%2522text-md%2522%253E%28md%29%2520In%2520love%2520with%2520React%2520and%2520Next%253C%252Fp%253E%250A%2520%2520%253Cp%2520className%253D%2522text-sm%2522%253E%28sm%29%2520In%2520love%2520with%2520React%2520and%2520Next%253C%252Fp%253E%250A%253C%252Fdiv%253E%250A"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
};

export default Text;
