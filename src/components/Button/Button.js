const Button = ({ handleClick, color, children}) => {

    //const { handleClick, color, children} = props
    return (
        <button onClick={handleClick} style={{ color: color}}>
            {children}
        </button>
    )
}

export default Button