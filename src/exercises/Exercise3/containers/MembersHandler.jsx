import React, { Component } from 'react';

import S1 from '../assets/s1.png';
import S2 from '../assets/s2.png';
import S3 from '../assets/s3.png';
import Team from '../components/Team/Team';

class MembersHandler extends Component {
  state = {
    memberId: 0
  };

  componentDidMount() {
    this.intervalId = setInterval(this.handleMemberSwitch, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  handleMemberSwitch = () => {
    const members = this.props.members;
    const memberId = this.state.memberId === members.length - 1 ? 0 : this.state.memberId + 1;
    this.setState({
      memberId
    });
  };

  render() {
    const member = this.props.members[this.state.memberId];

    return (
      <section>
        <Team member={member} />
      </section>
    );
  }
}

MembersHandler.defaultProps = {
  members: [
    {
      id: 1,
      name: 'Anna Baugart',
      description: 'Programistka JS',
      imageSrc: S1
    },
    {
      id: 2,
      name: 'Marek Feliksiak',
      description: 'UX i UI Designer',
      imageSrc: S2
    },
    {
      id: 3,
      name: 'Arek Pawłowicz',
      description: 'Front - End Developer',
      imageSrc: S3
    }
  ]
};

export default MembersHandler;
