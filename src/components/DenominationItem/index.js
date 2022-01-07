// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denomination, changeAmount} = props
  const {value} = denomination
  const onChangeAmount = () => {
    changeAmount(value)
  }
  return (
    <li className="list-container">
      <button className="bton" type="button" onClick={onChangeAmount}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
