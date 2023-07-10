import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useGetOneProductByCategoryQuery } from '../../redux/apiSlice';
import { addItemToBasket } from '../../redux/basketSlice'
import { CenteringContainer } from '../../components/CenteringContainer';
import styles from './ProductPage.module.css';

export const ProductPage = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetOneProductByCategoryQuery(id);
    const dispatch = useDispatch();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const gettedData = data[0];

    const addItemToBasketHandler = (item) => dispatch(addItemToBasket(item));

    return (
        <CenteringContainer>
            <h1>{gettedData.title}</h1>
            <div className={styles.productWrapper}>
                <div className={styles.imageWrapper}>
                    <img src={`http://localhost:3333/${gettedData.image}`} />
                </div>
                <div>
                    {
                        (gettedData.discont_price !== null) ? 
                            (<>
                                <div className={styles.price}>{gettedData.discont_price}<span className={styles.dollarSign}>$</span></div>
                                <div className={styles.discountPrice}>{gettedData.price} <span>$</span> </div>
                                <div className={styles.discount}>{Math.ceil(gettedData.discont_price * gettedData.price / 100)}%</div>
                            </>)
                            :
                            (<>
                                <div className={styles.price}>{gettedData.price}<span className={styles.dollarSign}>$</span></div>
                            </>)
                    }
                    <button
                        onClick={()=>addItemToBasketHandler(gettedData)}
                        className={styles.addButton}>To card</button>
                </div>
            </div>
        </CenteringContainer>
    );
};