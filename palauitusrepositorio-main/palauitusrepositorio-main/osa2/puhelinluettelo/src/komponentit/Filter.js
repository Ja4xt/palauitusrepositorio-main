/*
JM fullstackopen 2023 
*/
const Filter = ({ filter, filterByName }) => {
    return (
      <p>
        filter shown with <input value={filter} onChange={filterByName} />
      </p>
    );
  };
  
  export default Filter;