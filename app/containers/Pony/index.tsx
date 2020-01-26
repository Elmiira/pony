import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { createMaze } from './api/ponyServices';

function Pony() {
  const [currentState, setCurrentState] = useState({});

  useEffect(() => {
    startMaze('Pinkie Pie');
  }, []);

  useEffect(
    () => () => {
      console.log('Unmounting TODO: abort webapi ... ');
    },
    [],
  );


  const startMaze = async (playerName: string) => {
    console.log('name is ', playerName);
    try {
      console.log('به نام خدا');
      const res = await createMaze(playerName);
      console.log('Res is ', res);
      if (res) {
        setCurrentState(res);
      }
    } catch (error) {
      console.log('in error ', error);
    }
  };

  return (
    <article>
      <Helmet>
        <title>Pony Game</title>
        <meta
          name="description"
          content="Start Page of React.js Boilerplate application"
        />
      </Helmet>
      <div>
        Start Game! ;)
    </div>
      </article>
      );
    }
export default Pony;
