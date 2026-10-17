const Button = (props) => {
  return(
     <button onClick={props.func}>{props.Symbol} {props.title}</button>
  )
}

export default Button;