//import styles from './Button.module.css'
function Button(){
    const styles={
        backgroundColor: "aqua",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
      }

    return(
        //<button className={styles.button}>Click me</button>
        <button style={styles}>Click me</button>

    );
}
export default Button