import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import { IoIosCube } from 'react-icons/io';
import { IconType } from 'react-icons/lib/esm';
import { BsGraphUp } from 'react-icons/bs';
import { GiVote } from 'react-icons/gi';

// import { qdtComponents } from './config/globalApp';

import App from './App';
import { sheetData } from './context/SheetContext';

import {
  qdtEnigma, qdtCapabilityApp, qdtCompose, QdtViz,
} from 'qdt-components';


const config = {
  host: 'qap.ipc-global.com',
  appId: '4e8223d8-d9ab-49ac-aff3-cdf51d948e37',
  secure: true,
  port: 443,
  prefix: '',
  // webIntegrationId, // SaaS webIntegrationId
  // token // SaaS auth JWT token
}

// const engineApiAppPromise = qdtEnigma(config).then((qDoc: any) => {
//   qDoc.getObject('98ae96ee-0186-4282-952a-d0975ebdaaca').then((obj:any) => {
//     obj.getLayout().then((layout: any) => {
//       console.log(layout)
//     })
//   })
// });

function loadPage(sheets: sheetData[]): void {
  const sheetsView: sheetData[] = sheets;

  ReactDOM.render(
    <React.StrictMode>
      <App sheets={sheetsView} />
    </React.StrictMode>,
    document.getElementById('root'),
  );
}

(async function getApp() {
  // const qDoc = await qdtComponents.qDocPromise;
  const qDoc = await qdtEnigma(config)

  const sheets: sheetData[] = [];
  const sheetsList: string[] = [
    '98ae96ee-0186-4282-952a-d0975ebdaaca',
    '170e0952-dc08-493e-9d69-976954ab4bf6',
  ];

  function linkSerialized(
    layout: EngineAPI.IGenericObjectLayout,
    sheet: string,
  ): void {
    let title = '';
    let idx = 0;
    let menuIcon: IconType = IoIosCube;
    switch (sheet) {
      case '98ae96ee-0186-4282-952a-d0975ebdaaca':
        title = 'Votes';
        menuIcon = GiVote;
        idx = 1;
        break;
      case '170e0952-dc08-493e-9d69-976954ab4bf6':
        title = 'Demographics';
        menuIcon = BsGraphUp;
        idx = 2;
        break;
      default:
        break;
    }

    sheets.push({
      id: String(sheet),
      title: title || layout.qMeta.title,
      cells: layout.cells,
      columns: layout.columns,
      rows: layout.rows,
      menuIcon,
      menuIndex: idx,
    });
  }

  if (qDoc) {
    Promise.all(
      sheetsList.map(async sheet => {
        const obj = await qDoc.getObject(sheet);
        const layout = await obj.getLayout();
        linkSerialized(layout, sheet);
      }),
    ).then(() => {
      sheets.push({
        id: 'overview',
        title: 'Solution Overview',
        cells: [],
        columns: 0,
        rows: 0,
        menuIcon: IoIosCube,
        menuIndex: 0,
      });

      sheets.sort((a, b) =>
        a.menuIndex > b.menuIndex ? 1 : b.menuIndex > a.menuIndex ? -1 : 0,
      );
      loadPage(sheets);
    });
  }
})();
