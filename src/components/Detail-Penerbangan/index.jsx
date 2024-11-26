
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { Link } from "@tanstack/react-router";

const DetailPenerbangan = ({ student }) => {
  return (
    <>
      <Card style={{ width: "34rem" }}>
        <Card.Img src={student?.profile_picture} />
        <Card.Body>
          <Card.Title>{student?.name}</Card.Title>
          <Card.Text>{student?.nick_name}</Card.Text>
          <Button as={Link} href={`/students/${student?.id}`} variant="primary">
            Detail Student
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

DetailPenerbangan.propTypes = {
  student: PropTypes.object,
};

export default DetailPenerbangan;
