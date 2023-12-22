import React from 'react'
import styled, {keyframes} from 'styled-components'
import {Authcontext} from '../Context/AuthcontextProvider'

const getRandomColor = index => {
  const colors = [
    'blue',
    'green',
    'yellow',
    'aqua',
    'black',
    'orange',
    'white',
    'tomato',
    'gray',
    'darkblue',
  ]
  return colors[index - 1] || 'red'
}

function Race() {
  const {userData} = React.useContext(Authcontext)
  console.log(userData)

  const Players = userData.map((item, index) => (
    <Player key={item.id} index={index + 1} />
  ))

  return (
    <div className="race">
      {userData.map((item, index) => (
        <div className={`track${userData.length - index}`} key={item.id} />
      ))}

      <div className="race__container_outline" />
      <div className="race__container_CenterPart">
        <h2>Elapsed Time</h2>
        <h2>02:00</h2>
        <div>
          <p>Track length 400m</p>
        </div>
      </div>
      {Players}
    </div>
  )
}

const identifier = index => keyframes`
  0% {
    transform: rotate(0deg) translate(${index * 20}px);
  }
  100% {
    transform: rotate(360deg) translate(${index * 20}px, 0);
  }
`

const Player = ({index}) => <StyledPlayer index={index} />

const StyledPlayer = styled.div.attrs(props => ({
  style: {
    transform: `translate(${props.index * 20}px)`,
  },
}))`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  position: absolute;
  background: ${props => getRandomColor(props.index)};
  top: calc(50% - 12px / 2);
  left: calc(50% - 12px / 2);
  animation: ${props => identifier(props.index)} 15s linear 1;
`

export default Race
