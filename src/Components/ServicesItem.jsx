import { MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ServicesItem = ({ title, index, desc, link }) => {
  return (
    <div className="bg-primary/10 rounded-lg p-8 w-full max-w-md">
      <div className="flex justify-end items-center">
        {/* <div>icon</div> */}
        <h2 className="text-5xl font-bold text-primary/40">{index}</h2>
      </div>
      <h3 className="text-xl font-medium">{title}</h3>
      <p className="text-sm">{desc}</p>

      {link && (
        <Link
          to={link}
          className="mt-2 px-2.5 py-1.5 inline-flex items-center gap-2 text-base font-semibold bg-primary hover:bg-purple-600 text-white rounded shadow hover:shadow-none"
        >
          Learn More <MdChevronRight />
        </Link>
      )}
    </div>
  );
};

export default ServicesItem;
ServicesItem.propTypes = {
  title: PropTypes.string,
  index: PropTypes.string,
  desc: PropTypes.string,
  link: PropTypes.string,
};
