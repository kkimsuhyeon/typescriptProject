/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';

interface IDiv {
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  background?: string;
}

interface IFlex extends IDiv {
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
  flex?: string;
}

interface IInput extends IDiv {
  color?: string;
  borderRadius?: string;
  fontSize?: string;
}

export const Div = styled.div<IDiv>`
  ${({ width }) => {
    return `width: ${width};`;
  }}
  ${({ height }) => {
    return `height: ${height};`;
  }}
  ${({ margin }) => {
    return `margin: ${margin};`;
  }}
  ${({ padding }) => {
    return `padding: ${padding};`;
  }}
  ${({ background }) => {
    return `background:${background};`;
  }}
`;

export const Flex = styled(Div)<IFlex>`
  display: flex;
  ${({ flexDirection }) => {
    return `flex-direction: ${flexDirection};`;
  }}
  ${({ alignItems }) => {
    return `align-items: ${alignItems || 'center'};`;
  }}
  ${({ justifyContent }) => {
    return `justify-content: ${justifyContent || 'center'};`;
  }}
  ${({ flex }) => {
    return `flex: ${flex};`;
  }}
`;

export const Input = styled.input<IInput>`
  ${({ color }) => {
    return `color: ${color || '#303030'}`;
  }};
  ${({ width }) => {
    return `width: ${width}`;
  }};
  ${({ height }) => {
    return `height: ${height}`;
  }};
  ${({ borderRadius }) => {
    return `border-radius: ${borderRadius || '4px'}`;
  }};
  ${({ fontSize }) => {
    return `font-size: ${fontSize}`;
  }};
  ${({ padding }) => {
    return `padding: ${padding}`;
  }};
  ${({ margin }) => {
    return `margin: ${margin}`;
  }};
  ${({ background }) => {
    return `background:${background || 'white'}`;
  }};
`;
