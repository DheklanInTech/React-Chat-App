 import { PictureInPictureOutlined, SendOutlined } from '@mui/icons-material';
import {useState } from 'react'
 import {sendMessage, isTyping } from 'react-chat-engine';

const MessageForm = (props) => {
    const [value, setValue] = useState('');
    const {chatId, creds} = props;
  
    const handleSubmit = (event) => {
        event.preventDefault();

        const text = value.trim();
        
        if(text.length > 0) sendMessage(creds,chatId, { text})

      setValue('')
    }
    const handleChange = (event) => {

     setValue(event.target.value);
     isTyping(chatId,props)
    }

    const handleUpload = (event) => {
      
        sendMessage(creds,chatId, { files: event.target.files, text: '' })
    }

    return (
       <form className='message-form' onSubmit={handleSubmit}>
           <input
           className="message-input"
           placeholder="send a message... "
           value={value}
           onChange={handleChange}
           onSubmit={handleSubmit}
           />
           <label htmlFor="upload-button">
               <span className='image-button'>
                   <PictureInPictureOutlined className='picture-icon'/>
               </span>
           </label>
           
           <input
            type='file'
            multiple={false}
            id='upload-button'
            style={{display : 'none'}}
            onChange={handleUpload}
           />
           <button>
               <SendOutlined className='send-button'/>
           </button>

       </form>
    )
}
export default MessageForm;