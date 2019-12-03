import React from "react";

const Card = props => {
  const { avatar_url, name, login, location } = props.i;

  return (
    <div className="card">
      <img src={avatar_url} alt={name} />
      <h2>{name}</h2>
      <h4>{login}</h4>
      <p>{location}</p>
      <h3>Followers: {props.followers.length}</h3>
      {props.followers.map(i => (
        <p key={i.id}>{i.login}</p>
      ))}
    </div>
  );
};

export default Card;
