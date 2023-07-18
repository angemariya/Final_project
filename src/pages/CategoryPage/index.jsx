import { NavLink, useParams } from 'react-router-dom'
import { CenteringContainer } from '../../components/CenteringContainer'
import { useGetOneCategoryQuery } from '../../redux/apiSlice'
import styles from './CategoryPage.module.css'
import { Filtration } from '../../components/Filtration'

export const CategoryPage = () => {
    const { id } = useParams()
    const { data, error, isLoading } = useGetOneCategoryQuery(id);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <CenteringContainer>
            <h1 className={styles.header}>{data?.category?.title}</h1>
            <Filtration />
            <div className={styles.itemsWrapper}>
                {data?.data.map(el =>
                    <NavLink to={`/products/${el.id}`} key={el.id}>
                        <div>
                            <img src={`http://127.0.0.1:3333${el.image}`} />
                            <p>{el.price} $</p>
                            <p>{el.title}</p>
                        </div>
                    </NavLink>
                )}
            </div>
        </CenteringContainer>
    )
}
