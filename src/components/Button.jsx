const Button = ({name,on_click})=>{
    return (
        <button className={`button ${name}`} onClick={on_click}>
            <span className="material-symbols-outlined">{name}</span>
            <span>Play</span>
        </button>
        
    )
}

export default Button