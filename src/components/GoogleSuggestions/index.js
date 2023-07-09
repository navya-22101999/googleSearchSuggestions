// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeGoogleInput = event => {
    this.setState({searchInput: event.target.value})
  }

  displaySuggestionItem = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const filtered = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
            alt="search icon"
          />
          <input
            type="search"
            onChange={this.onChangeGoogleInput}
            value={searchInput}
            placeholder="Search Google"
          />
        </div>
        <ul>
          {filtered.map(suggestion => (
            <SuggestionItem
              each={suggestion}
              key={suggestion.id}
              displaySuggestion={this.displaySuggestionItem}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default GoogleSuggestions
