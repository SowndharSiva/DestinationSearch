import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChange = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const filteredList = destinationsList.filter(eachValue =>
      eachValue.name.includes(searchInput),
    )
    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="innerContainer">
          <input
            type="search"
            placeholder="search"
            onChange={this.onChange}
            value={searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            className="imageEl"
            alt="search icon"
          />
        </div>

        <ul className="list-container">
          {filteredList.map(eachPlace => (
            <DestinationItem
              destinationDetails={eachPlace}
              key={eachPlace.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
