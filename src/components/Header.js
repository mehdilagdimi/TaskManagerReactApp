import PropTypes from "prop-types";
import Button from "./Button";
// const Header = (props) => {
//   return (
//     <h1>Task Manager {props.param}</h1>
//   )
// }

// const Header = ({param}) => {
//   return (
//     <header className="header">
//       <h1>Task Manager {param}</h1>
//       <button className="btn"> ADD </button>
//     </header>

//   )
// }

const Header = ({ param, showAdd }) => {
  // const onClick = (e) => {
  //   console.log(e);
  //   setShowAddTask();
  // }
  return (
    <header className="header">
      <h1>Task Manager {param}</h1>
      <Button color="orange" onClick={showAdd} btnName="APPEND" />
    </header>
  );
};

Header.defaultProps = {
  param: "default value",
};
Header.propTypes = {
  param: PropTypes.string.isRequired,
};

const inlineStyling = { color: "blue", backgroundColor: "green" };
export default Header;
