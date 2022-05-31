import PropTypes from "prop-types";
import "./Dog.css";

const Dog = (props) => {
  return (
    <li>
      <h2>{props.name}</h2>
      {props.chip ? (
        <span>Chip #: {props.chip}</span>
      ) : (
        <button>add chip</button>
      )}
    </li>
  );
};

Dog.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  breed: PropTypes.string.isRequired,
  chip: PropTypes.string.isRequired,
};

export default Dog;