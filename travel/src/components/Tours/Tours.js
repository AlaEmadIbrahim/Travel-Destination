import "./Tours.css";
function Tours(props) {
  return (
    <div>
      {props.arrayData.map((item, i) => {
        return (
          <div className="style1">
            <h3 className="style2">{item.name}</h3>
            <img className="style3" src={item.image} alt="error" />
          </div>
        );
      })}
    </div>
  );
}

export default Tours;
