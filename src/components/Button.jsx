function Button({onClickHandler, type='button', fontColor = "white", text = "Click Me" }) {
    const colorClasses = {
        blue: "text-blue-500",
        red: "text-red-500",
        green: "text-green-500",
        white: "text-white",
        black: "text-black",
        // Add more colors if needed
    };
    return (
        <button
            className={`
                ${colorClasses[fontColor] || "text-blue-600 hover:text-blue-700"}
                btn 
                rounded-2xl 
                hover:border-2 
                hover:border-solid 
                hover:border-blue-100
                border-2 
                border-solid 
              border-black
                px-4 
                py-2 
                font-semibold 
                transition 
                duration-300 
                ease-in-out 
                shadow-sm 
                bg-black
            `}
            onClick={onClickHandler}
            type={type}
        >
            {text}
        </button>
    );
}
export default Button;
