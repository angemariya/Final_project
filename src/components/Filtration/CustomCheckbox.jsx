import './CustomCheckbox.css'

export const CustomCheckBox = ({isChecked}) => {
    return (
        <svg
            className={`checkbox ${isChecked ? "checkboxActive" : ""}`}
            aria-hidden="true"
            viewBox="0 0 15 11"
            fill="none">
            <path
                d="M1 4.5L5 9L14 1"
                strokeWidth="2"
                stroke={isChecked ? "#fff" : "none"} 
            />
        </svg>
        
    )
}