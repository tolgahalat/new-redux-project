import React, { Component } from "react";
import { connect } from "react-redux";
import { ListGroup, ListGroupItem } from "reactstrap";
import { bindActionCreators } from "redux";
import { changeCategory, getCategories } from "../../redux/actions/categoryActions";

class CategoryList extends Component {
  componentDidMount(){
    this.props.actions.getCategories()
  }

  selectCategory = (category) => {
    this.props.actions.changeCategory(category)
  }
  render() {
    return (
      <div>
        <h3>CategoryList - {this.props.categories.length}</h3>
        <ListGroup>
          {
            this.props.categories.map(category => (
              <ListGroupItem active={category.id===this.props.currentCategory.id} 
                onClick={()=>this.selectCategory(category)} 
                key={category.id}>
                {category.categoryName}
              </ListGroupItem>
            ))
          }
        </ListGroup>
        <p>Seçili Kategory: {this.props.currentCategory.categoryName}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { currentCategory: state.changeCategoryReducer,
            categories: state.categoryListReducer };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(getCategories, dispatch),
      changeCategory: bindActionCreators(changeCategory, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
