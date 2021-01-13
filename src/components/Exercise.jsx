import React from "react";

    //Props from ExerciseContainer
    const Exercise = ({
        name,
        img,
        subtractExercise,
        addExercise,
        exercises,
    }) =>{



    return(
            <div className="individual-exercise-container">
                <p>{name}</p>
                <img src={img} alt="img"></img>
                <div className="buttons">
                    <button name={name} onClick={(e)=>subtractExercise(e)}>
                        - 
                    </button>
                    
                    <button name={name} onClick={(e)=>addExercise(e)}>
                        +
                    </button>
                </div>
            </div>
    );
};

export default Exercise;