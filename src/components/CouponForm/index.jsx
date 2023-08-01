import { useForm, Controller } from "react-hook-form";
import { useSendDataMutation } from "../../redux/apiSlice";
import styles from "./CouponForm.module.css"
import gnome from "../../images/gnome.png"

export const CouponForm = () => {
    const { handleSubmit, control, setValue } = useForm();

    const [sendData, { isLoading, isSuccess, isError }] = useSendDataMutation();

    const isPhoneValid = (phone) => {
        return phone.startsWith('+49') || phone.startsWith('+4') || phone.startsWith('+')
    }

    const handlePhoneChange = (e) => {
        const phoneValue = e.target.value;
        setValue('phone', (isPhoneValid(phoneValue) ? phoneValue : `+49${phoneValue}`).replace(/[^0-9\+]/, ""));
    };

    const disabled = isLoading || isSuccess;

    return (
        <div className={styles.wrapper}>
            <img className={styles.imageWrapper} src={gnome} alt="gnome" />
            <div className={styles.formWrapper}>
                <div className={styles.textWrapper}>
                    <span className={styles.bigtextWrapper}>5% off </span><br />on the first order</div>
                <form className={styles.form} onSubmit={handleSubmit(sendData)}>
                    <Controller
                        name="phone"
                        control={control}
                        
                        render={({ field, fieldState: { error } }) => (
                            <>
                                <input
                                    disabled={disabled}
                                    placeholder="+49"
                                    {...field}
                                    className={styles.input}
                                    type='phone'
                                    onChange={handlePhoneChange}
                                    maxLength={14}
                                    minLength={14}
                                />
                                {error && <span>Phone number is required.</span>}
                            </>
                        )}
                    />
                    {isSuccess && <div className={styles.message}>Success. Your phone number was submitted.</div>}
                    {isError && <div className={styles.message}>Error occurred while submitting form data. Please try later.</div>}
                    <button
                        disabled={disabled}
                        className={styles.formButton}
                        type="submit">Get a discount</button>
                </form>
            </div>
        </div>
    );
};
