import { useState } from "react"
/////////////////////////////////////////////
function CreateLeader(props) {
    const { createLeader } = props;

    const [leader, setLeader] = useState("");
    const [location, setLocation] = useState("");
    const [type, setType] = useState("");
    const [badge, setBadge] = useState("");
    const [level, setLevel] = useState("");
    const [img, setImg] = useState("");
////////////////////////////////////////////////
    const handleBadgeInput = (e) => {
        setBadge(e.target.value);
    };

    const handleTypeInput = (e) => {
        setType(e.target.value);
    };
    const handleLocationInput = (e) => {
        setLocation(e.target.value);
    };

    const handleLeaderInput = (e) => {
        setLeader(e.target.value);
    };

    const handlelevelInput = (e) => {
        setLevel(e.target.value);
    };

    const handleImgInput = (e) => {
        setImg(e.target.value);
    };
///////////////////////////
    // create new object need to bee same values as original
    const handleSubmit = (e) => {
        e.preventDefault();
        const Leader = {
            leader: leader,
            location: location,
            type: type,
            badge: badge,
            level: level,
            img: img
          }
        console.log(Leader);

        createLeader(Leader);
        
/////////////reset//////////////////
        setLeader("");
        setLocation("");
        setType("");
        setBadge("");
        setLevel(0);
        setImg("");
    }
////////////////////////////////////////////////
    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label htmlFor="leader-leader">Leader name:</label>
                <input
                    type="text"
                    id="Leader-leader"
                    onChange={handleLeaderInput}
                    value={leader} />
            </fieldset>
            <fieldset>
                <label htmlFor="leader-level">Leader Level:</label>
                <input
                    type="text"
                    id="Leader-level"
                    onChange={handlelevelInput}
                    value={level} />
            </fieldset>
            <fieldset>
                <label htmlFor="leader-location">Leader Location:</label>
                <input
                    type="text"
                    id="Leader-location"
                    onChange={handleLocationInput}
                    value={location} />
            </fieldset>
            <fieldset>
                <label htmlFor="leader-type">Leader Type:</label>
                <input
                    type="text"
                    id="Leader-type"
                    onChange={handleTypeInput}
                    value={type} />
            </fieldset>
            <fieldset>
                <label htmlFor="leader-badge">Leader Badge:</label>
                <input
                    type="text"
                    id="Leader-badge"
                    onChange={handleBadgeInput}
                    value={badge} />
            </fieldset>
            <fieldset>
                <label htmlFor="leader-img">Leader Img:</label>
                <input
                    type="text"
                    id="Leader-img"
                    onChange={handleImgInput}
                    value={img} />
            </fieldset>
            <button>Create Leader</button>
        </form>
    );
}

export default CreateLeader