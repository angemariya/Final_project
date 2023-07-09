import { NavLink } from 'react-router-dom';
import { CenteringContainer } from '../../components/CenteringContainer';
import { useGetAllSaleQuery } from '../../redux/apiSlice';
import styles from './SalePage.module.css';

export const SalePage = () => {
    const { data, error, isLoading } = useGetAllSaleQuery();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const filteredData = (data && data.filter(el => el.discont_price !== null))

    return (
        <CenteringContainer>
            <>
                <h1>Products with sale</h1>
                <div>
                    <div>
                        <span>Price</span>
                        <input type="number" name="from" placeholder="from" />
                        <input type="number" name="to" placeholder="to" />
                    </div>
                    <div>
                        <span>Discounted items</span>
                        <input type="checkbox" />
                    </div>
                    <div>
                        <span>Sorted</span>
                        <select name="" id="">
                            <option></option>
                        </select>
                    </div>
                </div>
                <div className={styles.itemsWrapper}>
                    {filteredData.map(el =>
                        <NavLink to={`/products/${el.id}`}>
                            <div key={el.id}>
                                <img src={`http://127.0.0.1:3333${el.image}`} />
                                <p>{el.price} $</p>
                                <p>{el.title}</p>
                            </div>
                        </NavLink>
                    )}
                </div>
            </>
        </CenteringContainer>
    )
}