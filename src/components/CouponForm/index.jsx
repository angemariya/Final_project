import { useState } from "react";
import { useSendDataMutation } from "../../redux/apiSlice";
import { useOutletContext } from "react-router-dom";
import styles from "./CouponForm.module.css"
import gnome from "../../images/gnome.png"

export const CouponForm = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [showError, setShowError] = useState("");
    const [sendPhoneNumber] = useSendDataMutation();
    const [openModal, setOpenModal] = useOutletContext();

    const validatePhoneNumber = (number) => {
        const phoneNumberRegex = /^(\+49)(\d{3,4}) ?(\d{3,4})(\d{4})$/;
        return phoneNumberRegex.test(number);
    };

    const handlePhoneNumberChange = (event) => {
        const newPhoneNumber = event.target.value;
        setPhoneNumber(newPhoneNumber);
        setIsValid(validatePhoneNumber(newPhoneNumber));
        console.log(newPhoneNumber);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (isValid) {
            try {
                const response = await sendPhoneNumber(phoneNumber);
                setOpenModal(true);
            } catch (error) {
                console.log(error);
            }
        } else {
            setShowError('Invalid phone number');
        }
    };


    return (
        <div className={styles.wrapper}>
            <img className={styles.imageWrapper} src={gnome} alt="gnome" />
            <div className={styles.formWrapper}>
                <div className={styles.textWrapper}>
                    <span className={styles.bigtextWrapper}>5% off </span><br />on the first order</div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        className={styles.input}
                        placeholder="+49"
                        type="tel"
                        value={phoneNumber}
                        required
                        onChange={handlePhoneNumberChange}
                    />
                    {!isValid && <p className={styles.message}>Please enter a valid phone number in format +49XXXXXXXXX</p>}
                    {showError && <p className={styles.messageError}>{showError}</p>}
                    <button
                        className={styles.formButton}
                        type="submit"
                    >Get a discount</button>
                </form>
            </div>
        </div>
    );
};
