import './CustomCheckbox.css'

export const CustomCheckBox = ({discountedOnly}) => {
    return (
        <svg
            className={`checkbox ${discountedOnly ? "checkboxActive" : ""}`}
            aria-hidden="true"
            viewBox="0 0 15 11"
            fill="none">
            <path
                d="M1 4.5L5 9L14 1"
                strokeWidth="2"
                stroke={discountedOnly ? "#fff" : "none"} 
            />
        </svg>
        
    )
}