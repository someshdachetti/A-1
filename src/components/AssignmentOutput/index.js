import {Component} from 'react'
import './index.css'

class AssignmentOutput extends Component {
  state = {
    searchInput: '',
    DeletelistOfItems: initialHistoryList,
  }

  onSearch = event => {
    const {initialHistoryList} = this.props
    const searchInput = event.target.value
    const searchResults = initialHistoryList.filter(({title}) =>
      title.includes(searchInput),
    )
    this.setState({
      searchInput,
      DeletelistOfItems: searchResults,
    })
  }

  onDelete = id => {
    const {initialHistoryList} = this.props
    const DeletelistOfItems = initialHistoryList.filter(
      ({id: eachId}) => eachId !== id,
    )
    this.setState({DeletelistOfItems})
  }

  render() {
    const {searchInput, DeletelistOfItems} = this.state

    return (
      <div>
        <div className="x">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="logo"
            className="history-img "
          />

          <img
            src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            alt=" search"
            className="search-img"
          />
          <input onChange={this.onSearch} value={searchInput} type="search" />
        </div>
        <ul className="list">
          {DeletelistOfItems.map(each => (
            <div className="in-a-row" key={each.id}>
              <p className="para">{each.timeAccessed}</p>
              <img src={each.logoUrl} className="logo" alt={each.title} />
              <div className="row">
                <h1 className="heading">{each.title} </h1>

                <p className="para">{each.domainUrl}</p>
              </div>
              <div className="delete">
                <img
                  onClick={() => this.onDelete(each.id)}
                  src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                  alt="delete"
                  className="deleteIcon"
                />
              </div>
            </div>
          ))}
        </ul>
      </div>
    )
  }
}

export default AssignmentOutput
