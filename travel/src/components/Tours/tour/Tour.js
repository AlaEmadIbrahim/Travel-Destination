import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./Tour.css"
function Tour(props) {
    
  return (
    <>
      <div className="Des">
        <Link to={`/city/${props.tour.id}`}>
          <Card>
            <Card.Img variant="top" src={props.tour.image} />
            <Card.Body>
              <p>
                <br></br>
              </p>
              <Card.Title> Name of city: {props.tour.name}</Card.Title>
              <p>
                <br></br>
              </p>
            </Card.Body>
          </Card>
        </Link>
      </div>
    </>
  );
}
export default Tour;
