import { useState, useEffect } from 'react';
import { CustomCheckBox } from './CustomCheckbox';
import styles from './Filter.module.css'

export const Filtration = ({onChange}) => {
    const [fromPrice, setFromPrice] = useState();
    const [toPrice, setToPrice] = useState();
    const [sortOrder, setSortOrder] = useState();
    const [discountedOnly, setDiscountedOnly] = useState(false);

/*    useEffect(() => {

        const filteredItems = discountedOnly ?
            (items.filter(item => item.discont_price !== null).filter((item) => {
            return (
                (!fromPrice || ((item.discont_price || item.price) >= Number(fromPrice))) &&
                (!toPrice || ((item.discont_price || item.price) <= Number(toPrice))) 
            )
            })
            )
            :
            (items.filter((item) => {
            return (
                (!fromPrice || ((item.discont_price || item.price) >= Number(fromPrice))) &&
                (!toPrice || ((item.discont_price || item.price) <= Number(toPrice)))
            )
        })
        )
 
        const sortedItems = filteredItems && filteredItems.sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.price - b.price
            } else if (sortOrder === 'desc') {
                return b.price - a.price
            }
            return 0
        })

        setFilteredItems(sortedItems)
    }, [fromPrice, toPrice, sortOrder, discountedOnly])
*/

    useEffect(()=>{
        onChange({
            fromPrice, toPrice, sortOrder, discountedOnly
            })
    }, [fromPrice, toPrice, sortOrder, discountedOnly, onChange])
    
    return (
        <div className={styles.filterMainContainer}>
            <div className={styles.priceContainer}>
                <label className={styles.label}>Price
                    <input className={styles.input} type="number" value={fromPrice ?? ''} onChange={(e) => setFromPrice(e.target.value)} placeholder="from" />
                    <input className={styles.input} type="number" value={toPrice ?? ''} onChange={(e) => setToPrice(e.target.value)} placeholder="to" />
                </label>
            </div>
            <div className={styles.discountContainer}>
                <label className={styles.label} htmlFor="check">
                    Discounted items
                    <input
                        id="check"
                        type="checkbox"
                        checked={discountedOnly}
                        onChange={(e) => {
                            setDiscountedOnly(e.target.checked);
                        }}
                    />
                    <CustomCheckBox discountedOnly={discountedOnly} />
                </label>
            </div>
            <div>
                <label className={styles.label}>
                    Sorted:
                    <select
                        className={styles.input}
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        placeholder="by price">
                        <option value="default">By default</option>
                        <option value="asc">By ascending</option>
                        <option value="desc">By descending</option>
                    </select>
                </label>
            </div>
        </div>
    )
}