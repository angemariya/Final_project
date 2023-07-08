import { useParams } from 'react-router-dom'
import {useGetOneProductByCategoryQuery} from '../../redux/apiSlice'

export const ProductPage = () => {

    const { id } = useParams();
    const { data } = useGetOneProductByCategoryQuery(id);

    console.log(data);

    return (
        <>
        </>
    )
}