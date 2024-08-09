import { useEffect, useState } from "react";
import HeaderComponent from "../Components/HeaderComponent";
import TrainingCard from "../Components/TrainingCard";
import CreateTraining from "../Components/CreateTraining";



function TrainingPage() {
    const [training, setTraining] = useState([]);

    const getTraining = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/training");
            const data = await response.json();
            console.log(data);
            setTraining(data);
        } catch (e) {
            console.log(e);
        }
    };

    ///////////////////////POST///////////////////////////
    const createTraining = async (newTraining) => {

        try {
            console.log(JSON.stringify(newTraining));
            await fetch("http://localhost:8080/api/training", {
                method: "POST",
                body: JSON.stringify(newTraining),
                headers: {
                    "Content-Type": "application/json",
                }
            })


            getTraining();
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getTraining();
    }, []);
    const trainingList = training.map((training) => {
        return (
            <li key={training.training}>
                <TrainingCard training={training}></TrainingCard>
            </li>
        );
    });

    return (
        <>
            <HeaderComponent style={{ width: '100%', height: '100vh' }} />
            <section>
                <h2 style={{ backgroundColor: 'salmon', color: 'white', padding: 10 }}>Training Creation</h2>
                <CreateTraining style={{ padding: 10, }} createTraining={createTraining} />

                <ul style={{ listStyle: 'disc', padding: 30, backgroundColor: 'salmon' }}>{trainingList}</ul>
            </section>
        </>
    );
}

export default TrainingPage;
