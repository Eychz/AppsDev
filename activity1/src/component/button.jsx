const Button = ({button_name, button_link}) => {
    return (
        <div>
        <a href={button_link}><button>{button_name}</button></a>
    </div>
    )
}

export default Button;