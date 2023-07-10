import styles from './ItemInBusket.module.css'

export const ItemInBusket = ({title, price, image, discont_price}) => {
    return (
        <div className={styles.itemWrapper}>
            <div className={styles.imageWrapper}>
                <img src={`http://127.0.0.1:3333/${image}`} alt={title} />
            </div>
            <div className={styles.textField}>
                <p>{title}</p>
                <input type="number"></input>
            </div>
            <div>
                <span>{price}</span>
                <span>{discont_price}</span>
            </div>
        </div>
    )
}