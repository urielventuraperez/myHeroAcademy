import React, { Component } from "react";
import { SearchInput } from "evergreen-ui";
import { connect } from "react-redux";
import { searchHero } from "../../redux/actions";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchName: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = async function(event) {
    await this.setState({ searchName: event.target.value });
    console.log(this.state.searchName);
    const inputSearch = this.state.searchName;
    this.props.searchHero({ inputSearch });
  };

  render() {
    return (
      <SearchInput
        placeholder="Find your hero by Name..."
        height={30}
        marginRight={16}
        id="search"
        value={this.state.searchName}
        type="text"
        onChange={this.handleChange}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    heroSearchName: state.searchName
  };
}

function mapDispatchToProps(dispatch) {
    return{
        searchHero: hero => dispatch(searchHero(hero))
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
