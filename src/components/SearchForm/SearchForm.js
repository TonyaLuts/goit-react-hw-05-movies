import { FormField, FormInput, TextKeyword } from './SearchForm.styled';

const SearchForm = ({ query, setSearchParams }) => {
  const updateQueryString = e => {
    if (e.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <FormField onSubmit={handleSubmit}>
      <TextKeyword>Search for a movie by keyword</TextKeyword>
      <FormInput
        type="text"
        autoComplete="off"
        autoFocus
        name="query"
        value={query}
        onChange={updateQueryString}
      />
    </FormField>
  );
};

export default SearchForm;
