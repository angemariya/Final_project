import { useDispatch, useSelector } from 'react-redux'
import styles from './BasketPage.module.css'
import { ItemInBasket } from '../../components/ItemInBasket';
import { addItemToBasket,
    countTotalItems,
    decreaseItemCount,
    deleteItem,
    countTotalPrice } from '../../redux/basketSlice'

export const BasketPage = () => {
    const totalPrice = useSelector((state) => state.basket.totalPrice);
    const returnedValue = useSelector((state) => state.basket.products);
    const dispatch = useDispatch();

    const deleteItemHandler = (item) => {
        dispatch(deleteItem(item))
        dispatch(countTotalPrice())
        dispatch(countTotalItems())
    }

    const decreaseItemCountHandler = (item) => {
        dispatch(decreaseItemCount(item));
        dispatch(countTotalItems());
        dispatch(countTotalPrice())
    }

    const addItemToBasketHandler = (item) => {
        dispatch(addItemToBasket(item))
        dispatch(countTotalPrice())
        dispatch(countTotalItems())
    }

    dispatch(countTotalPrice())

    return (
        <main className={styles.basketPage}>
            <div className={styles.basketItemsWrapper}>
                {returnedValue.map(item => (
                    <ItemInBasket
                        key={item.id}
                        {...item}
                        deleteItemHandler={() => deleteItemHandler(item)}
                        decreaseItemCountHandler={() => decreaseItemCountHandler(item)}
                        addItemToBasketHandler={()=>addItemToBasketHandler(item)}
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