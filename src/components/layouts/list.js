import React, { useState, useEffect } from "react";
import {
  Card,
  Text,
  Avatar,
  Tooltip,
  Pane,
  Icon,
  toaster,
  Alert
} from "evergreen-ui";
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
  totalFavorites,
  typing
}) => {
  const [listHeroes, setListHeroes] = useState(heroes.slice(0, 9));
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListHeroes();
  }, [isFetching]);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isFetching
    )
      return;
    setIsFetching(true);
  }

  function fetchMoreListHeroes() {
    setTimeout(() => {
      setListHeroes(prevState => [
        ...prevState,
        ...heroes.slice(prevState.length, prevState.length + 9)
      ]);
      setIsFetching(false);
    }, 2000);
  }

  return (
    <Pane>
      {typing
        ? heroes.map(hero => (
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
          ))
        : listHeroes.map(hero => (
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
          ))}
      {isFetching && (
        <Alert
          intent="none"
          title="Fetching more Heroes..."
          marginBottom={32}
        />
      )}
    </Pane>
  );
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
