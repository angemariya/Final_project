import { CenteringContainer } from '../CenteringContainer';
import styles from './Footer.module.css'
import instagramIcon from '../../images/instagram.svg';
import whatsupIcon from '../../images/whatsapp.svg'
 
export const Footer = () => {
    return (
        <CenteringContainer>
            <div className={styles.wrapper}>
                <div className={styles.firstSection}>
                   <h2 className={styles.header}>Contact</h2>
                    <a className={styles.phoneNumber} href="tel:+499999999999">+49 999 999 99 99</a>
                    <div className={styles.socialIcons}>
                        <div className={styles.socialIconWrapper}>
                            <a href="#"><img src={instagramIcon}/></a>
                            <span>Instagram</span>
                        </div>
                        <div className={styles.socialIconWrapper}>
                            <a href="#"><img src={whatsupIcon}/></a>
                            <span>WhatsApp</span>
                        </div>
                    </div> 
                </div>
                <div>
                    <h2 className={styles.header}>Address</h2>
                    <a className={styles.addressText} href='https://www.google.com/search?q=telranDE'>Linkstraße 2, 8 OG, 10785,<br /> Berlin, Deutschland</a>
                    <p className={styles.Text}><div className={styles.littleText}>Working Hours:</div> 24 hours a day</p>
                </div>
            </div>

            <div className={styles.mapContainer}>
                <iframe
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4026833391895!2d13.37239647692681!3d52.50805123711374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851cbdeaf3909%3A0xff2aef2e44148447!2sLinkstra%C3%9Fe%202%2C%2010785%20Berlin!5e0!3m2!1sru!2sde!4v1688827557191!5m2!1sru!2sde"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </CenteringContainer>

    )
}