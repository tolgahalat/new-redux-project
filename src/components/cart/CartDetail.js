import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Button, Table } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { removeFromCart } from '../../redux/actions/cartActions';

class CartDetail extends Component {
    removeFromCart(product) {
        this.props.actions.removeFromCart(product);
    }
  render() {
    return (
      <div>CartDetail

<Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {this.props.cart.map(cartItem => (
          <tr key={cartItem.product.id}>
            <td scope="row">{cartItem.id}</td>
            <td>{cartItem.product.productName}</td>
            <td>{cartItem.product.unitPrice}</td>
            <td>{cartItem.quantity}</td>
            <td>
              <Button color="danger" onClick={()=>this.removeFromCart(cartItem.product)}>-</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>

      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
      cart: state.cartReducer,
    };
  }
  
    function mapDispatchToProps(dispatch) {
      return {
        actions: {
          removeFromCart: bindActionCreators(removeFromCart, dispatch)
        }
      }
    }
  
  export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);