import {Component} from 'react'
import './index.css'

class ProductItemDetails extends Component {
  state = {
    productDetails: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getProductDetails()
  }

  getProductDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    const data = await response.json()
    console.log(data)
    this.setState({productDetails: data, isLoading: false})
  }

  render() {
    const {productDetails, isLoading} = this.state
    return isLoading ? (
      <div className="loaderContainer">
        <img
          src="https://i.stack.imgur.com/IA7jp.gif"
          alt="loader"
          className="loader"
        />
      </div>
    ) : (
      <div className="detailsContainer">
        <div className="imgContainer">
          <img
            src={productDetails.thumbnail}
            alt={productDetails.title}
            className="image"
          />
        </div>
        <div className="itemDetailsContainer">
          <h1 className="title">{productDetails.title}</h1>
          <p className="description">{productDetails.description}</p>
          <p className="price">Rs {productDetails.price}/- </p>
          <span>flat {productDetails.discountPercentage} % discount</span>
        </div>
        <div className="similarProducts">
          <h1>Product Images</h1>
          {productDetails.images.map(eachItem => (
            <img
              src={eachItem}
              alt="item"
              className="moreItem"
              key={eachItem}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default ProductItemDetails
