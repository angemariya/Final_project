import { useSelector } from 'react-redux'
import styles from './BusketPage.module.css'
import { ItemInBusket } from '../../components/ItemInBusket';

export const BusketPage = () => {
    const returnedValue = useSelector((state) => state.basket.products)
    console.log(returnedValue);

    return (
        <main className={styles.basketPage}>
            <div className={styles.basketItemsWrapper}>
                {returnedValue.map(item => (
                    <ItemInBusket {...item} />
                ))}
            </div>

            <div className={styles.orderDetails}>
                <p className={styles.header}>Order details</p>
                <div className={styles.priceWrapper}>
                    <p className={styles.total}>Total</p>
                    <p className={styles.price}>
                        3077,00{/*тут будет цена*/}
                        <span className={styles.dollarSign}>$</span>
                    </p>
                </div>
                <input className={styles.inputPhone} placeholder='Phone number' type="text" />
                <button className={styles.orderButton}>Order</button>
            </div>
        </main>
    )
}