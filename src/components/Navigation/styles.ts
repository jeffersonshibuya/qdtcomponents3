import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div``;

export const Header = styled.header`
  background: #fff;
`;

export const SearchInput = styled.div`
  /* display: flex;
  align-items: center;
  justify-items: baseline;
  justify-content: flex-end;
  flex: 1; */

  input {
    min-width: 250px !important;
  }
`;

export const SelectionsBar = styled.div`
  margin-top: 6px;
  border: 2px solid #2c5282;
  flex: 1;

  .qvt-selections.qv-panel-subtoolbar.qv-panel-current-selections.ng-scope.ng-isolate-scope.bright
    > div
    > div
    > div.buttons-end.borderbox.border-left {
    color: white;
  }

  .buttons-end.borderbox.border-left {
    display: none;
  }
  .buttons.borderbox.border-bottom.border-right > div {
    display: none;
  }
`;

export const HeaderContent = styled.div`
  @media screen and (max-width: 812px) {
    flex-direction: column;
    justify-content: center;

    div.headerTitle {
      flex-direction: column;

      h1 {
        font-size: 20px;
      }

      .subTitle {
        flex-direction: column;

        h3 {
          font-size: 12px;
        }

        h5 {
          font-size: 10px;
          margin-left: 0;
        }
      }
    }

    .headerUser {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .lui-search {
        width: 100% !important;
      }

      ul.lui-list {
        width: 100% !important;
      }
    }
  }

  .headerTitle {
    display: flex;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
  }

  .headerUser {
    margin-right: 25px;
    font-size: 18px;

    .lui-search {
      @media screen and (max-width: 812px) {
        width: 100% !important;
      }
      width: 350px !important;
    }

    ul.lui-list {
      width: 350px !important;
    }
  }

  display: flex;
  flex: 1;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  color: #2c5282;
  padding: 5px 0 5px 0;

  img {
    margin-right: 25px;
    height: auto;
  }

  h1 {
    font-size: 26px;
    font-weight: 700;
  }

  .user {
    display: flex;
    justify-content: flex-end;
  }

  #pagetitle {
    margin-top: 0px;
  }

  .subTitle {
    display: flex;
    align-items: baseline;

    h3 {
      font-size: 24px;
    }

    h5 {
      margin-left: 15px;
      font-size: 16px;
      font-style: italic;
    }
  }
`;

export const Links = styled.nav`
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }

  display: flex;
  flex-wrap: wrap;
`;

type Menu = {
  open: boolean;
};

export const Menu = styled.div<Menu>`
  @media screen and (max-width: 1024px) {
    opacity: ${props => (props.open ? '1' : '0')};
    max-height: ${props => (props.open ? '100%' : '0')};
    overflow: hidden;
    transition: all 0.3s;
  }
`;

export const MenuButton = styled.div`
  @media screen and (min-width: 1025px) {
    display: none;
  }
  display: flex;
  border: 2px solid #2c5282;
  font-size: 16px;
  color: #2c5282;
  padding: 7px;
  justify-content: space-between;

  &:hover {
    color: #fff;
    background-color: #63b3ed;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const LinkMenu = styled(NavLink)`
  @media screen and (max-width: 1024px) {
    border: 1px solid #2c5282;
    width: 100% !important;
    flex: 1;
  }

  font-size: 14px;
  display: flex;
  padding: 7px 15px;
  border: 2px solid #2c5282;
  margin-right: 6px;
  color: #2c5282;

  &:hover {
    background: #63b3ed;
    color: #fff;
  }

  span {
    display: flex;

    svg {
      margin-right: 5px;
    }
  }

  &.active {
    background: #63b3ed;
    color: #fff;
  }
`;
