import React from 'react';

import { IoIosCube } from 'react-icons/io';

import {
  Container,
  Row,
  Content,
  OverviewContent,
  Title,
  Text,
} from './styles';

const Overview: React.FC = () => {
  return (
    <Container>
      <Row>
        <OverviewContent>
          <Content>
            <Title className="title">
              <p>
                <IoIosCube />
                Solution Overview
              </p>
              <span />
            </Title>
            <Text>
              <p>
                This solution takes Adobe PDF files provided by the State of
                Georgia for Election Updates and 2016 WSB-TV Atlanta election
                Data to provide Georgia 2016 vs. 2020 voting comparisons. IPC
                Global transforms the data daily to enable quick real-time
                analysis and news segments. Census Bureau
                (census.georgia.gov/census-data) is used to source race, age,
                and ethnicity by county to understand the County numbers. Census
                Bureau information is currently based on 2019 data available, so
                that the number may have slightly changed.
              </p>
              <p>
                IPC Global’s use of InProcess Data Factory enables us to take
                unstructured data and quickly turn it around into valuable and
                insightful data to keep viewership informed for WSB-TV Atlanta
                and keep them engaged daily.
              </p>

              <p>
                IPC Global (https://www.ipc-global.com) is a systems integrator
                of data, analytics, and cloud solutions. We are leveraging
                technology from AWS (https://aws.amazon.com),and Qlik
                (https://www.qlik.com).
              </p>

              <p>
                Disclaimer: IPC Global has no affiliation with the State of
                Georgia or the Georgia Census Bureau.
              </p>
            </Text>
          </Content>
        </OverviewContent>
      </Row>
    </Container>
  );
};

export default Overview;
