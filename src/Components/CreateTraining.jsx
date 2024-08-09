import { useState } from "react";

function CreateTraining(props) {
  const { createTraining } = props;

  const [training, setTraining] = useState("");
  const [hours, setHours] = useState(0);
  const [gym, setGym] = useState("");
  const [duration, setDuration] = useState("");
  const [instructor, setInstructor] = useState(0);


  const handleTrainingInput = (e) => {
    setTraining(e.target.value);
  };

  const handleHoursInput = (e) => {
    setHours(e.target.value);
  };

  const handleGymInput = (e) => {
    setGym(e.target.value);
  };

  const handleDurationInput = (e) => {
    setDuration(e.target.value);
  }

  const handleInstructorInput = (e) => {
    setInstructor(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTraining = {
      training: training,
      hours: hours,
      gym: gym,
      duration: "",
      instuctor: {
        id: instructor
      }
    }

    if (!newTraining.training) {
      console.log("Training shouldn't be empty");
      return;
    }
    createTraining(newTraining);

    setTraining("");
    setHours(0);
    setGym("");
    setDuration("");
    setInstructor(0);
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="training">Training: </label>
        <input
          type="text"
          id="training"
          onChange={handleTrainingInput}
          value={training}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="training-hours">Hours: </label>
        <input
          type="number"
          id="training-hours"
          onChange={handleHoursInput}
          value={hours}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="training-gym">Gym: </label>
        <input
          type="text"
          id="course-gym"
          onChange={handleGymInput}
          value={gym}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="training-duration">Duration: </label>
        <input
          type="text"
          id="course-duration"
          onChange={handleDurationInput}
          value={duration}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="training-instructor">Instructor: </label>
       <input
        type="number"
        id="training-instructor"
        onChange={handleInstructorInput}
        value={instructor}
        />
      </fieldset>
      <button>Create Training</button>
    </form>
  );
}

export default CreateTraining;
