import { Link, useLocation } from 'react-router-dom';
import bg from '@assets/images/bg5.png';
import PropTypes from 'prop-types';
import { classNames } from '@utils/functions';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

const Header = ({ bgImage, children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  return (
    <header
      className="flex w-full bg-no-repeat bg-cover bg-center bg-fixed text-white"
      style={{ backgroundImage: `url(${bgImage || bg})` }}
    >
      <div className="h-full w-full  min-h-[80dvh] bg-gradient-to-t from-black/80 to-slate-500/30 px-12 lg:px-24">
        <div className="sm:flex items-center justify-between py-6">
          <div className="flex items-center justify-between font-bold text-2xl">
            <Link to={'/'}>ACSP</Link>
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="sm:hidden"
            >
              <FaBars className="h-6 w-6 text-primary-30" />
            </button>
          </div>
          <nav
            className={classNames(
              showMenu ? 'flex flex-col' : 'hidden sm:flex',
              'items-center gap-[3.06rem] bg-black/50 rounded sm:bg-transparent py-12 sm:py-0'
            )}
          >
            <ul className="flex flex-col sm:flex-row items-center gap-2">
              {paths.map((item) => (
                <li
                  key={item.name}
                  className={classNames(
                    location.pathname.includes(item.link) ? 'bg-primary' : '',
                    'navlink'
                  )}
                >
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {children}
      </div>
    </header>
  );
};

export default Header;
Header.propTypes = {
  bgImage: PropTypes.string,
  children: PropTypes.node,
};

const paths = [
  { name: 'About Me', link: '/about' },
  { name: 'My Projects', link: '/projects' },
];
