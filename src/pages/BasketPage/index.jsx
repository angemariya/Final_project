import { useDispatch, useSelector } from 'react-redux';
import { ItemInBasket } from '../../components/ItemInBasket';
import {
    addQuantityToItem,
    deleteQuantityToItem,
    deleteItem
} from '../../redux/basketSlice';
import styles from './BasketPage.module.css';

export const BasketPage = () => {
    const totalPrice = useSelector((state) => state.basket.totalPrice);
    const returnedValue = useSelector((state) => state.basket.products);
    const dispatch = useDispatch();

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
                    <p className={styles.total}>Total</p>
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