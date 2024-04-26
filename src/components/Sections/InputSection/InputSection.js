import './InputSection.css';

const InputSection = (props) => {

  return (
    <div className="input-section">
      <input name="name" type="text" placeholder="Country name" onChange={props.input_change} />
      <input name="population" type="text" placeholder="Population" onChange={props.input_change} />
      <input name="continent" type="text" placeholder="Continent" onChange={props.input_change} />
      <input name="capital" type="text" placeholder="Capital" onChange={props.input_change} />
      {/* <input name="src" type="text" placeholder="Flag URL" onChange={props.input_change} /> */}

      <button onClick={props.add_flag}>Add Country</button>
    </div>
  )
}

export default InputSection;