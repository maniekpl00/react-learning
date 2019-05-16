import React from 'react';
import ExerciseList from '../../components/ExerciseList/ExerciseList';
import routeList from '../../data/routeData';
import HomeLayout from '../../layouts/HomeLayout/HomeLayout';

function HomePage() {
  return (
    <HomeLayout>
      <ExerciseList exercises={routeList} />
    </HomeLayout>
  );
}

export default HomePage;
