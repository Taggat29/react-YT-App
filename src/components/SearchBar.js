import React, {useState} from "react";

const SearchBar = ({onFormSubmit}) => {
  
  const [term, setTerm] = useState('');

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    //TODO: Make sure we call callback from parent component
    onFormSubmit(term);
  }

  return (
    <div className="ui segment search-bar">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Search For A Video</label>
          <input
            type="text"
            value={term}
            onChange={onInputChange}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
