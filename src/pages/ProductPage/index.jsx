import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useGetOneProductByCategoryQuery } from '../../redux/apiSlice';
import { addItemToBasket } from '../../redux/basketSlice'
import { CenteringContainer } from '../../components/CenteringContainer';
import styles from './ProductPage.module.css';

export const ProductPage = () => {
    const { id } = useParams();
    const { data, isLoading, error } = useGetOneProductByCategoryQuery(id);
    const dispatch = useDispatch();

    const responseData = data && data[0];

    return (
        <CenteringContainer>
            {isLoading ?
                (<h2>Loading...</h2>) :
                error ? (<h2>Error</h2>) :
                    (<>
                        <h1 className={styles.header}>{responseData && responseData.title}</h1>
                        <div className={styles.productWrapper}>
                            <div className={styles.imageWrapper}>
                                <img src={`http://localhost:3333/${responseData.image}`} />
                            </div>
                            <div className={styles.contentContainer}>
                                {(responseData.discont_price !== null) ?
                                    (<div className={styles.priceWithDiscount}>
                                        <div className={styles.price}>{responseData.discont_price}<span className={styles.dollarSign}>$</span></div>
                                        <div className={styles.discountPrice}>{responseData.price} <span>$</span> </div>
                                        <div className={styles.discount}>{Math.floor(100 - (responseData.discont_price / responseData.price / 0.01))}%</div>
                                    </div>)
                                    :
                                    (<div className={styles.price}>
                                        {responseData.price}
                                        <span className={styles.dollarSign}>$</span>
                                    </div>)
                                }
                                <button
                                    onClick={() => dispatch(addItemToBasket(responseData))}
                                    className={styles.addButton}>
                                    To card
                                </button>
                                <p className={styles.descriptionTitle}>Description</p>
                                <p className={styles.description}>{responseData.description}</p>
                            </div>
                        </div>
                    </>)}
        </CenteringContainer>
    );
};