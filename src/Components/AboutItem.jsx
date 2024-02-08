import { Link } from 'react-router-dom';
import { classNames } from '../utils/functions';
import PropTypes from 'prop-types';
import { MdChevronRight } from 'react-icons/md';

const AboutItem = ({ image, text, swap = false, btnLink }) => {
  return (
    <article className="grid lg:grid-cols-2 gap-8 items-center">
      <div className={classNames(swap ? 'order-2' : '')}>
        <div className="mx-auto overflow-hidden  h-72 flex justify-center">
          <img
            src={image}
            alt="Aguluka chioma precious"
            className=" object-cover h-full"
          />
        </div>
      </div>
      <div className={classNames(swap ? 'order-1' : '')}>
        <p>{text}</p>
        {btnLink && (
          <Link
            to={btnLink}
            className="mt-2 px-2.5 py-1.5 inline-flex items-center gap-2 text-base font-semibold bg-primary hover:bg-purple-600 text-white rounded shadow hover:shadow-none"
          >
            Learn More <MdChevronRight />
          </Link>
        )}
      </div>
    </article>
  );
};

export default AboutItem;

AboutItem.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
  swap: PropTypes.bool,
  btnLink: PropTypes.string,
};
