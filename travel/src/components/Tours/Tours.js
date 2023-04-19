function Tours(props) {
  return (
    <div>
      {props.arrayData.map((item , i) => {
        return (
          <div className="tstyle">
            <h3 className="namestyle">{item.name}</h3>
            <img className="imgstyle" src={item.image} alt="error" />
          </div>
        );
      })}
    </div>
  );
}

export default Tours;
