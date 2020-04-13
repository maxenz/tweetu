import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "antd";
import API from "../../api";
import useDebounce from "../../hooks/useDebounce";
import TwitterCard from "../../shared/TwitterCard";
import InputSearch from "./InputSearch";
import * as actions from "../../actions/user";

const ConfigurationPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const dispatch = useDispatch();
  const favouriteAccounts = useSelector(
    (store) => store.user.userInfo.followedAccounts
  );
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    const fetchResults = async () => {
      setIsSearching(true);
      const { data } = await API.search.searchAccounts(debouncedSearchTerm);
      setIsSearching(false);
      setResults(data);
    };
    if (debouncedSearchTerm) {
      fetchResults();
    } else {
      setResults([]);
    }
  }, [debouncedSearchTerm]);

  const onFavouriteAccount = async (account) => {
    const {
      screen_name: name,
      id: account_id,
      description,
      followers_count: followers,
      friends_count: followed_by,
    } = account;

    const accountInfo = {
      account_id,
      description,
      followers,
      followed_by,
      name,
    };

    dispatch(actions.toggleFavouriteAccount(accountInfo));
  };

  return (
    <div style={{ padding: "40px" }}>
      <InputSearch
        setSearchTerm={setSearchTerm}
        inputRef={inputRef}
        isSearching={isSearching}
      />
      <Row gutter={40}>
        {results.map((account) => (
          <Col
            className="gutter-row"
            key={account.id}
            xs={24}
            sm={24}
            md={12}
            lg={8}
            xl={6}
          >
            <TwitterCard
              favourited={favouriteAccounts.find(
                (x) => x.account_id === account.id
              )}
              account={account}
              onFavouriteAccount={() => onFavouriteAccount(account)}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ConfigurationPage;
