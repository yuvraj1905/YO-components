import React from "react";
import "./Heading.css";

const Headings = () => {
  return (
    <div className="singleComponent">
      <h3 className="headers">Headings</h3>
      <p>Headings are used to render semantic html heading elements.</p>
      <div className="headings">
        <h3 className="heading-4xl">In love with React and Next</h3>
        <h3 className="heading-3xl">In love with React and Next</h3>
        <h3 className="heading-2xl">In love with React and Next</h3>
        <h3 className="heading-xl">In love with React and Next</h3>
        <h3 className="heading-lg">In love with React and Next</h3>
        <h3 className="heading-md">In love with React and Next</h3>
        <h3 className="heading-sm">In love with React and Next</h3>
        <h3 className="heading-xs">In love with React and Next</h3>
      </div>
      <iframe
        title="card1"
        style={{ width: "60vw", height: "60vh", marginTop: "1rem" }}
        className="iframes"
        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=javascript&width=680&ds=true&dsyoff=26px&dsblur=68px&wc=true&wa=true&pv=32px&ph=100px&ln=false&fl=1&fm=Hack&fs=15.5px&lh=156%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522headings%2522%253E%250A%2520%2520%253Ch3%2520className%253D%2522heading-4xl%2522%253EIn%2520love%2520with%2520React%2520and%2520Next%253C%252Fh3%253E%250A%2520%2520%253Ch3%2520className%253D%2522heading-3xl%2522%253EIn%2520love%2520with%2520React%2520and%2520Next%253C%252Fh3%253E%250A%2520%2520%253Ch3%2520className%253D%2522heading-2xl%2522%253EIn%2520love%2520with%2520React%2520and%2520Next%253C%252Fh3%253E%250A%2520%2520%253Ch3%2520className%253D%2522heading-xl%2522%253EIn%2520love%2520with%2520React%2520and%2520Next%253C%252Fh3%253E%250A%2520%2520%253Ch3%2520className%253D%2522heading-lg%2522%253EIn%2520love%2520with%2520React%2520and%2520Next%253C%252Fh3%253E%250A%2520%2520%253Ch3%2520className%253D%2522heading-md%2522%253EIn%2520love%2520with%2520React%2520and%2520Next%253C%252Fh3%253E%250A%2520%2520%253Ch3%2520className%253D%2522heading-sm%2522%253EIn%2520love%2520with%2520React%2520and%2520Next%253C%252Fh3%253E%250A%2520%2520%253Ch3%2520className%253D%2522heading-xs%2522%253EIn%2520love%2520with%2520React%2520and%2520Next%253C%252Fh3%253E%250A%253C%252Fdiv%253E%250A"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
};

export default Headings;
