import React from "react";
import { Input, Row, Col } from "antd";

const { Search } = Input;

const InputSearch = ({ setSearchTerm, inputRef, isSearching }) => {
  return (
    <div>
      <Row>
        <Col xs={24} sm={24} md={12}>
          <Search
            placeholder="Ingresa el usuario de twitter a buscar"
            loading={isSearching}
            enterButton
            onChange={(e) => setSearchTerm(e.target.value)}
            ref={inputRef}
          />
        </Col>
      </Row>
    </div>
  );
};

export default InputSearch;
