import FlagInfo from "./FlagInfo";
import './Flag.css'

const Flag = (props) => {

  return (
    <div className="flag" key={props.flag_info.id}>
      <img src={props.image.src} alt={props.image.name} />
      <FlagInfo props={props.flag_info} />
      <button onClick={() => { props.delete_flag(props.flag_info.id) }}>X</button>
    </div>
  )
}

export default Flag;