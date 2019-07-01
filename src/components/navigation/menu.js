import React from "react";
import { Pane, Button, Heading, Pill } from "evergreen-ui";
import { connect } from "react-redux";
import Search from "../navigation/search";

const Menu = (state) => {
  return (
    <Pane display="flex" padding={16} background="greenTint">
      <Pane flex={1} alignItems="center" display="flex">
        <Heading size={600}>My Super Heroes</Heading>
      </Pane>
      <Pane>
        <Search  />
        <Button appearance="minimal" iconBefore="badge" marginRight={16}>
          All Heroes
        </Button>
        <Button appearance="minimal" iconBefore="heart" marginRight={16}>
          My Favorites
          <Pill display="inline-flex" margin={8}>
            {state.sumFavorites}
          </Pill>
        </Button>
        <Button appearance="minimal" iconBefore="book" marginRight={16}>
          The Blog Hero
        </Button>
        <Button appearance="minimal">Login</Button>
      </Pane>
    </Pane>
  );
};


const mapStateToProps = state => {
  return {
    sumFavorites: state.sumFavorites,
  };
};

export default connect(
  mapStateToProps
)(Menu);
