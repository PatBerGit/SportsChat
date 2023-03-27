import { CardInterface } from "../../types"
import Badge from "../Badge/Badge"
import Button from "../Button/Button"
import styles from "./Card.module.css"

const Card = ({body,btn,title,badge,image1,image2,image1_alt,image2_alt,indicator,subtitle}: CardInterface) => {
  return (
    <article className={`stack-lg ${styles.card}`}>
        {indicator && <small className={styles.indicator}>{indicator}</small>}
        {badge && <Badge text={badge.text} filled={badge.filled} />}
        {image1 && <img src={image1} alt={image1_alt} className={styles.image} />}
        <p>vs.</p>
        {image2 && <img src={image2} alt="Random" className={styles.image} />}
        <div className="stack-sm">
            <h3 className={styles.title}>{title}</h3>
            {subtitle && 
            <small className={styles.subtitle}>{subtitle}</small>
            }
        </div>
        <p className={styles.body}>{body}</p>
        <Button
            filled={btn.filled}
            type={btn.type}
            href={btn.href}
            text={btn.text}
            icon={btn.icon}
        />
    </article>

  )
}
export default Card