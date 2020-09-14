/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';

interface IDiv {
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  background?: string;
  border?: string;
  borderLeft?: string;
  borderRight?: string;
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

interface IText extends IDiv {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
}

export const Div = styled.div<IDiv>`
  ${({ width }) => {
    return width && `width: ${width};`;
  }}
  ${({ height }) => {
    return height && `height: ${height};`;
  }}
  ${({ margin }) => {
    return margin && `margin: ${margin};`;
  }}
  ${({ padding }) => {
    return padding && `padding: ${padding};`;
  }}
  ${({ background }) => {
    return background && `background:${background};`;
  }}
  
  ${({ border }) => {
    return border && `border: ${border}`;
  }};

  ${({ borderLeft }) => {
    return borderLeft && `border-left: ${borderLeft}`;
  }};

  ${({ borderRight }) => {
    return borderRight && `border-right: ${borderRight}`;
  }};
`;

export const Flex = styled(Div)<IFlex>`
  display: flex;
  ${({ flexDirection }) => {
    return flexDirection && `flex-direction: ${flexDirection};`;
  }}
  ${({ alignItems }) => {
    return `align-items: ${alignItems || 'center'};`;
  }}
  ${({ justifyContent }) => {
    return `justify-content: ${justifyContent || 'center'};`;
  }}
  ${({ flex }) => {
    return flex && `flex: ${flex};`;
  }}
`;

export const Input = styled.input<IInput>`
  ${({ color }) => {
    return `color: ${color || '#303030'};`;
  }};
  ${({ width }) => {
    return `width: ${width};`;
  }};
  ${({ height }) => {
    return `height: ${height};`;
  }};
  ${({ borderRadius }) => {
    return `border-radius: ${borderRadius || '4px'};`;
  }};
  ${({ fontSize }) => {
    return `font-size: ${fontSize};`;
  }};
  ${({ padding }) => {
    return `padding: ${padding};`;
  }};
  ${({ margin }) => {
    return `margin: ${margin};`;
  }};
  ${({ background }) => {
    return `background:${background || 'white'};`;
  }};
`;

export const Text = styled(Div)<IText>`
  ${({ color }) => {
    return color && `color: ${color};`;
  }}
  ${({ fontSize }) => {
    return fontSize && `font-size: ${fontSize};`;
  }}
  ${({ fontWeight }) => {
    return fontWeight && `font-weight: ${fontWeight};`;
  }}
`;
