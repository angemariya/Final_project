import { useForm, Controller } from "react-hook-form";
import styles from "./CouponForm.module.css"
import gnome from "../../images/gnome.png"
import { useSendDataMutation } from "../../redux/apiSlice";

export const CouponForm = () => {
    const { handleSubmit, control, setValue } = useForm();

    const [sendData, { isLoading, isSuccess, isError }] = useSendDataMutation();
    
    const isPhoneValid = (phone) => {
        return phone.startsWith('+49') || phone === '+4' || phone === '+' || phone === ''
    }

    const handlePhoneChange = (e) => {
        const phoneValue = e.target.value;
        setValue('phone', (isPhoneValid(phoneValue)  ? phoneValue : `+49${phoneValue}`).replace(/[^0-9\+]/, ""));
    };

    const disabled = isLoading || isSuccess;

    isSuccess && console.log("Success");
    isError && console.error('Error occurred while submitting form data');

    return (
        <div className={styles.wrapper}>
            <section className={styles.centeringSection}>
                <img className={styles.imageWrapper} src={gnome} alt="gnome" />
                <div className={styles.formWrapper}>
                    <div className={styles.textWrapper}>
                        <span className={styles.bigtextWrapper}>5% off </span><br/>on the first order</div>
                    <form onSubmit={handleSubmit(sendData)}>
                        <Controller
                            name="phone"
                            control={control}
                            defaultValue="+49"
                            render={({ field, fieldState: { error } }) => (
                                <div className={styles.inputWrapper}>
                                    <input
                                        disabled={disabled}
                                        {...field}
                                        className={styles.input}
                                        type="tel"
                                        onChange={handlePhoneChange}
                                        maxLength={14}
                                        minLength={14}
                                    />
                                    {error && <span>Phone number is required.</span>}
                                </div>
                            )}
                        />
                        <button
                            disabled={disabled}
                            className={styles.formButton}
                            type="submit">Get a discount</button>
                    </form>
                </div>
            </section>
        </div>
    );
};
