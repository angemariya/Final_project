import { useState, useEffect } from 'react';
import { CustomCheckBox } from './CustomCheckbox';
import styles from './Filter.module.css'

export const Filtration = ({onChange, hideDiscountFilter = false}) => {
    const [fromPrice, setFromPrice] = useState();
    const [toPrice, setToPrice] = useState();
    const [sortOrder, setSortOrder] = useState();
    const [discountedOnly, setDiscountedOnly] = useState(false);

    useEffect(()=>{
        onChange({
            fromPrice,
            toPrice,
            sortOrder,
            discountedOnly: hideDiscountFilter || discountedOnly,
            })
    }, [fromPrice, toPrice, sortOrder, discountedOnly, discountedOnly, hideDiscountFilter, onChange])
    
    return (
        <div className={styles.filterMainContainer}>
            <div className={styles.priceContainer}>
                <label className={styles.label}>
                    <span className={styles.price}>Price</span>
                    <input className={styles.inputFrom} type="number" value={fromPrice ?? ''} onChange={(e) => setFromPrice(e.target.value)} placeholder="from" />
                    <input className={styles.inputTo} type="number" value={toPrice ?? ''} onChange={(e) => setToPrice(e.target.value)} placeholder="to" />
                </label>
            </div>
            <div className={styles.discountContainer}>
                { !hideDiscountFilter &&  
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
                }
            </div>
            <div>
                <label className={styles.label}>
                    Sorted:
                    <select
                        className={styles.inputSelect}
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