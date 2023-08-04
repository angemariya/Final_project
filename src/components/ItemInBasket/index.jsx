import styles from './ItemInBasket.module.css';
import { CloseIcon } from './CloseIcon';

export const ItemInBasket = ({
    title,
    price,
    image,
    discont_price,
    quantity,
    addQuantityToItemHandler,
    decreaseItemCountHandler,
    deleteItemHandler
}) => {

    return (
        <div className={styles.itemWrapper}>
            <div className={styles.imageWrapper}>
                <img src={`https://gardenshop.onrender.com//${image}`} alt={title} />
            </div>
            <p className={styles.title}>{title}</p>
            <div className={styles.counter}>
                <button onClick={decreaseItemCountHandler} className={styles.counterButton}>-</button>
                <p className={styles.quantity}>{quantity}</p>
                <button onClick={addQuantityToItemHandler} className={styles.counterButton}>+</button>

            </div>
            <>
                {discont_price !== price
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
            <button onClick={deleteItemHandler} className={styles.closeButton}><CloseIcon /></button>
        </div>
    )
}