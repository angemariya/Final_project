import { CenteringContainer } from "../CenteringContainer";
import styles from './Catalog.module.css';
import { useGetAllCategoriesQuery } from '../../redux/apiSlice'

export const Catalog = () => {
    const { data } = useGetAllCategoriesQuery();
    console.log(data);

    return (
        <>
            <CenteringContainer>
                <div className={styles.wrapper }>
                    <h2 className={styles.header}>Catalog</h2>
                    <div className={styles.descriptionLabel}>All categories</div>                    
                </div>
                <div className={styles.catalogItemsWrapper}>
                    {data && data.map(el => 
                        <div key={el.id} className={styles.catalogOneItemWrapper}>
                            <img src={el.image} alt={el.title} />
                            <p className={styles.catalogItemLabel}>{el.title}</p>
                        </div>
                    )}
                </div>
            </CenteringContainer>
        </>
    )
}