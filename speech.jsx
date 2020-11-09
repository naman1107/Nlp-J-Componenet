import React , { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import socketIOClient from "socket.io-client";
const socket = socketIOClient('https://transtreaming-europa.herokuapp.com');


const SpeechToText = (props) => {
  const { transcript, resetTranscript, interimTranscript, finalTranscript, listening } = useSpeechRecognition()
  
  startListening();
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }
  const uid = props.uid;
  const roomid = props.roomid;
  const language = props.language;

  function startListening(){
    SpeechRecognition.startListening({ 
      
        language: props.language,
     })
  }


  if (finalTranscript.length > 0) {
      console.log(finalTranscript)
      const temp = finalTranscript;
      resetTranscript()
      console.log("TEMP", temp)
      props.onSetmyText(temp)
      const data = { 
        "roomid": roomid,
        "uid": uid,
        "src": language,
        "text": temp
        }
        socket.emit('translate', data);
  }

 

  

  

  return (null)
}
export default SpeechToText