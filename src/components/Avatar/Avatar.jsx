import React from "react";
import "./Avatar.css";

const Avatar = () => {
  return (
    <div className="singleComponent">
      <h3 className="headers">Avatar</h3>
      <p>- Avatars and its layout can be used for profile pictures.</p>
      <p>
        - Users can chhoose from 3 sizes- Small, Medium and Large using
        classnames as {""}
        <span className="highlighter">imgSm</span> ,
        <span className="highlighter">imgMd</span> , and{" "}
        <span style={{ marginLeft: "1.1rem" }} className="highlighter">
          imgLg
        </span>{" "}
        respectively
      </p>
      <div className="images-avatar">
        <img
          className="imgSm"
          src="https://crictoday.com/wp-content/uploads/2023/03/i.jpg"
          alt=""
        />

        <img
          className="imgMd"
          src="https://images.indianexpress.com/2023/05/ms-dhoni.jpg"
          alt=""
        />

        <img
          className="imgLg"
          src="https://img.jagranjosh.com/imported/images/E/GK/dhoni-records-odi.png"
          alt=""
        />
      </div>
      <iframe
        title="avatars"
        className="iframes"
        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=javascript&width=680&ds=true&dsyoff=26px&dsblur=68px&wc=true&wa=true&pv=32px&ph=100px&ln=false&fl=1&fm=Hack&fs=15.5px&lh=156%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522images%2522%253E%250A%2520%2520%253Cimg%2520className%253D%2522imgSm%2522%2520src%253D%2522msd1%2522%2520alt%253D%2522%2522%2520%252F%253E%250A%2520%2520%253Cimg%2520className%253D%2522imgMd%2522%2520src%253D%2522msd2%2522%2520alt%253D%2522%2522%2520%252F%253E%250A%2520%2520%253Cimg%2520className%253D%2522imgLg%2522%2520src%253D%2522msd3%2522%2520alt%253D%2522%2522%2520%252F%253E%250A%253C%252Fdiv%253E"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
};

export default Avatar;
