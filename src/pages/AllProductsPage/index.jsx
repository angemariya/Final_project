import { NavLink } from 'react-router-dom';
import { CenteringContainer } from '../../components/CenteringContainer';
import { useGetAllProductsQuery } from '../../redux/apiSlice';
import styles from './AllProductsPage.module.css';

export const AllProductsPage = () => {

    const { data, isLoading, error } = useGetAllProductsQuery();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <CenteringContainer>
            <>
                <h1>All Products</h1>
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
                    {data && data.map(el =>
                        <NavLink to={`/products/${el.id}`} key={el.id}>
                            <div>
                                <img src={`http://127.0.0.1:3333${el.image}`} />
                                <p>{el.price} $</p>
                                <p>{el.discont_price}</p>
                                <p>{el.title} $</p>
                            </div>
                        </NavLink>
                    )}
                </div>
            </>
        </CenteringContainer>
    )
}