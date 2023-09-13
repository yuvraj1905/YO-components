import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="singleComponent">
      <h3 className="headers">Card</h3>
      <p>
        A card is a flexible and extensible content container. It includes
        options for headers and footers, a wide variety of content, contextual
        background colors, and powerful display options.
      </p>
      <p className="subHeading">Card With Badge</p>
      <div className="card premiumBadge">
        <h3>Card1</h3>
        <p>This is a card with premium badge example.</p>
      </div>
      <iframe
        title="card1"
        className="iframes"
        style={{ width: "40vw" }}
        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=41px&ph=42px&ln=false&fl=1&fm=Hack&fs=14px&lh=158%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522card%2520premiumBadge%2522%253E%250A%2520%2520%253Ch3%253ECard1%253C%252Fh3%253E%250A%2520%2520%253Cp%253EThis%2520is%2520a%2520card%2520with%2520premium%2520badge%2520example.%253C%252Fp%253E%250A%253C%252Fdiv%253E%250A"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>

      <p className="subHeading">Card With Overlay</p>
      <div className="card cardWithOverlay">
        <img src="https://wallpaperset.com/w/full/b/6/7/465306.jpg" alt="" />
        <span>
          <h3>MS Dhoni</h3>
          <p>The Greatest of All Time.</p>
        </span>
      </div>
      <iframe
        title="card2"
        className="iframes"
        style={{ width: "36vw", height: "60vh" }}
        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=javascript&width=680&ds=true&dsyoff=26px&dsblur=68px&wc=true&wa=true&pv=32px&ph=100px&ln=false&fl=1&fm=Hack&fs=15.5px&lh=156%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522card%2520cardWithOverlay%2522%253E%250A%2520%2520%253Cimg%2520src%253D%2522msd.jpg%2522%2520alt%253D%2522%2522%2520%252F%253E%250A%2520%2520%253Cspan%253E%250A%2520%2520%2520%2520%253Ch3%253EMS%2520Dhoni%253C%252Fh3%253E%250A%2520%2520%2520%2520%253Cp%253EThe%2520Greatest%2520of%2520All%2520Time.%253C%252Fp%253E%250A%2520%2520%253C%252Fspan%253E%250A%253C%252Fdiv%253E%250A"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>

      <p className="subHeading">Card With Dismiss</p>
      <div className="card cardWithDismiss">
        <h3>Card3</h3>
        <p>This is a card with dismiss example.</p>
      </div>

      <iframe
        title="card3"
        className="iframes"
        style={{ width: "36vw", height: "40vh" }}
        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=javascript&width=680&ds=true&dsyoff=26px&dsblur=68px&wc=true&wa=true&pv=32px&ph=100px&ln=false&fl=1&fm=Hack&fs=15.5px&lh=156%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522card%2520cardWithDismiss%2522%253E%250A%2520%2520%253Ch3%253ECard3%253C%252Fh3%253E%250A%2520%2520%253Cp%253EThis%2520is%2520a%2520card%2520with%2520dismiss%2520example.%253C%252Fp%253E%250A%253C%252Fdiv%253E%250A"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>

      <p className="subHeading">Horizontal Card</p>
      <div className="card horizontalCard">
        <img src="https://wallpaperset.com/w/full/b/6/7/465306.jpg" alt="" />
        <span>
          <h3>MS Dhoni</h3>
          <p>The Greatest of All Time.</p>
        </span>
      </div>

      <iframe
        title="card4"
        className="iframes"
        style={{ width: "36vw", height: "55vh" }}
        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=41px&ph=100px&ln=false&fl=1&fm=Hack&fs=14px&lh=158%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522card%2520horizontalCard%2522%253E%250A%2520%2520%253Cimg%2520src%253D%2522msd.jpg%2522%2520alt%253D%2522%2522%2520%252F%253E%250A%2520%2520%253Cspan%253E%250A%2520%2520%2520%2520%253Ch3%253EMS%2520Dhoni%253C%252Fh3%253E%250A%2520%2520%2520%2520%253Cp%253EThe%2520Greatest%2520of%2520All%2520Time.%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cp%253EThis%2520is%2520a%2520horizontal%2520card%2520example%253C%252Fp%253E%250A%2520%2520%253C%252Fspan%253E%250A%253C%252Fdiv%253E%250A"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>

      <p className="subHeading"> Card with shadow</p>
      <div className="card shadowCard">
        <h3>Card5</h3>
        <p>This is a card with shadow example.</p>
      </div>
      <iframe
        title="card5"
        className="iframes"
        style={{ width: "36vw" }}
        src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=javascript&width=680&ds=true&dsyoff=26px&dsblur=68px&wc=true&wa=true&pv=32px&ph=100px&ln=false&fl=1&fm=Hack&fs=15.5px&lh=156%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522card%2520shadowCard%2522%253E%250A%2520%2520%253Ch3%253ECard5%253C%252Fh3%253E%250A%2520%2520%253Cp%253EThis%2520is%2520a%2520card%2520with%2520shadow%2520example.%253C%252Fp%253E%250A%253C%252Fdiv%253E%250A"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>

      <p className="subHeading">Text only Card</p>
      <div className="card textOnlyCard">
        <h3>Card6</h3>
        <p>This is a text only card example.</p>
      </div>
    </div>
  );
};

export default Card;
