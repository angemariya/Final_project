import { useSelector } from 'react-redux'
import styles from './BusketPage.module.css'
import { ItemInBusket } from '../../components/ItemInBusket';

export const BusketPage = () => {
    const returnedValue = useSelector((state) => state.basket.products)
    console.log(returnedValue);

    return (
        <div>
            {returnedValue.map(item => (
                <ItemInBusket {...item} />
            ))}
        </div>
    )
}