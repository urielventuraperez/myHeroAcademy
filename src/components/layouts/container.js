import React, { Component } from "react";
import { Spinner, Pane, SideSheet } from "evergreen-ui";
import Details from "./details";
import HeroesList from "./list";
import { getHeroes, showSidePane } from "../../redux/actions";
import { connect } from "react-redux";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      showHeroes: []
    };
  }

  componentDidMount() {
    this.props.getHeroes();
  }

  render() {
    return (
      <div>
        <SideSheet
          isShown={this.props.isShow}
          onCloseComplete={() => this.props.showSidePane(!this.props.isShow)}
          containerProps={{
            display: "flex",
            flex: "1",
            flexDirection: "column"
          }}
        >
          <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
            <Details />
          </Pane>
        </SideSheet>
        {this.props.loading ? (
          <Pane
            display="flex"
            alignItems="center"
            justifyContent="center"
            height={400}
          >
            <Spinner size={120} />
          </Pane>
        ) : (
          <HeroesList
            heroes={
              !this.props.heroResults.length
                ? this.props.heroes
                : this.props.heroResults
            }
            showPane={this.props.isShow}
            sumFavorites={this.props.sumFavorites}
          />
        )}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getHeroes: () => {
      dispatch(getHeroes());
    },
    showSidePane: () => {
      dispatch(showSidePane());
    }
  };
}

function mapStateToProps(state) {
  return {
    loading: state.loading,
    heroes: state.heroes,
    isShow: state.isShow,
    heroSelect: state.heroSelect,
    sumFavorites: state.sumFavorites,
    heroResults: state.heroResults
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
