import "./LeaderCard.css"

function LeaderCard(props) {
    const {leader, deleteLeader} = props;

  return (
    <li className="leader-card">
    <h3>{leader.leader}</h3>
    <img src={leader.img} alt="picture img" className="leader-image"/>
    <p>Type: {leader.type}</p>
      {/* <button onClick = {()=> deleteLeader(leader)}>Delete</button> */}
    <p>Level</p>
    <p>{leader.level}</p>
  </li>
  );
}

export default LeaderCard;