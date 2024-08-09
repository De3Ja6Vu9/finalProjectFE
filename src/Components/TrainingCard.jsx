import { Link } from "react-router-dom";

function TrainingCard(props) {
  const { training } = props;

  return (
    <article>
      <h2>{training.training}</h2>
      <h3>Instructor: {training.instructor.instructor}</h3>
      <p>GYM: {training.gym}</p>
      <p>Training time: {training.hours}</p>
      <p>Training duration:{training.duration}</p>
    </article>
  );
}

export default TrainingCard;