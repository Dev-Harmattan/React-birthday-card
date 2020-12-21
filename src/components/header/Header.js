import React from 'react';
import './header.css';

export function Header(props) {
  return (
    <div className="headerWrapper">
      <p className="header">{props.counter} birthdays today</p>
    </div>
  )
}
