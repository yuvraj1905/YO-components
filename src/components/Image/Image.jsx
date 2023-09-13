import React from "react";
import "./Image.css";

const Image = () => {
  return (
    <div className="singleComponent">
      <h3 className="headers">Images</h3>
      <p>
        Images are very important to beautify as well as to depict many complex
        concepts in simple way on your web page.
      </p>
      <p className="subHeading">Responsive images</p>
      <p>
        Responsive images work well on all devices with widely differing screen
        sizes, resolutions, and other such features
      </p>
      <div className="imageCard">
        <img
          className="resImg"
          src="https://wallpaperaccess.com/thumb/3289851.jpg"
          alt=""
        />
      </div>
      <iframe
        title="card1"
        style={{ width: "60vw", marginTop: "1rem" }}
        className="iframes"
        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=javascript&width=680&ds=true&dsyoff=26px&dsblur=68px&wc=true&wa=true&pv=32px&ph=100px&ln=false&fl=1&fm=Hack&fs=15.5px&lh=156%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522imageCard%2522%253E%250A%2520%2520%253Cimg%2520className%253D%2522resImg%2522%2520src%253D%2522msd.jpg%2522%2520alt%253D%2522%2522%2520%252F%253E%250A%253C%252Fdiv%253E%250A"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>

      <p style={{ marginTop: "-2rem" }} className="subHeading">
        Rounded images (Responsive)
      </p>
      <p>
        Round or circular images are used in lot of place, such as profile
        picture. You can make image round or circular using{" "}
        <span className="highlighter">imgRound</span> class.
      </p>
      <div className="imageCard imagesSection">
        <img
          className="imgRound"
          src="https://crictoday.com/wp-content/uploads/2023/03/i.jpg"
          alt=""
        />

        <img
          className="imgRound"
          src="https://images.indianexpress.com/2023/05/ms-dhoni.jpg"
          alt=""
        />

        <img
          className="imgRound"
          src="https://img.jagranjosh.com/imported/images/E/GK/dhoni-records-odi.png"
          alt=""
        />
      </div>
      <iframe
        title="card1"
        style={{ width: "60vw", marginTop: "1rem" }}
        className="iframes"
        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=javascript&width=680&ds=true&dsyoff=26px&dsblur=68px&wc=true&wa=true&pv=32px&ph=100px&ln=false&fl=1&fm=Hack&fs=15.5px&lh=156%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522imageCard%2520imagesSection%2522%253E%250A%2520%2520%253Cimg%2520className%253D%2522imgRound%2522%2520src%253D%2522msd1%2522%2520%252F%253E%250A%2520%2520%253Cimg%2520className%253D%2522imgRound%2522%2520src%253D%2522msd2%2522%2520%252F%253E%250A%2520%2520%253Cimg%2520className%253D%2522imgRound%2522%2520src%253D%2522msd3%2522%2520%252F%253E%250A%253C%252Fdiv%253E%250A"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
};

export default Image;
