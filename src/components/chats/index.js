import React, { useState } from 'react'
import DisplayMessageBox from './Message'

const DisplayChatPage = () => {
    const [contact, setContactOpen] = useState(false)
  return (
    <div className='chats'>
        {contact && <DisplayMessageBox setContactOpen={setContactOpen} />}
      <div className='chats__section'>
        <div className='chats__wrapper'>
            <div className='chats__container' onClick={() => setContactOpen(true)}>
                <span class="material-symbols-outlined">
                    chat
                </span>
                <span className='chats__container-label'>Contact Us</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DisplayChatPage
