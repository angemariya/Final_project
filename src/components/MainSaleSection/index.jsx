import { NavLink } from 'react-router-dom';
import { useGetAllSaleQuery } from '../../redux/apiSlice';
import { CenteringContainer } from '../CenteringContainer';
import { SpinnerCircular } from 'spinners-react';
import styles from './MainSaleSection.module.css';

export const MainSaleSection = () => {

    const { data, error, isError, isLoading } = useGetAllSaleQuery();
    const filteredData = (data && data.filter(el => el.discont_price !== null).slice(0, 3))

    return (
        <CenteringContainer>
            <h2 className={styles.header}>Sale</h2>
            {isLoading ? (<SpinnerCircular enabled={true} />) :
                isError ? (<h2>{error.message}</h2>) :
                    (<div className={styles.itemsWrapper}>
                        {filteredData && filteredData.map(el =>
                            <NavLink to={`/products/${el.id}`} key={el.id} className={styles.itemContainer}>
                                <img src={`http://localhost:3333/${el.image}`} alt="sale product" />
                                <div className={styles.priceContainer}>
                                    {(el.discont_price) ?
                                        (<>
                                            <p className={styles.mainPrice}>{el.discont_price} $</p>
                                            <p className={styles.priceWithDiscount}>{el.price} %</p>
                                            <p className={styles.discount}>{Math.floor(100 - (el.discont_price / el.price / 0.01))} %</p>
                                        </>) :
                                        (<p className={styles.mainPrice}>{el.price} $</p>)
                                    }
                                </div>
                                <p className={styles.title}>{el.title}</p>
                            </NavLink>
                        )}
                    </div>)
            }
        </CenteringContainer>
    )
}