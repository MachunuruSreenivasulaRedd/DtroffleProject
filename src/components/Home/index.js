import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Home extends Component {
  state = {searchInput: '', fetchedData: [], skip: 0}

  componentDidMount() {
    this.getSearchData()
  }

  gotoPrevPage = () => {
    const {skip} = this.state
    if (skip !== 0) {
      this.setState(
        prevState => ({
          skip: prevState.skip - 10,
        }),
        this.getSearchData,
      )
    }
  }

  gotoNextPage = () => {
    const {skip} = this.state
    if (skip !== 60) {
      this.setState(
        prevState => ({
          skip: prevState.skip + 10,
        }),
        this.getSearchData,
      )
    }
  }

  getSearchData = async () => {
    const {searchInput, skip} = this.state
    const userSearch = searchInput
    if (userSearch.length > 0) {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${userSearch}&limit=${userSearch.length}&skip=${skip}`,
      )
      const requestedData = await response.json()
      this.setState({fetchedData: [...requestedData.products]})
    } else {
      const response = await fetch(
        `https://dummyjson.com/products?limit=6&skip=${skip}`,
      )
      const requestedData = await response.json()
      this.setState({fetchedData: [...requestedData.products]})
    }
  }

  changeInput = e => {
    this.setState({searchInput: e.target.value}, this.getSearchData)
  }

  render() {
    const {searchInput, fetchedData} = this.state
    return (
      <div>
        <div className="inputContainer">
          <input
            type="text"
            value={searchInput}
            onChange={e => this.changeInput(e)}
            placeholder="search product"
            className="input"
          />
          <button
            className="prevPage"
            type="button"
            onClick={this.gotoPrevPage}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpDxHGCfukYfIoQ8BgRvmpUzvLvVsOUZyFiA&usqp=CAU"
              alt="arrow"
              className="arrow"
            />
          </button>
          <button
            className="nextPage"
            type="button"
            onClick={this.gotoNextPage}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyh9scafT5BF-BpN7e2YEG5kdlBtivgPNfQQ&usqp=CAU"
              alt="arrow"
              className="arrow"
            />
          </button>
        </div>
        <div className="productsContainer">
          {fetchedData.map(eachProduct => (
            <Link
              to={`/products/${eachProduct.id}`}
              key={eachProduct.id}
              className="item"
            >
              <div className="productCard">
                <img
                  src={eachProduct.thumbnail}
                  alt="product"
                  className="productImage"
                />
                <h1 className="title">{eachProduct.title}</h1>
                <p className="description">{eachProduct.description}</p>
                <p className="price">Rs {eachProduct.price} /-</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
  }
}

export default Home
