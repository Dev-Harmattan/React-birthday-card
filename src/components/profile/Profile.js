import React from 'react';
import './profile.css';

export function Profile(props) {
  const {imageUrl} = props;
  return (
    <div className="profileWrapper">
      <img className="profile-image" src={imageUrl} alt="profile" height={50} width={50}/>
      <div className="profileDetails">
        <p className="name">{props.name}</p>
        <p className="birthday">{props.birthday}</p>
      </div>
    </div>
  )
}
