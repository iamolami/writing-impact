import React from 'react'
import DisplayTextContent from './TextContent'
import GraphicsContent from './GraphicsContent'
import Translations from './Translations'
import VideoContent from './VideoContent'
import AudioContent from './AudioContent'
import Transcriptions from './Transcriptions'

const DisplayService = () => {
  return (
    <div className='services'>
      <DisplayTextContent />
      <GraphicsContent />
      <Translations />
      <VideoContent />
      <AudioContent />
      <Transcriptions />
    </div>
  )
}

export default DisplayService
