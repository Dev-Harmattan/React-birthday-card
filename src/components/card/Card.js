import React, { useState } from "react";
import { Header } from "../header/Header";
import { Profile } from "../profile/Profile";
import { Button } from "../button/Button";
import { profile } from "../../json/file.json";
import { imageOne, imageTwo, imageThree, imageFour } from "../../assests";
import "./card.css";

const profiles = profile;
const userNumber = profile.length;


export function Card() {
  const [counter, setCounter] = useState(userNumber);
  const [profile, setProfile] = useState([...profiles]);

  const imageArr = [imageOne, imageTwo, imageThree, imageFour, imageFour]


  const handleClick = () => {
    const emptyArray = profile.slice(0, 0)
    setCounter(0);
    setProfile(emptyArray);
  };

  return (
    <div className="wrapper">
      <div className="birthdayCard">
        <Header counter={counter} />
        {profile.length > 0 &&
          profile.map((profile, index) => (
            <Profile
              key={index}
              name={profile.name}
              birthday={profile.birthday}
              imageUrl={imageArr[index]}
            />
          ))}

        <Button click={handleClick} />
      </div>
    </div>
  );
}
