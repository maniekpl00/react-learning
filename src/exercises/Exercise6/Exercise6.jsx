import React from 'react';
import ExerciseLayout from '../../layouts/ExerciseLayout/ExerciseLayout';
import withTranslation from './hoc/withTranslation/withTranslation';
import LanguageHandler from './containers/LanguageHandler/LanguageHandler';

const Exercise6 = () => {
  return (
    <ExerciseLayout>
      <LanguageHandler />
    </ExerciseLayout>
  );
};

export default withTranslation(Exercise6);
