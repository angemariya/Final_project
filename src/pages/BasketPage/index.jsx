import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ItemInBasket } from '../../components/ItemInBasket';
import { useSendDataMutation } from "../../redux/apiSlice";
import {
    addQuantityToItem,
    deleteQuantityToItem,
    deleteItem,
    clearBasket
} from '../../redux/basketSlice';
import { Arrowright } from './Arrowright';
import { ToastContainer, toast } from 'react-toastify';
import styles from './BasketPage.module.css';

export const BasketPage = () => {

    const totalDiscount = useSelector((state) => state.basket.totalDiscount);
    const totalItems = useSelector((state) => state.basket.totalItems);
    const totalPrice = useSelector((state) => state.basket.totalPrice);
    const returnedValue = useSelector((state) => state.basket.products);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const deleteItemHandler = (item) => {
        dispatch(deleteItem(item));
    };

    const addQuantityToItemHandler = (item) => {
        dispatch(addQuantityToItem(item));
    };

    const decreaseItemCountHandler = (item) => {
        dispatch(deleteQuantityToItem(item));
    };

    const clearBasketHandler = () => {
        dispatch(clearBasket())
    }

    const [sendData, { isLoading, isError }] = useSendDataMutation();
    const [phoneNum, setPhone] = useState();
    const [showMessage, setShowMessage] = useState("")

    const isValid = (number) => {
        const pattern = /^(\+49)(\d{3,4}) ?(\d{3,4})(\d{4})$/;
        return pattern.test(number);
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();

        if (!isValid(phoneNum)) {
            setShowMessage("Please enter a correct phone number. Your number must starts with '+49' and contains 14 numbers");
            return;
        }
        if (!phoneNum) {
            setShowMessage("Please enter your phone number before submit")
            return;
        }

        toast("Thank you for your order", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })

        sendData(phoneNum);
        clearBasketHandler();
    }

    

    return (
        <main className={styles.basketPage}>
            <div className={styles.basketItemsWrapper}>
                <button className={styles.backButton} onClick={() => navigate(-1)}><span>Back to the store </span><Arrowright /></button>
                {returnedValue.map(item => (
                    <ItemInBasket
                        key={item.id}
                        {...item}
                        addQuantityToItemHandler={() => addQuantityToItemHandler(item)}
                        deleteItemHandler={() => deleteItemHandler(item)}
                        decreaseItemCountHandler={() => decreaseItemCountHandler(item)}
                    />
                ))}
            </div>

            <div>
                {isLoading ? <h2>Loading...</h2>
                    : isError ? <h2>Something is going wrong. Please try later</h2>
                            :
                            <form className={styles.orderDetails} onSubmit={formSubmitHandler}>
                                <p className={styles.header}>Order details</p>
                                <div className={styles.priceWrapper}>
                                    <p className={styles.total}>Total items:</p>
                                    <p className={styles.price}>
                                        {totalItems}
                                    </p>
                                    <p className={styles.total}>Total discount:</p>
                                    <p className={styles.price}>
                                        {totalDiscount}
                                        <span className={styles.dollarSign}>$</span>
                                    </p>
                                    <p className={styles.total}>Total: </p>
                                    <p className={styles.price}>
                                        {totalPrice}
                                        <span className={styles.dollarSign}>$</span>
                                    </p>
                                </div>

                                <input
                                    className={styles.inputPhone}
                                    placeholder='Phone number'
                                    type="phone"
                                    onChange={(e) => setPhone(e.target.value)}
                                    maxLength={14} minLength={12}
                                    required
                            />
                            <p className={styles.message}>Please enter a valid phone number in format +49XXXXXXXXX</p>
                            {<p className={styles.messageError}>{showMessage}</p>}
                                <button
                                    className={styles.orderButton}
                                    type="submit">Order</button>
                        </form>
                }
                <ToastContainer />
            </div>
        </main>
    )
}
