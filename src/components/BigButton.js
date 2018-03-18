import React from 'react';
import styled from 'styled-components';

const BigButton = styled.a`
  min-height: 56px;
  min-width: 200px;
  padding: 15px;
  margin: 20px;
  display: inline-block;
  text-align: center;

  font-family: 'Roboto', Arial, sans-serif;
  font-weight: bold;
  text-transform: uppercase;

  background-image: linear-gradient(45deg, #4ab0e4, #828cda);

  border-radius: 4px;
  box-shadow: 0 2px 0px 0 #51509c;

  font-size: 20px;
  color: white;

  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    color: white;
    box-shadow: 0 4px 6px 0 #51509c;
  }
`;

export default BigButton;
