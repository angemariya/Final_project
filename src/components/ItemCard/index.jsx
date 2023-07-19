import { useState } from 'react';
import styles from './ItemCard.module.css';

export const ItemCard = ({ id, image, price, discont_price, title, addToCard }) => {

    const [hovered, setHovered] = useState(false);
    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    return (
        <div
            className={styles.itemContainer}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img src={`http://127.0.0.1:3333${image}`} />
            <div>
                {(discont_price) ?
                    (<>
                        <p className={styles.mainPrice}>{discont_price} $</p>
                        <p className={styles.priceWithDiscount}>{price} %</p>
                        <p className={styles.discount}>{Math.floor(100 - (discont_price / price / 0.01))} %</p>
                    </>) :
                    (<p className={styles.mainPrice}>{price} $</p>)
                }
            </div>
            <p className={styles.title}>{title}</p>
            {hovered && (
                <button className={styles.addToCardButton} onClick={addToCard}>
                    Add to card
                </button>
            )}
        </div>
    )
}
