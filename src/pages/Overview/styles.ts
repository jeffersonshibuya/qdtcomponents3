import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
`;

export const Row = styled.div`
  display: flex;
  flex: 1;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const OverviewContent = styled.div`
  display: flex;
  flex: 3;
`;

export const Content = styled.div`
  @media screen and (max-width: 1024px) {
    margin-right: 0px;
  }

  flex: column;
  margin-bottom: 10px;
  position: relative;
  height: 100%;
  width: 100%;
`;

export const Title = styled.div`
  @media screen and (max-width: 1024px) {
    width: 100% !important;
  }

  font-size: 1rem;
  font-weight: 700;
  margin-top: 15px;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  background: ${shade(0.1, '#2c5282')};
  padding: 5px;
  color: #fff;
  border-radius: 4px;

  p {
    display: flex;
    align-items: center;

    svg {
      width: 22px;
      height: 22px;

      margin-right: 7px;
    }
  }

  span {
    svg {
      width: 22px;
      height: 22px;
      margin-right: 5px;
    }

    svg:hover {
      color: ${shade(0.9, '#2c5282')};
    }
  }
`;

export const Text = styled.div`
  padding: 0 10px;
  font-size: 14px;
  text-align: justify;

  p {
    padding-top: 1rem;
    line-height: 23px;
    text-align: justify;

    .italic {
      font-style: italic;
    }

    strong {
      display: block;
      margin-top: 20px;
    }
  }

  ul {
    margin-top: 20px;
    list-style-type: circle;
    margin-left: 25px;
  }

  & + p {
    padding-top: 0;
  }

  a {
    color: blue;
  }
`;
