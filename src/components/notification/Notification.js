import React from 'react';
import s from './Notification.module.css';
function Notification({ message }) {
  return <p className={s.noFeadback}>{message}</p>;
}

export default Notification;
