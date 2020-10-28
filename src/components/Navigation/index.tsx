import React, { useContext, useState, useCallback } from 'react';

import { FiMenu, FiX } from 'react-icons/fi';
import {
  Container,
  LinkMenu,
  Header,
  HeaderContent,
  Links,
  MenuButton,
  Menu,
  SelectionsBar,
} from './styles';

import logo from '../../assets/ipc.png';
import { SheetContext } from '../../context/SheetContext';
import QdtComponent from '../QdtComponent/index.js';
import { QdtSelections } from 'qdt-components';

const Navigation: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [showSelections, setShowSelections] = useState(false);

  const sheets = useContext(SheetContext);

  const toggleMenu = useCallback(
    (id: string) => {
      setOpen(!open);
      if (id && id !== 'overview') {
        setShowSelections(true);
      } else setShowSelections(false);
    },
    [open],
  );

  const links = sheets.map(sheetLink => (
    <LinkMenu
      key={sheetLink.id}
      to={`/${sheetLink.id}`}
      onClick={() => toggleMenu(sheetLink.id)}
    >
      <span>
        <sheetLink.menuIcon size={24} />
        {sheetLink.title}
      </span>
    </LinkMenu>
  ));

  const viz1 = {
    type: 'QdtCurrentSelections',
    props: { height: '38px' },
  };

  return (
    <Container>
      <Header>
        <HeaderContent>
          <div className="headerTitle">
            <a href="http://www.ipc-global.com">
              <img src={logo} alt="IPC-Global" />
            </a>
            <h1 id="pagetitle" className="inline-block align-top">
              Georgia Elections
            </h1>
          </div>
        </HeaderContent>
        <MenuButton onClick={() => toggleMenu('')}>
          Menu
          {!open ? <FiMenu /> : <FiX />}
        </MenuButton>
        <Menu open={open}>
          <Links>{links}</Links>
        </Menu>
      </Header>
      {showSelections && (
        <SelectionsBar>
          <QdtComponent
            options={{}}
            appIndex={1}
            component={QdtSelections}
            properties={{
              qSelectionObjectDef: {},
            }}
          />
        </SelectionsBar>
      )}
    </Container>
  );
};

export default Navigation;
