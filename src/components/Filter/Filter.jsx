import propTypes from 'prop-types';
import { FilterInput } from './Filter.style';
import { FilterLabel } from './Filter.style';


export const Filter = ({ filter, handleChange }) => (

      <FilterLabel>Find contacts by Name
      <FilterInput
        type="text"
        name="filter"
        placeholder="Enter contact"
        value={filter}
        onChange={handleChange}
      />
     </FilterLabel>

  );
  
  Filter.propTypes = {
    filter: propTypes.string.isRequired,
    handleChange: propTypes.func.isRequired,
  };