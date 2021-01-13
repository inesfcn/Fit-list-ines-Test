import React from "react";
import ExercisesModal from "./ExercisesModal"
import Exercise from "./Exercise"
import fitnessData from "../data/fit_data"

//We receive the props from the app

const ExerciseContainer = ({
    showExercises, subtractExercise, addExercise, exercises}) =>{
    //Map through the data array and grab everything, and then pass to the Exercise component + the counter methods
    const exerciseList = fitnessData.map((info)=>(
        <Exercise
            name={info.name}
            img={info.img}
            subtractExercise={subtractExercise}
            addExercise={addExercise}
            exercises={exercises}
            // showExercises={showExercises}
        />

    ));
    return(
        <div class="exercises-main">
            <section className="exercise-list">
                <div className="individual-exercise">
                    {exerciseList}
                </div>
            </section>
            <section className="exercise-modal">
                <ExercisesModal exercises={exercises}/>
            </section>
        </div>
    )
}

export default ExerciseContainer;