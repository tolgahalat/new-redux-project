import React, { Component } from "react";
import { connect } from "react-redux";

class CategoryList extends Component {
  render() {
    return (
      <div>
        <h3>CategoryList</h3>
        <p>Seçili Kategory: {this.props.currentCategory.name}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { currentCategory: state.changeCategoryReducer };
}

export default connect(mapStateToProps)(CategoryList);
