import React from "react";
import Capitalize from "../../utils";
import StarRatings from "react-star-ratings";
import { Pane, Paragraph } from "evergreen-ui";

const MAX_STAR_LEVEL = 5;
const MAX_POWER_LEVEL = 100;

const getPowerLevel = level => {
  return level * (MAX_STAR_LEVEL / MAX_POWER_LEVEL);
};

const PowerLevel = ({ powerStats }) => {
  const level = Math.max.apply(null, Object.values(powerStats));
  const power = Object.keys(powerStats).find(key => powerStats[key] === level);
  return (
    <Pane padding={20} alignItems="center" justifyContent="center">
      <Paragraph size={500} marginTop="default" marginBottom="10px">
          {Capitalize(power)}
      </Paragraph>
      <StarRatings
        rating={getPowerLevel(level)}
        starDimension="20px"
        starRatedColor="rgba(16, 112, 202, 0.47)"
        starEmptyColor="#E4E7EB"
        numberOfStars={MAX_STAR_LEVEL}
        name="rating"
      />
    </Pane>
  );
};

export default PowerLevel;
