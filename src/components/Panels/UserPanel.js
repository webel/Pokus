import React, { Component } from 'react';
import User from 'components/User';
import Header from 'components/Header';
import Radium from 'radium';

class UserPanel extends Component {
      
  render() {
    return(
      <div style={[styles.base, styles.grid]}>
      <Header title={"Pokusing Team"} options={['assets/icons/settings.svg', 'assets/icons/teams.svg', 'assets/icons/integrations.svg']} />
        {Object.keys(users).map((user,i) =>
          <User key={i} name={users[user].name} src={users[user].src} status={users[user].status} timeLeft={users[user].timeLeft} />
        )}
      </div>
    );
  }
}

let styles = {
  base: {
    '@media (maxWidth: 800px)':{
      marginLeft: "2%",
      marginRight: "2%"
    },
      marginLeft: "10%",
      marginRight: "10%"
  },

  grid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignContent: "space-between",
    padding: "10px",
    maxWidth: "750px"
  }
};

let users = {
  user1: {
    name: 'Jo',
    src: './assets/users/users-1.svg',
    status: 'available',
    timeLeft: 4
  },
  user2: {
    name: 'Hans',
    src: './assets/users/users-2.svg',
    status: 'busy',
    timeLeft: 22
  },
  user3: {
    name: 'Mina',
    src: './assets/users/users-3.svg',
    status: 'available',
    timeLeft: 2
  },
  user4: {
    name: 'Raveena',
    src: './assets/users/users-4.svg',
    status: 'busy',
    timeLeft: 15
  },
  user5: {
    name: 'Dan',
    src: './assets/users/users-5.svg',
    status: 'busy',
    timeLeft: 21
  },
  user6: {
    name: 'Peter',
    src: './assets/users/users-6.svg',
    status: 'away',
    timeLeft: 0
  },
  user7: {
    name: 'Manu',
    src: './assets/users/users-7.svg',
    status: 'busy',
    timeLeft: 18
  },
  user8: {
    name: 'Simon',
    src: './assets/users/users-8.svg',
    status: 'available',
    timeLeft: 3
  },
  user9: {
    name: 'Egghead',
    src: './assets/users/users-9.svg',
    status: 'busy',
    timeLeft: 24
  },
  user10: {
    name: 'Prerna',
    src: './assets/users/users-10.svg',
    status: 'busy',
    timeLeft: 5
  },
  user11: {
    name: 'Bob',
    src: './assets/users/users-11.svg',
    status: 'busy',
    timeLeft: 2
  },
  user12: {
    name: 'Marie',
    src: './assets/users/users-12.svg',
    status: 'away',
    timeLeft: 0
  }
};

// <User id={users.user1} src={users.user1.src} status={users.user1.status} timeLeft={users.user1.timeLeft} />



export default Radium(UserPanel);