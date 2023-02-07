import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Badge, Button, Table } from "reactstrap";
import { bindActionCreators } from "redux";
import { addToCart } from "../../redux/actions/cartActions";
import { getProducts } from "../../redux/actions/productActions";

class ProductList extends Component {
  componentDidMount(){
    this.props.actions.getProducts()
  }

  addToCart = (product) => {
    this.props.actions.addToCart({quantity:1, product})
  }

  render() {
    return <div>ProductList - <Badge color="success">{this.props.currentCategory.categoryName}</Badge>
    
    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Stock</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {this.props.products.map(p => (
          <tr key={p.id}>
            <td scope="row">{p.id}</td>
            <td><Link to={"/saveproduct?productId=" + p.id}>{p.productName}</Link></td>
            <td>{p.unitPrice}</td>
            <td>{p.quantityPerUnit}</td>
            <td>{p.unitsInStock}</td>
            <td>
              <Button color="success" onClick={()=>this.addToCart(p)}>+</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>

    </div>;
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(getProducts, dispatch),
      addToCart: bindActionCreators(addToCart, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);