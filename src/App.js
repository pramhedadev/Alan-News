import React, { useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'

const alanKey =
  '7fbd3a3cedb6ada4c5f24a143edffe472e956eca572e1d8b807a3e2338fdd0dc/stage'

const App = () => {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command }) => {
        if (command === 'testCommand') {
          alert('This code was executed')
        }
      },
    })
  }, [])

  return (
    <div>
      <h1>Alan AI news Application what's good </h1>
    </div>
  )
}

export default App