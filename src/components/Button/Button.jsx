import React from "react";
import "./Button.css";
import { AiFillDelete, AiFillEdit, AiOutlineSearch } from "react-icons/ai";
import { MdOutlineAddCircle } from "react-icons/md";
const Button = () => {
  return (
    <div className="singleComponent">
      <h3 className="headers">Button</h3>
      <p>- Button components provide various styles for different actions. </p>
      <p>
        - Users can use button classes like{" "}
        <span className="highlighter">primaryBtn</span> ,{" "}
        <span className="highlighter">outlineBtn</span> ,{" "}
        <span className="highlighter">ghostBtn</span> and {""}
        <span className="highlighter">linkBtn</span> .
      </p>
      <div className="buttonPage">
        <button className="primaryBtn">Primary button</button>
        <button className="outlineBtn">Outline Button</button>
        <button className="ghostBtn">Ghost button</button>
        <button className="linkBtn">Link button</button>
      </div>
      <iframe
        title="buttons1"
        className="iframes"
        style={{ width: "60vw" }}
        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=javascript&width=680&ds=true&dsyoff=26px&dsblur=68px&wc=true&wa=true&pv=32px&ph=100px&ln=false&fl=1&fm=Hack&fs=15.5px&lh=156%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522buttons%2522%253E%250A%2520%2520%253Cbutton%2520className%253D%2522primaryBtn%2522%253EPrimary%2520button%253C%252Fbutton%253E%250A%2520%2520%253Cbutton%2520className%253D%2522outlineBtn%2522%253EOutline%2520Button%253C%252Fbutton%253E%250A%2520%2520%253Cbutton%2520className%253D%2522ghostBtn%2522%253EGhost%2520button%253C%252Fbutton%253E%250A%2520%2520%253Cbutton%2520className%253D%2522linkBtn%2522%253ELink%2520button%253C%252Fbutton%253E%250A%253C%252Fdiv%253E%250A"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>

      <h3 className="subHeading">Icon components</h3>
      <p>- Icon Components combine icons with text for actions.</p>
      <p>
        - Users can use icon button using{" "}
        <span className="highlighter">btnIconSearch</span> class .
      </p>
      <div className="buttonPage thinButtonPage">
        <button className="btnIconSearch">
          <AiOutlineSearch size={16} /> Search
        </button>
        <button className="btnIconSearch">
          <AiFillEdit size={16} /> Edit
        </button>{" "}
        <button className="btnIconSearch">
          <AiFillDelete size={16} /> Delete
        </button>{" "}
      </div>
      <iframe
        title="buttons2"
        className="iframes"
        style={{ width: "60vw", height: "60vh" }}
        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=javascript&width=680&ds=true&dsyoff=26px&dsblur=68px&wc=true&wa=true&pv=32px&ph=100px&ln=false&fl=1&fm=Hack&fs=15.5px&lh=156%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522images%2522%253E%250A%2520%2520%253Cbutton%2520className%253D%2522btnIconSearch%2522%253E%250A%2520%2520%2520%2520%253CAiOutlineSearch%2520size%253D%257B16%257D%2520%252F%253E%2520Search%250A%2520%2520%253C%252Fbutton%253E%250A%2520%2520%253Cbutton%2520className%253D%2522btnIconSearch%2522%253E%250A%2520%2520%2520%2520%253CAiFillEdit%2520size%253D%257B16%257D%2520%252F%253E%2520Edit%250A%2520%2520%253C%252Fbutton%253E%257B%27%2520%27%257D%250A%2520%2520%253Cbutton%2520className%253D%2522btnIconSearch%2522%253E%250A%2520%2520%2520%2520%253CAiFillDelete%2520size%253D%257B16%257D%2520%252F%253E%2520Delete%250A%2520%2520%253C%252Fbutton%253E%257B%27%2520%27%257D%250A%253C%252Fdiv%253E%250A"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>

      <h3 style={{ margin: "1rem 0", textDecoration: "underline" }}>
        Floating action button components
      </h3>
      <p>
        Floating action button components provide quick actions for user
        interactions.
      </p>
      <div className="buttonPage thinButtonPage">
        <button className="btnIconSearch">
          <MdOutlineAddCircle size={40} color="#a3afba" />
        </button>
        <button className="btnIconSearch">
          <AiFillEdit size={36} color="#a3afba" className="" />
        </button>
      </div>
    </div>
  );
};

export default Button;
