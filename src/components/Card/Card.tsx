import { PlusSmallIcon } from "@heroicons/react/24/solid"
import { CardInterface } from "../../types"
import Badge from "../Badge/Badge"
import styles from "./Card.module.css"

const Card = ({body,btn,title,badge,image,indicator,subtitle}: CardInterface) => {
  return (
    <article className={`stack-lg $style.card`}>
        {indicator && <small className={styles.indicator}>{indicator}</small>}
        {badge && <Badge text={badge.text} filled={badge.filled} />}
        {image && <img src={image} alt="Random image" className={styles.image}/>}
        {title}
    </article>

  )
}
export default Card