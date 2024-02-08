import PropTypes from 'prop-types';

const ServicesItemSmall = ({ title, index, desc }) => {
  return (
    <div className="bg-primary/10 rounded-lg p-8 w-full max-w-md flex-col md:flex-row flex gap-2 items-center">
      <h2 className="text-5xl font-bold text-primary/40">{index}</h2>
      <div className="flex-1">
        <h3 className="text-xl font-medium">{title}</h3>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default ServicesItemSmall;
ServicesItemSmall.propTypes = {
  title: PropTypes.string,
  index: PropTypes.string,
  desc: PropTypes.string,
};
