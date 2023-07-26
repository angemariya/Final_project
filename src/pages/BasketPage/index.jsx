import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ItemInBasket } from '../../components/ItemInBasket';
import {
    addQuantityToItem,
    deleteQuantityToItem,
    deleteItem
} from '../../redux/basketSlice';
import { Arrowright } from './Arrowright';
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

    return (
        <main className={styles.basketPage}>

            <div className={styles.basketItemsWrapper}>
                <button className={styles.backButton} onClick={()=>navigate(-1)}><span>Back to the store </span><Arrowright /></button>
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

            <div className={styles.orderDetails}>
                <p className={styles.header}>Order details</p>
                <div className={styles.priceWrapper}>
                    <p className={styles.total}>Total items:</p>
                    <p className={styles.price}>
                        {totalItems}
                    </p>
                    <p className={styles.total}>Total discount:</p>
                    <p className={styles.price}>
                        {Math.floor(totalDiscount)}
                        <span className={styles.dollarSign}>$</span>
                    </p>
                    <p className={styles.total}>Total: </p>
                    <p className={styles.price}>
                        {totalPrice}
                        <span className={styles.dollarSign}>$</span>
                    </p>
                </div>
                <input className={styles.inputPhone} placeholder='Phone number' type="text" />
                <button className={styles.orderButton}>Order</button>
            </div>
        </main>
    )
}