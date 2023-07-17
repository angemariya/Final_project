import styles from './ItemInBasket.module.css';
import { CloseIcon } from './CloseIcon'

export const ItemInBasket = ({
    title,
    price,
    image,
    discont_price,
    quantity,
    addItemToBasketHandler,
    deleteItemHandler,
    decreaseItemCountHandler
}) => {

    return (
        <div className={styles.itemWrapper}>
            <div className={styles.imageWrapper}>
                <img src={`http://127.0.0.1:3333/${image}`} alt={title} />
            </div>
            <p className={styles.title}>{title}</p>
            <div className={styles.counter}>
                <button onClick={decreaseItemCountHandler} className={styles.counterButton}>-</button>
                <p className={styles.quantity}>{quantity}</p>
                <button onClick={addItemToBasketHandler} className={styles.counterButton}>+</button>

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
            <button onClick={deleteItemHandler} className={styles.closeButton}><CloseIcon /></button>
        </div>
    )
}