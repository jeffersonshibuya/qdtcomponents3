import React, { useEffect, useRef} from 'react';

// import { qdtComponents } from '../../config/globalApp';
import {
  qdtEnigma, qdtCapabilityApp, qdtCompose, QdtViz,
} from 'qdt-components';

const identity = Math.random().toString(32).substr(2, 8);

const config = {
  host: 'qap.ipc-global.com',
  appId: '4e8223d8-d9ab-49ac-aff3-cdf51d948e37',
  secure: true,
  port: 443,
  prefix: '',
  identity
  // webIntegrationId, // SaaS webIntegrationId
  // token // SaaS auth JWT token
}

const engineApiAppPromise = qdtEnigma(config);
const capabilityApiAppPromise = qdtCapabilityApp(config);


function QdtComponent({
  component, properties, options, appIndex,
}) {
  const elementRef = useRef(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const init = async () => {
    let app = await engineApiAppPromise;
    if (appIndex === 2) {
      app = await capabilityApiAppPromise;
      QdtViz({
        element: elementRef.current,
        app,
        options,
      });
    } else {
      qdtCompose({
        element: elementRef.current,
        component,
        app,
        properties,
        options,
      });
    }
  };

  useEffect(() => {
    if (elementRef) init();
  }, [init]);

  return (
    <div ref={elementRef} />
  );
}

export default QdtComponent;