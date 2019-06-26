import React from "react";
import { Pane, Button, Heading, SearchInput } from "evergreen-ui";

const Menu = () => {
  return (
    <Pane display="flex" padding={16} background="greenTint">
      <Pane flex={1} alignItems="center" display="flex">
        <Heading size={600}>My Super Heroes</Heading>
      </Pane>
      <Pane>
        <SearchInput placeholder="Find your hero..." height={30} marginRight={16} />
        <Button appearance="minimal" iconBefore="badge" marginRight={16}>
          All Heroes
        </Button>
        <Button appearance="minimal" iconBefore="heart" marginRight={16}>
          My Favorites
        </Button>
        <Button appearance="minimal" iconBefore="book" marginRight={16}>
          The Blog Hero
        </Button>
        <Button appearance="minimal">Login</Button>
      </Pane>
    </Pane>
  );
};

export default Menu;
