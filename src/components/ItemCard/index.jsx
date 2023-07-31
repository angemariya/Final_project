import styles from './ItemCard.module.css';

export const ItemCard = ({ id, image, price, discont_price, title, addToBasketHandler }) => {
    
    return (
        <div
            className={styles.itemContainer}
        >
            <img className={styles.cardImage} src={`http://127.0.0.1:3333${image}`} />
            <div className={styles.priceContainer}>
                {(discont_price) ?
                    (<>
                        <p className={styles.mainPrice}>{discont_price} $</p>
                        <p className={styles.priceWithDiscount}>{price} $</p>
                        <p className={styles.discount}>{Math.floor(100 - (discont_price / price / 0.01))} %</p>
                    </>) :
                    (<p className={styles.mainPrice}>{price} $</p>)
                }
            </div>
            <p className={styles.title}>{title}</p>
        
            <button className={styles.addToCardButton} onClick={addToBasketHandler}>
                Add to card
            </button>   
        </div>
    )
}
