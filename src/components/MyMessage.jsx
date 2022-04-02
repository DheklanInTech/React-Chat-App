

import React from 'react'

const MyMessage = ({message}) => {
    // console.log(message)

    if(message?.attachments?.length > 0){
        return(
            <img 
              src={message.attachments[0].file}
              alt='message- attachment'
              className='message-image'
              style={{float: 'right'}}
            />
        )
    }
  return (
    <div className='message' style={{float: 'right', marginRight:'18px', color: '#371d31', backgroundColor: '#edd1cb'}}>
         {message.text}
    </div>
  )
}

export default MyMessage