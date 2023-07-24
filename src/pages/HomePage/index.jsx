import { MainSection } from '../../components/MainSection';
import { Catalog } from '../../components/Catalog';
import { CouponForm } from '../../components/CouponForm';
import { MainSaleSection } from '../../components/MainSaleSection';

export const HomePage = () => {
    return (
        <main>
            <MainSection />
            <Catalog />
            <CouponForm />
            <MainSaleSection />
        </main>
    )
}