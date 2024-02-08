import { classNames } from '@utils/functions';
import PropTypes from 'prop-types';
const Headding = ({ extraClasses, text }) => {
  return (
    <div className="w-full overflow-hidden break-words">
      <h2
        className={classNames(
          'capitalize font-semibold text-xl md:text-3xl hover:scale-110 transition-all ease-linear ',
          extraClasses
        )}
      >
        {text}
      </h2>
    </div>
  );
};

export default Headding;

Headding.propTypes = {
  extraClasses: PropTypes.string,
  text: PropTypes.string,
};
