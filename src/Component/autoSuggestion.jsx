import React, { Component } from "react";
import Autosuggest from "react-autosuggest";
import styled from "styled-components";
import { services } from "../services";

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function getSuggestions(value) {
  console.log(value);
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === "") {
    return [];
  }
  if (value.length >= 3) {
    const coCreator = await services.get(`user/searchCreator/${value}`, true);
    if (coCreator.data?.status) {
      const coCreators = coCreator.data.data;

      const regex = new RegExp("^" + escapedValue, "i");
      return coCreators.filter((creator) => regex.test(creator.username));
    } else return [];
  } else return [];
}

function renderSuggestion(suggestion) {
  // return <div style={{ padding: "10px", backgroundColor: "#fff", boxShadow: "0px 3px 5px 2px #ccc", display: "inline-block" }}>{suggestion.username}</div>
  return <div>{suggestion.username}</div>;
}

class Autosuggestion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      suggestions: [],
    };
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue,
    });
  };

  onSuggestionsFetchRequested = async ({ value }) => {
    let newSuggestion = await getSuggestions(value);
    console.log("new suggestions here", newSuggestion);
    this.props.setError(undefined, newSuggestion.length === 0, true);
    this.setState({
      suggestions: newSuggestion,
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };
  getSuggestionValue(suggestion) {
    this.props.setSuggestionValue(suggestion);
    return suggestion.username;
  }

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      value,
      name: "coCreatorUserName",
      placeholder: "Type something…",
      onChange: this.onChange,
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={(e) => this.getSuggestionValue(e)}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default Autosuggestion;
