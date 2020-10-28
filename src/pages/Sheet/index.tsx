import React, { useContext, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import { SheetContext } from '../../context/SheetContext';
import QdtComponent from '../../components/QdtComponent/index.js';

import { Container, Content, Chart } from './styles';
import { QdtViz } from 'qdt-components';

interface RouteParams {
  sheetId: string;
}

const Sheet: React.FC = () => {
  const [objectSize, setObjectSize] = useState(() => {
    return 80;
  });

  window.onorientationchange = () => {
    if (window.screen.orientation.type === 'portrait-primary') {
      setObjectSize(80);
    } else {
      setObjectSize(140);
    }
  };

  const { params } = useRouteMatch<RouteParams>();
  const sheets = useContext(SheetContext);

  const sheet = sheets.find(sheetObj => sheetObj.id === params.sheetId)!;

  return (
    <Container>
      <Content columns={sheet.columns} rows={sheet.rows}>
        {sheet.cells.map(cell => {
          return (
            <Chart
              columnStart={cell.col + 1}
              columnEnd={cell.col + (cell.colspan + 1)}
              rowStart={cell.row + 1}
              rowEnd={cell.row + (cell.rowspan + 1)}
              key={cell.name}
              type={cell.type}
            >
              <QdtComponent
                appIndex={2} 
                component={QdtViz}
                properties={{}}
                options={{
                  id: cell.name,
                  type: cell.type,
                  height: `${cell.rowspan * (objectSize / sheet.rows)}vh`,
                }}
              />
              {/* <QdtComponent
                type="QdtViz"
                props={{
                  id: cell.name,
                  type: cell.type,
                  height: `${cell.rowspan * (objectSize / sheet.rows)}vh`,
                }}
                key={cell.name}
              /> */}
            </Chart>
          );
        })}
      </Content>
    </Container>
  );
};

export default Sheet;
