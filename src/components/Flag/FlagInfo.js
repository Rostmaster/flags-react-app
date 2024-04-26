const FlagInfo = (props) => {

  const { id, name, population, continent, capital } = props.props
  
  return (
    <div key={id}>
      <p>Name: {name}</p>
      <p>Population: {population}</p>
      <p>Continent: {continent}</p>
      <p>Capital: {capital}</p>
    </div>
  )
}

export default FlagInfo;
