import React, { useState }from 'react';
import GoalList from './components/GoalList/GoalList';
import "./App.css";
import NewGoal from './components/NewGoal/NewGoal';
const App = () => {

  const [courseGoals, setCourseGoals] = useState ([
    {id: 'cg1' , text:'Finishn the course'},
    {id: 'cg2' , text:'Learn about the course main topic'},
    {id: 'cg3' , text:'Help other student in the course'}
  ]);

  const addNewGoalHandler = (newGoal) => {
    //setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals((prevCourseGoals)=>{
      return prevCourseGoals.concat(newGoal);
    });
  };
  return (<div className="course-goals">
    <h1>MERN STACK COURSE</h1>
    <h2> Course Goals</h2>
    <NewGoal onAddGoal = {addNewGoalHandler} />
    <GoalList goals={courseGoals}/>
  </div>);
};

export default App;
