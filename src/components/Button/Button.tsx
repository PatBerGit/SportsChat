import { ButtonInterface } from "../../types"
import styles from "./Button.module.css"

const Button = ({text, filled, type, href, icon}:ButtonInterface) => {
    const filledClass = filled ? styles.filled : "";
    return (
        <button>
          <a href={href} className={`${styles.btn} 
          ${styles[type.toLowerCase()]} ${filledClass}`}>
          <span className={`${styles.text}`}>{text}</span>
          {icon}
          </a>
        </button>
      )
}
export default Button