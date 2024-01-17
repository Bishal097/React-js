import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Check from './Check.jsx'


const reelement=React.createElement(
  'a',
  {href: 'https://google.com' ,target: '_blank' },
  'click me to visit google'

)


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />,
    <Check />,
    reelement
    
   

  
)

