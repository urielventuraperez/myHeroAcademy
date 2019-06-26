import React, { Component } from "react";
import {
  Card,
  Heading,
  Tablist,
  Tab,
  Pane,
  Paragraph
} from "evergreen-ui";

class Details extends Component {
  constructor() {
    super();
    this.state = {
      isShown: false,
      selectedIndex: 0
    };
  }

  render() {
    return (
      <div>
        <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
          <Pane padding={16} borderBottom="muted">
            <Heading size={600}>Title</Heading>
            <Paragraph size={400} color="muted">
              Optional description or sub title
            </Paragraph>
          </Pane>
          <Pane display="flex" padding={8}>
            <Tablist>
              {["Traits", "Event History", "Identities"].map((tab, index) => (
                <Tab
                  key={tab}
                  isSelected={this.state.selectedIndex === index}
                  onSelect={() => this.setState({ selectedIndex: index })}
                >
                  {tab}
                </Tab>
              ))}
            </Tablist>
          </Pane>
        </Pane>
        <Pane flex="1" overflowY="scroll" background="tint1" padding={16}>
          <Card
            backgroundColor="white"
            elevation={0}
            height={240}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Heading>Some content</Heading>
          </Card>
        </Pane>
      </div>
    );
  }
}

export default Details;
