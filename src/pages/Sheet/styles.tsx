import styled, { css } from 'styled-components';

export const Container = styled.div`
  font-family: 'Manrope', sans-serif !important;
`;

type GridContent = {
  columns: number;
  rows: number;
};

export const Content = styled.div<GridContent>`
  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  display: grid;
  grid-template-columns: ${props => `repeat(${props.columns}, 1fr)`};
  grid-template-rows: ${props => `repeat(${props.rows}, ${80 / props.rows}vh)`};
  margin-top: 15px;
`;

type GridChart = {
  columnStart: number;
  columnEnd: number;
  rowStart: number;
  rowEnd: number;
  type: string;
};

export const Chart = styled.div<GridChart>`
  @media (max-width: 1100px) {
    display: grid;
    order: ${props => props.columnStart + props.columnEnd + props.rowEnd};
    grid-template-columns: 1fr;
    grid-column: auto;
    grid-auto-rows: auto;
  }

  grid-column-start: ${props => props.columnStart};
  grid-column-end: ${props => props.columnEnd};
  grid-row-start: ${props => props.rowStart};
  grid-row-end: ${props => props.rowEnd};

  button {
    text {
      ${props =>
        props.type === 'action-button' &&
        css`
          font-size: 18px !important;
        `}
    }
  }

  align-items: center;
  background: white;
`;
