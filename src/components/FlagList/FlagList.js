import Flag from "../../Flag/Flag";

const FlagList = (props) => {
  return (
    <div className="flag-list">
      {props.flags
      .filter(flag => flag.flag_info.population >= props.filter)
      .map(flag => <Flag
        key={flag.flag_info.id}
        image={flag.image}
        flag_info={flag.flag_info}
        delete_flag={props.delete_flag} />
      )}
    </div>
  )
}
export default FlagList;