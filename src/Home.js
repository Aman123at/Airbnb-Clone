import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire Homes"
          description="Comfortable Private places,with room for friends or family"
          price="1000 Rs."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire Homes"
          description="Comfortable Private places,with room for friends or family"
          price="1000 Rs."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire Homes"
          description="Comfortable Private places,with room for friends or family"
          price="1000 Rs."
        />
      </div>
      <div className="home__section">
        <Card
          price="1000 Rs."
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire Homes"
          description="Comfortable Private places,with room for friends or family"
        />
        <Card
          price="1000 Rs."
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire Homes"
          description="Comfortable Private places,with room for friends or family"
        />
        <Card
          price="1000 Rs."
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire Homes"
          description="Comfortable Private places,with room for friends or family"
        />
      </div>
    </div>
  );
};

export default Home;
