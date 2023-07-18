import { useState, useEffect } from 'react';
import styles from './Filter.module.css'
import { CustomCheckBox } from './CustomCheckbox';

export const Filtration = ({ items, setFilteredItems }) => {
    const [fromPrice, setFromPrice] = useState();
    const [toPrice, setToPrice] = useState();
    const [sortOrder, setSortOrder] = useState();
    const [discountedOnly, setDiscountedOnly] = useState(false)
    const [isChecked, setIsChecked] = useState(false)

    useEffect(() => {

        const filteredItems = isChecked ? (items.filter(item => item.discont_price !== null)): (
            items.filter((item) => {
            return (
                (!fromPrice || item.price > Number(fromPrice)) &&
                (!toPrice || item.price < Number(toPrice)) /*&&
                (!fromPrice || item.discont_price > Number(fromPrice)) &&
                (!toPrice || item.discont_price < Number(toPrice))*/
            )
        })
        )
 
        const sortedItems = filteredItems.sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.price - b.price
            } else if (sortOrder === 'desc') {
                return b.price - a.price
            }
            return 0
        })

        setFilteredItems(sortedItems)
    }, [items, fromPrice, toPrice, sortOrder, isChecked])


    return (
        <div className={styles.filterMainContainer}>
            <div className={styles.priceContainer}>
                <label className={styles.label}>Price
                    <input className={styles.input} type="number" value={fromPrice} onChange={(e) => setFromPrice(e.target.value)} placeholder="from" />
                    <input className={styles.input} type="number" value={toPrice} onChange={(e) => setToPrice(e.target.value)} placeholder="to" />
                </label>
            </div>
            <div className={styles.discountContainer}>
                <label className={styles.label} for="check">
                    Discounted items
                    <input
                        id="check"
                        type="checkbox"
                        checked={discountedOnly}
                        onChange={(e) => {
                            setDiscountedOnly(e.target.checked);
                            setIsChecked(!isChecked)
                        }}
                    />
                    <CustomCheckBox isChecked={isChecked} />
                </label>
            </div>
            <div>
                <label className={styles.label}>
                    Sorted:
                    <select className={styles.input} value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} placeholder="by price">
                        <option value="default">By default</option>
                        <option value="asc">By ascending</option>
                        <option value="desc">By descending</option>
                    </select>
                </label>
            </div>
        </div>
    )

}