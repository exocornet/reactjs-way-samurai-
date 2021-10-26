import React from 'react';
import prof from './Profile.module.css';

const Profile = () => {
  return (
    <div>
      <img src="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270" alt=""/>

      Main content

      ava + discription

      my posts

      new post
      <div className={prof.posts}>
        <div className={prof.item}>
          post 1
        </div>
        <div className={prof.item}>
          post 2
        </div>
      </div>
    </div>
  );
}

export default Profile;
