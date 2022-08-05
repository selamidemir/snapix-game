import React from 'react'

function GameWaiting() {
  return (
    <div className='fw-bolder fs-4 text-success p-3 bg-light rounded shadow mb-3 text-center' style={{maxWidth: '350px'}}>Choose a stone and then find its mate. If the pieces match, you will get 50 points. You will lose 10 points for every wrong match. <br /> Start the game now.</div>
  )
}

export default GameWaiting;