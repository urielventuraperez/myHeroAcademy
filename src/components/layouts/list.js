import React, { Component } from "react";
import { Card, Text, Avatar, Tooltip, Spinner, Pane } from "evergreen-ui";
import { getHeroes } from "../../redux/actions";
import { connect } from "react-redux";

class List extends Component {
  componentDidMount() {
    this.props.getHeroes();
  }

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
              <Tooltip content={hero.slug}>
                <Avatar
                  src={hero.images.md}
                  name={hero.name}
                  size={120}
                  marginBottom={30}
                />
              </Tooltip>
              <Text>{hero.name}</Text>
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
