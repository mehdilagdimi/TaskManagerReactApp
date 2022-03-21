import PropTypes from "prop-types"


const Button = ({ color, btnName, onClick }) => {
    // const onClick = (e) => {
    //     console.log('button clicked');
    //     // console.log(e);
    // }
  return (
    <button onClick={onClick} style={{color: color}} className="btn">{btnName}</button>
  )
}

Button.defaultProps = {
    btnName : 'Button',
    color : "orange",
}
Button.propTypes = {
    btnName : PropTypes.string,
    color : PropTypes.string.isRequired,
    onClick : PropTypes.func,
}
export default Button