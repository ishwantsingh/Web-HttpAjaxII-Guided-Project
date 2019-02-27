import React from 'react';
import styled, { keyframes } from 'styled-components';
import { lighten, darken } from 'polished';
import { string } from 'prop-types';


const kf = keyframes`
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const StyledSection = styled.section`
  opacity: 0;
  transform: translateX(100%);
  color: ${pr => darken(0.1, pr.color)};
  margin-top: 20px;
  padding: 20px;
  animation: ${kf} 0.2s ease-out forwards;
  border: 12px solid ${pr => lighten(0.32, pr.color)};
  border-radius: 32px;
`;

export default class Section extends React.Component {
  render() {
    return (
      <StyledSection color={this.props.color}>
        <h3>{this.props.heading}</h3>
        <p>{this.props.content}</p>
        {this.props.children}
      </StyledSection>
    );
  }
}

Section.propTypes = {
  heading: string,
  content: string,
  color: string,
};

Section.defaultProps = {
  heading: 'Default Section',
  content: 'This is default content.',
  color: '#ffffff',
};
