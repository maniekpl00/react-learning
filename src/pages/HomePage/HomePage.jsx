import React from 'react';
import ExerciseList from '../../components/ExerciseList/ExerciseList';
import routeList from '../../data/routeData';

function HomePage() {
  return <ExerciseList exercises={routeList} />;
}

export default HomePage;
