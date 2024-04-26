import './FilterSection.css';

const FilterSection = (props) => {

  return (
    <div className="filter-section">
      Filter:  <input name="filter" type="number" placeholder="Filter by population" onChange={props.filter_change} />
    </div>
  )
}

export default FilterSection;