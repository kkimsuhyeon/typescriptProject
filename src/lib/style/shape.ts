/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';

interface ICircle {
  width?: string;
  height?: string;
  backgroundColor?: string;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  margin?: string;
  position?: string;
}

export const Circle = styled.div<ICircle>`
  border-radius: 50%;
  ${({ width }) => {
    return `width:${width};`;
  }}
  ${({ height }) => {
    return `height:${height};`;
  }}
  ${({ backgroundColor }) => {
    return `background-color:${backgroundColor};`;
  }}
  ${({ display }) => {
    return `display:${display};`;
  }}
  ${({ justifyContent }) => {
    return `justify-content:${justifyContent};`;
  }}
  ${({ alignItems }) => {
    return `align-items:${alignItems};`;
  }}
  ${({ margin }) => {
    return `margin:${margin};`;
  }}
  ${({ position }) => {
    return `position:${position};`;
  }}
`;
