import { useRouteError } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import picture from "../../images/404.png";

export const ErrorPage = () => {
    const error = useRouteError();
    return (
        <>
            <Header />
            <img src={picture} alt="404 error" />
            <Footer />
        </>
        
    )
}
