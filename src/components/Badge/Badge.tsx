import { BadgeInterface } from "../../types"

const Badge = ({text, filled}:BadgeInterface) => {
  return (
    <small>{text}</small>
  )
}
export default Badge