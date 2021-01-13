import React,{useState} from "react";
import ExerciseContainer from "./ExerciseContainer"
import "../css/App.css"

const App = () =>{
  //Default not show exercise display
  // const [showExercises, setShowExercises] = useState(false);

  //Exercises to sum
  const[exercises, setExercises] = useState({
    Plank:0,
    Crunches:0,
    "Russian Twist":0,
    "Mountain Climbers":0,
    "Reverse Crunches":0,
    "Bicycle Crunches": 0,
    "Side Plank":0,
    "Heel touch": 0,
    Burpees:0,
    "Inch Worms": 0,
    "Superman": 0,
    "Squats":0,
    "Push Ups":0,
    "Leg Raises": 0,
    "Lunges":0,
    "Side Lunges":0,
    Attitude:0,
    "Glute Bridges": 0,
    "Bridge Leg Raise": 0,
    "Donkey Kicks": 0,
    "Step-up":0,
    "Wall Sit": 0,
    "Diamond Leg Lifts": 0,
    "Hydrant Leg Lifts": 0,
    "Arm Circle":0,
    "Triceps Dip": 0,
    "Lateral Arm Raise": 0,
    "Plank Jack": 0,
  })

  //A toggle to activate the orders modal or not
/*   const showExercisesModal = ()=>{
    setShowExercises(!showExercises);
  } */

  //Increment selected exercise by 15
  const addExercise = (e)=>{
    setExercises({...exercises, [e.target.name]: exercises[e.target.name] +15})
  }

  //Decrement selected exercise by 15
  const subtractExercise = (e)=>{
    setExercises({...exercises, [e.target.name]: exercises[e.target.name]-15})
  }

  // *************RETURN
  return(
    <main>
        <ExerciseContainer 
          subtractExercise={subtractExercise}
          addExercise={addExercise}
          exercises = {exercises}
        />
    </main>

  )
}

export default App;

