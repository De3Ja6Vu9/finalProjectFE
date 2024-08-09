import LeaderCard from "./LeaderCard"
import "./LeaderList.css"

import brockImg from "../assets/brock.jpg";
import mistyImg from "../assets/misty.jpg";
import surgeImg from "../assets/surge.jpg";
import erikaImg from "../assets/erika.jpg";
import { useState } from "react";


function LeaderList() {
  const LeaderData = [
    {
      leader: "Brock",
      location: "Pewter City",
      type: "Rock",
      badge: "Boulder Badge",
      level: 15,
      img: brockImg
    },
    {
      leader: "Misty",
      location: "Cerulean City",
      type: "Water",
      badge: "Cascade Badge",
      level: 20,
      img: mistyImg
    },
    {
      leader: "Lt.Surge",
      location: "Vermillion City",
      type: "Electric",
      badge: "Thunder Badge",
      level: 25,
      img: surgeImg
    },
    {
      leader: "Erika",
      location: "Celadon City",
      type: "Grass",
      badge: "Rainbow Badge",
      level: 30,
      img: erikaImg
    },
  ];

  ///////////////////////linked and proped in card too//////////////////////
  const deleteLeader = (LeaderToDelete) => {
    const filteredLeaders = Leader.filter(
      (Leader) => Leader.leader !== LeaderToDelete.leader
    );

    
    setLeader(filteredLeaders);
  };

  // create LEADER methoD


  const [Leader, setLeader] = useState(LeaderData);

//   ///////////RENDERING////////////////
//   useEffect(() => {
//     console.log("Leader list component mounted");
//   }, [])

//   useEffect(() => {
//     console.log("Leader state variable updated");
//   }, [Leader])
// /////toggle unmount
//   useEffect(() => {
//     return () => {
//        console.log("Leader List component unmounted");
//     }
//   }, [])
//   ////////////////////////////////////

  const leaderCards = Leader.map((Leader) => {
    return (
      <LeaderCard
        leader={Leader}
        deleteLeader={deleteLeader}
        key={Leader.leader}>
      </LeaderCard>
    );
  });



  return (
    <section className="leader-section">
      
      <h2>Leaders:</h2>
      <h3>level 1-50</h3>
      <ul className="leader-list">
        {leaderCards}
      </ul>
    </section>
  );
}


export default LeaderList;