import { CenteringContainer } from "../CenteringContainer";
import { useGetAllCategoriesQuery } from '../../redux/apiSlice';
import { NavLink } from "react-router-dom";
import styles from './Catalog.module.css';

export const Catalog = () => {
    const { data } = useGetAllCategoriesQuery();

    return (
        <CenteringContainer>
            <div className={styles.wrapper}>
                <h2 className={styles.header}>Catalog</h2>
                <div className={styles.descriptionLabel}>All categories</div>                    
            </div>

            <div className={styles.catalogItemsWrapper}>
                {data && data.map(el => 
                    <NavLink to={`/categories/${el.id}`} key={el.id}>
                        <div className={styles.catalogOneItemWrapper}>
                            <img className={styles.itemImage} src={`http://127.0.0.1:3333${el.image}`} alt={el.title} />
                            <p className={styles.catalogItemLabel}>{ el.title }</p>
                        </div>    
                    </NavLink>
                )}
            </div>
        </CenteringContainer>
    )
}