import React from "react";
import styled from "styled-components";
import TwitterTimeline from "../../shared/TwitterTimeline";
import { useSelector } from "react-redux";
import { Row, Col } from "antd";

const StyledTimelineContainer = styled.div`
  padding: 40px;

  .ant-col {
    margin: 20px 0;
  }
`;

const HomePage = () => {
  const accounts = useSelector((store) => store.user.userInfo.followedAccounts);
  return (
    <StyledTimelineContainer>
      <Row gutter={24}>
        {accounts.map((account) => {
          return (
            <Col key={account._id} xl={6}>
              <TwitterTimeline accountName={account.name} />
            </Col>
          );
        })}
      </Row>
    </StyledTimelineContainer>
  );
};

export default HomePage;
