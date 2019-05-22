import React from 'react';
import ExerciseLayout from '../../layouts/ExerciseLayout/ExerciseLayout';
import withTranslation from './hoc/withTranslation/withTranslation';
import { FormattedMessage } from 'react-intl';

const Exercise6 = () => {
  return (
    <ExerciseLayout>
      <FormattedMessage id="app.welcome.title" />
    </ExerciseLayout>
  );
};

export default withTranslation(Exercise6);
