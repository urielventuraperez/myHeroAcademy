import React from "react";
import { Pane, Button, Heading, SearchInput, Pill } from "evergreen-ui";
import { connect } from "react-redux";

const Menu = (state) => {
  return (
    <Pane display="flex" padding={16} background="greenTint">
      <Pane flex={1} alignItems="center" display="flex">
        <Heading size={600}>My Super Heroes</Heading>
      </Pane>
      <Pane>
        <SearchInput
          placeholder="Find your hero..."
          height={30}
          marginRight={16}
        />
        <Button appearance="minimal" iconBefore="badge" marginRight={16}>
          All Heroes
        </Button>
        <Button appearance="minimal" iconBefore="heart" marginRight={16}>
          My Favorites
          <Pill display="inline-flex" margin={8}>
            { state.sumFavorites }
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

const mapToStateToProps = state => {
    return {
        sumFavorites: state.sumFavorites
    }
};

export default connect(mapToStateToProps, {})(Menu);
