/* 
export const ToUpButton = () => {
    return (
        <a className={styles.scrollToTop} title="Наверх" href="#">&#10148;</a>
    )
}
*/

export const ToUpButton = () => {
  const ref = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
      <button onClick={scrollToTop}>Scroll to top</button>
  );
}
