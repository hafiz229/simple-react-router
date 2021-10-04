import React from "react";
import { Link, useHistory } from "react-router-dom";

const Friend = (props) => {
  // destructuring
  const { id, name, phone, website, address } = props.friend;
  const friendStyle = {
    border: "3px solid goldenrod",
    padding: "10px",
    borderRadius: "10px",
  };

  // dynamic friend url creation
  const url = `/friend/${id}`;
  const history = useHistory();

  const handleFriendClick = () => {
    history.push(`/friend/${id}`);
  };

  return (
    <div style={friendStyle}>
      <h2>
        I'm {name} {id}
      </h2>
      <h5>Call me: {phone}</h5>
      <p>Visit me: {website}</p>
      <p>
        <small>I live in: {address.city}</small>
      </p>
      <Link to={url}>Visit Me</Link>
      <br></br>
      <Link to={url}>
        <button>Visit Me</button>
      </Link>
      <br></br>
      <button onClick={handleFriendClick}>Visit Me 2</button>
    </div>
  );
};

export default Friend;
