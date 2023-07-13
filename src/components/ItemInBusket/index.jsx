import styles from './ItemInBusket.module.css';
import {CloseIcon} from './CloseIcon'

export const ItemInBusket = ({ title, price, image, discont_price, quantity }) => {
    return (

        <div className={styles.itemWrapper}>
            <div className={styles.imageWrapper}>
                <img src={`http://127.0.0.1:3333/${image}`} alt={title} />
            </div>
 
                <p className={styles.title}>{title}</p>
                <div className={styles.counter}>
                    <button className={styles.counterButton}>-</button>
                    <p className={styles.quantity}>1{/*quantity*/}</p>
                    <button className={styles.counterButton}>+</button>

            </div>
            <>
                {discont_price
                    ? (
                    <>
                        <span className={styles.discountPrice}>
                            {discont_price}
                            <span className={styles.dollarSign}>$</span>
                        </span>
                        <span className={styles.oldPrice}>
                            {price}$
                        </span>
                    </>)
                    : (
                        <span className={styles.discountPrice}>
                            {price}
                            <span className={styles.dollarSign}>$</span>
                        </span>

                    )
                }
            </>
            <button className={styles.closeButton}><CloseIcon /></button>
        </div>
    )
}