import React, { Component } from "react";
import { Heading, Pane, Avatar, Paragraph } from "evergreen-ui";
import { connect } from "react-redux";
import { getHero } from "../../redux/actions";

class Details extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0
    };
  }

  componentDidMount() {
    this.props.getHero(this.props.heroSelect);
  }

  render() {
    return (
      <div>
        <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
          <Pane padding={16} borderBottom="muted">
            {this.props.hero.map(detail => (
              <Pane key={detail.id}>
                <Avatar
                  src={detail.images.lg}
                  name="Jeroen Ransijn"
                  size={220}
                />
                <Heading size={600}>{detail.name}</Heading>
                <Heading size={400} color="muted">
                  {detail.biography.publisher}
                </Heading>
                <Pane clearfix>
                  <Pane
                    elevation={0}
                    float="left"
                    backgroundColor="white"
                    width={200}
                    height={120}
                    margin={24}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                  >
                    <Heading>Appearance</Heading>
                    <Paragraph>{detail.appearance.gender}</Paragraph>
                  </Pane>
                  <Pane
                    elevation={0}
                    float="left"
                    backgroundColor="white"
                    width={200}
                    height={120}
                    margin={24}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                  >
                    <Heading>Biography</Heading>
                    <Paragraph>{detail.biography.fullName}</Paragraph>
                    <Paragraph>{detail.biography.firstAppearance}</Paragraph>
                  </Pane>
                  <Pane
                    elevation={0}
                    float="left"
                    backgroundColor="white"
                    width={200}
                    height={120}
                    margin={24}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                  >
                    <Heading>Work</Heading>
                    <Paragraph>{detail.work.base}</Paragraph>
                  </Pane>
                  <Pane
                    elevation={0}
                    float="left"
                    backgroundColor="white"
                    width={200}
                    height={120}
                    margin={24}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                  >
                    <Heading>Connections</Heading>
                    <Paragraph>{detail.connections.relative}</Paragraph>
                    <Paragraph>{detail.connections.groupAffiliation}</Paragraph>
                  </Pane>
                </Pane>
              </Pane>
            ))}
          </Pane>
        </Pane>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    hero: state.hero,
    heroSelect: state.heroSelect
  };
}

export default connect(
  mapStateToProps,
  { getHero }
)(Details);
