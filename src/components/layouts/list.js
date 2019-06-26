import React, { Component } from "react";
import {
  Card,
  Text,
  Avatar,
  Tooltip,
  Spinner,
  Pane,
  Paragraph
} from "evergreen-ui";
import { getHeroes } from "../../redux/actions";
import { connect } from "react-redux";
import StarRatings from "react-star-ratings";
import Capitalize from "../../utils";

const MAX_STAR_LEVEL = 5;
const MAX_POWER_LEVEL = 100;

class List extends Component {
  componentDidMount() {
    this.props.getHeroes();
  }

  getPowerLevel = level => {
    return level * (MAX_STAR_LEVEL / MAX_POWER_LEVEL);
  };

  getPowerStats = powerStats => {
    const level = Math.max.apply(null, Object.values(powerStats));
    const power = Object.keys(powerStats).find(
      key => powerStats[key] === level
    );
    return (
      <Pane padding={20} alignItems="center" justifyContent="center">
        <Paragraph size={500} marginTop="default" marginBottom="10px">
          {Capitalize(power)}
        </Paragraph>
        <StarRatings
          rating={this.getPowerLevel(level)}
          starDimension="20px"
          starRatedColor="rgba(16, 112, 202, 0.47)"
          starEmptyColor="#E4E7EB"
          numberOfStars={MAX_STAR_LEVEL}
          name="rating"
        />
      </Pane>
    );
  };

  render() {
    return (
      <div>
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
          this.props.heroes.map(hero => (
            <Card
              elevation={3}
              float="left"
              backgroundColor="white"
              width={400}
              height={240}
              margin={24}
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              key={hero.id}
            >
              <Avatar
                src={hero.images.md}
                name={hero.name}
                size={120}
                marginBottom={30}
              />
              <Tooltip
                content={this.getPowerStats(hero.powerstats)}
                appearance="card"
              >
                <Text>{hero.name}</Text>
              </Tooltip>
              <Text size={300}>{hero.biography.fullName}</Text>
            </Card>
          ))
        )}
      </div>
    );
  }
}

function mapToStateToProps(state) {
  return {
    loading: state.loading,
    heroes: state.heroes.slice(0, 20)
  };
}

export default connect(
  mapToStateToProps,
  { getHeroes }
)(List);
