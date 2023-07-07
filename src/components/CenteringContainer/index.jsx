import styles from './CenteringContainer.module.css'

export const CenteringContainer = ({ children }) => {
    return (
        <section className={styles.container}>
            {children}
        </section>
    )
}