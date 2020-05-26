import React from 'react';
import { links, user } from '../../constants';
import Logo from '../../assets/react.png';

import { UserInfo } from '../user-info/UserInfoFromLecture';

import './Header.scss';

export const Header = (props) => {
  console.log(links);
  return (
    <div className="may-header navbar">
      <img src={Logo} className="may-header-logo" />
      <div className="may-header-links-wrapper">
         {/*todo: переписать рендеринг этих ссылок используя links.map метод */}
          {
              links.map((item, index) => {
                  return <a className='may-header-links-wrapper-link' key={item.url} href={item.url}>{item.name}</a>
              })
          }
      </div>
         <UserInfo user={user} />
    </div>
  )
};

