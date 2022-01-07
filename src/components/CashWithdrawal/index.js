// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  changeAmount = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="content-container">
          <div className="profile-container">
            <div className="s-container">
              <h1 className="s-class">s</h1>
            </div>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="balance">Your Balance</p>
            <div className="amount-container">
              <p className="amount">{amount}</p>
              <p className="in-rupees">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="capital-class">CHOOSE SUM (IN RUPEES)</p>
          <ul className="buttons-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                denomination={eachItem}
                key={eachItem.id}
                changeAmount={this.changeAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
