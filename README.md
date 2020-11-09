# Nlp-J-Componenet
Speech.jsx
In this file, the ‘react-speech-recognition’ module is used to implement the speech-to-text component. This component takes the input from the user microphone and then converts the input into a transcript. The microphone starts listening to the user’s voice after the startlistening() function is initialized. The language prop of startlistening function is set using the language the user had chosen before the started meeting, this property is set so that the component generates the transcript in the language the user had chosen.  Every time a transcript is created it is passed to the backend server where that transcript is converted and then broadcasted to other users after translation. 
 
index.jsx
This is the UI the project renders after entering the meeting. In this all the individual components ie speech-to-text, chatbot, and agora are imported. This file provides the UI for all the three components to appear together on screen. Cookies containing the meeting details are also set in this file which lets the user see the details of the meeting he/she is attending like the channel, video profile,etc. While implementing the components their props value is also set according to the user selection.
 
App.jsx
The main routing file of the project where two routes are creating using the ‘react-router-dom’ module. The default route is set to the index component which is the page where the user needs to enter the meeting channel and select the type of language. After entering the details the user is redirected to the other route which is the meeting where all the users can interact through videocall.

