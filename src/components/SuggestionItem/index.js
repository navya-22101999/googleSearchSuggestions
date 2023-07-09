// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {each, displaySuggestion} = props
  const {suggestion} = each
  const onDelete = () => {
    displaySuggestion(suggestion)
  }
  return (
    <li>
      <div>
        <p>{suggestion}</p>
        <button onClick={onDelete} type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="arrow"
          />
        </button>
      </div>
    </li>
  )
}
export default SuggestionItem
