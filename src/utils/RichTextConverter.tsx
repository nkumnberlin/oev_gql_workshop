import React from 'react';
import styled from "styled-components";

interface TextCheckerProps {
    textArray: any;
}

interface RichTextProps {
    style?: any
}

interface DecorateTextProps {
    text: any;
    href: any;
    children: any
}

const RichText = styled.span`
    font-weight: ${(props: RichTextProps) => props.style?.bold && 'bold'};
    font-style: ${(props: RichTextProps) => props.style?.italic && 'italic'};
    text-decoration: ${(props: RichTextProps) => props.style?.underline && 'underline'};
`;

const decorateText = (element: any) => element.children.map((text: DecorateTextProps, index: number) => (
// @ts-ignore
  <RichText key={index} style={text}>
    {text.href ? (
      <a href={text.href}>
        {' '}
        {text.children[0].text}
        {' '}
      </a>
    ) : text.text}
  </RichText>
));

const TextChecker = ({ textArray }: any) => textArray?.map((element: any, index: number) => {
  switch (element.type) {
    case 'paragraph':
      return (
        <div key={index}>
          {' '}
          {decorateText(element)}
          {' '}
        </div>
      );
    case 'description':
      return (
        <>
          {' '}
          {decorateText(element)}
          {' '}
        </>
      );
    case 'unordered-list':
      return (
        <ul>
          {element.children.map((list: object, index: number) => <li key={index}>{decorateText(list)}</li>)}
        </ul>
      );
    case 'ordered-list':
      return (
        <ol>
          {element.children.map((list: object, index: number) => <li key={index}>{decorateText(list)}</li>)}
        </ol>
      );
    case 'h1':
      return <h1>{decorateText(element)}</h1>;
    case 'h2':
      return <h2>{decorateText(element)}</h2>;
    case 'h3':
      return <h3>{decorateText(element)}</h3>;
    case 'h4':
      return <h4>{decorateText(element)}</h4>;
    case 'h5':
      return <h5>{decorateText(element)}</h5>;
    case 'h6':
      return <h6>{decorateText(element)}</h6>;
    default:
      return (
        <>
          {' '}
          unknown
          {element.type}
        </>
      );
  }
});

export default TextChecker;
