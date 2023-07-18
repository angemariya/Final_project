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
    
    (isLoading) && (<div>Loading...</div>);
    (error) && (<div>Error: {error.message}</div>);
    
    const responseData = data && data[0];
    
    const addItemToBasketHandler = (item) => dispatch(addItemToBasket(item));

    return (
        <CenteringContainer>
            {isLoading ? 
                (<div>Loading...</div>) :
                
                (<>
                    <h1>{responseData && responseData.title}</h1>
            <div className={styles.productWrapper}>
                <div className={styles.imageWrapper}>
                    <img src={`http://localhost:3333/${responseData.image}`} />
                </div>
                <div>
                    {
                        (responseData.discont_price !== null) ? 
                            (<>
                                <div className={styles.price}>{responseData.discont_price}<span className={styles.dollarSign}>$</span></div>
                                <div className={styles.discountPrice}>{responseData.price} <span>$</span> </div>
                                <div className={styles.discount}>{Math.floor(100 - (responseData.discont_price / responseData.price / 0.01))}%</div>
                            </>)
                            :
                            (<>
                                <div className={styles.price}>{responseData.price}<span className={styles.dollarSign}>$</span></div>
                            </>)
                    }
                    <button
                        onClick={()=>addItemToBasketHandler(responseData)}
                        className={styles.addButton}>To card</button>
                </div>
                    </div>
                </>)}
        </CenteringContainer>
    );
};