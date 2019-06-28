import React from "react";
import { Card, Text, Avatar, Tooltip, Pane, Icon, toaster } from "evergreen-ui";
import { connect } from "react-redux";
import {
  showSidePane,
  selectedHero,
  addToFavorite,
  totalFavorites
} from "../../redux/actions";
import PowerLevel from "./powerLevel";

const HeroesList = ({
  heroes,
  showPane,
  showSidePane,
  selectedHero,
  sumFavorites,
  addToFavorite,
  totalFavorites
}) => {
  return heroes.map(hero => (
    <Card
      elevation={3}
      float="left"
      backgroundColor="white"
      width={320}
      height={220}
      margin={24}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      key={hero.id}
    >
      <Pane alignSelf="end">
        <Icon
          onClick={() => {
            addToFavorite(hero.id);
            totalFavorites(sumFavorites);
            toaster.notify(hero.name + " added to your favorites", {
              duration: 2
            });
          }}
          icon="heart"
          color="disabled"
          marginRight={16}
        />
      </Pane>

      <Avatar
        onClick={() => {
          showSidePane(showPane);
          selectedHero(hero.id);
        }}
        src={hero.images.md}
        name={hero.name}
        size={120}
        marginBottom={30}
      />
      <Tooltip
        content={<PowerLevel powerStats={hero.powerstats} />}
        appearance="card"
      >
        <Text>{hero.name}</Text>
      </Tooltip>
      <Text size={300}>{hero.biography.fullName}</Text>
    </Card>
  ));
};

const mapDispatchToProps = dispatch => {
  return {
    selectedHero: id => dispatch(selectedHero(id)),
    showSidePane: () => {
      dispatch(showSidePane());
    },
    addToFavorite: hero => {
      dispatch(addToFavorite(hero));
    },
    totalFavorites: value => {
      dispatch(totalFavorites(value));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(HeroesList);
