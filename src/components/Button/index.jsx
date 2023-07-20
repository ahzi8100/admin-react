/* eslint-disable react/prop-types */
const Button = (props) => {
  return (
    <button className="flex bg-mainGray py-3 w-full justify-center gap-x-2 rounded-md">
      <img src={ props.icon } alt="" />
      {props.text}
    </button>
  )
}

export default Button;