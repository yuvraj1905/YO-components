import React from "react";
import "./Badge.css";
import { BsFillBagFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { BiSolidMessageAlt } from "react-icons/bi";

const Badge = () => {
  return (
    <div className="singleComponent">
      <h3 className="headers">Badge</h3>
      <p>
        Badge can be used to show the status information of the user or some
        count information such as notification numbers or number of items in the
        cart.
      </p>
      <p className="subHeading">Badge on Avatars</p>
      <p>
        Users can use classes like{" "}
        <span className="highlighter">badgeOnline</span> and{" "}
        <span className="highlighter">badgeOffline</span> to show user's active
        status.
      </p>

      <div className="imagesBadgePage widerBadgeSection">
        <span className="badgeOffline">
          <img
            className="imgBadge"
            src="https://crictoday.com/wp-content/uploads/2023/03/i.jpg"
            alt=""
          />
        </span>

        <span className="badgeOnline">
          <img
            className="imgBadge"
            src="https://images.indianexpress.com/2023/05/ms-dhoni.jpg"
            alt=""
          />
        </span>

        <span className="badgeOffline">
          <img
            className="imgBadge"
            src="https://img.jagranjosh.com/imported/images/E/GK/dhoni-records-odi.png"
            alt=""
          />
        </span>
      </div>
      <iframe
        title="badge"
        style={{ width: "53vw", height: "90vh" }}
        className="iframes"
        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=41px&ph=42px&ln=false&fl=1&fm=Hack&fs=14px&lh=158%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522imagesBadgePage%2522%253E%250A%2520%2520%253Cspan%2520className%253D%2522badgeOffline%2522%253E%250A%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520className%253D%2522imgBadge%2522%250A%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fcrictoday.com%252Fwp-content%252Fuploads%252F2023%252F03%252Fi.jpg%2522%250A%2520%2520%2520%2520%2520%2520alt%253D%2522%2522%250A%2520%2520%2520%2520%252F%253E%250A%2520%2520%253C%252Fspan%253E%250A%250A%2520%2520%253Cspan%2520className%253D%2522badgeOnline%2522%253E%250A%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520className%253D%2522imgBadge%2522%250A%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fimages.indianexpress.com%252F2023%252F05%252Fms-dhoni.jpg%2522%250A%2520%2520%2520%2520%2520%2520alt%253D%2522%2522%250A%2520%2520%2520%2520%252F%253E%250A%2520%2520%253C%252Fspan%253E%250A%250A%2520%2520%253Cspan%2520className%253D%2522badgeOffline%2522%253E%250A%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520className%253D%2522imgBadge%2522%250A%2520%2520%2520%2520%2520%2520src%253D%2522https%253A%252F%252Fimg.jagranjosh.com%252Fimported%252Fimages%252FE%252FGK%252Fdhoni-records-odi.png%2522%250A%2520%2520%2520%2520%2520%2520alt%253D%2522%2522%250A%2520%2520%2520%2520%252F%253E%250A%2520%2520%253C%252Fspan%253E%250A%253C%252Fdiv%253E%250A"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
      <p className="subHeading">Badge on icons</p>
      <p>
        Users can use the badge in number style using{" "}
        <span className="highlighter">badgeNumber</span> class.
      </p>
      <div className="imagesBadgePage">
        <span className="badgeNumber">
          <p>2</p>
          <BsFillBagFill size={40} />
        </span>

        <span className="badgeNumber">
          <p>5</p>
          <AiFillHeart size={42} />
        </span>

        <span className="badgeNumber">
          <p>4</p>
          <BiSolidMessageAlt size={40} />
        </span>
      </div>
      <iframe
        title="badgeNum"
        style={{ width: "40vw" }}
        className="iframes"
        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=javascript&width=680&ds=true&dsyoff=26px&dsblur=68px&wc=true&wa=true&pv=27px&ph=100px&ln=false&fl=1&fm=Hack&fs=18px&lh=142%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522imagesBadgePage%2522%253E%250A%2520%2520%253Cspan%2520className%253D%2522badgeNumber%2522%253E%250A%2520%2520%2520%2520%253Cp%253E2%253C%252Fp%253E%250A%2520%2520%2520%2520%253CBsFillBagFill%2520size%253D%257B40%257D%2520%252F%253E%250A%2520%2520%253C%252Fspan%253E%250A%250A%2520%2520%253Cspan%2520className%253D%2522badgeNumber%2522%253E%250A%2520%2520%2520%2520%253Cp%253E5%253C%252Fp%253E%250A%2520%2520%2520%2520%253CAiFillHeart%2520size%253D%257B42%257D%2520%252F%253E%250A%2520%2520%253C%252Fspan%253E%250A%250A%2520%2520%253Cspan%2520className%253D%2522badgeNumber%2522%253E%250A%2520%2520%2520%2520%253Cp%253E4%253C%252Fp%253E%250A%2520%2520%2520%2520%253CBiSolidMessageAlt%2520size%253D%257B40%257D%2520%252F%253E%250A%2520%2520%253C%252Fspan%253E%250A%253C%252Fdiv%253E%250A"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
};

export default Badge;
