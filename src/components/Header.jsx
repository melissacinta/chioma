import { Link, useLocation } from 'react-router-dom';
import bg from '@assets/images/bg5.png';
import PropTypes from 'prop-types';
import { classNames } from '@utils/functions';

const Header = ({ bgImage, children }) => {
  const location = useLocation();
  return (
    <header
      className="flex w-full bg-no-repeat bg-cover bg-center bg-fixed text-white"
      style={{ backgroundImage: `url(${bgImage || bg})` }}
    >
      <div className="h-full w-full  min-h-[80dvh] bg-gradient-to-t from-black/80 to-slate-500/30 px-12 lg:px-24">
        <div className="flex items-center justify-between py-6">
          <div className="font-bold text-2xl">
            <Link to={'/'}>ACSP</Link>
          </div>
          <nav>
            <ul className="hidden sm:flex gap-2 items-center">
              <li
                className={classNames(
                  location.pathname.includes('about') ? 'bg-primary' : '',
                  'navlink'
                )}
              >
                <Link to="/about">About Me</Link>
              </li>
              <li
                className={classNames(
                  location.pathname.includes('project') ? 'bg-primary' : '',
                  'navlink'
                )}
              >
                <Link to="/projects">My Projects</Link>
              </li>
              {/* <li
                className={classNames(
                  location.pathname.includes('blog') ? 'bg-primary' : '',
                  'navlink'
                )}
              >
                <Link to="/blog">My Blog</Link>
              </li> */}
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
