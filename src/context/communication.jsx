import { createContext, useState } from 'react'

export const CommunicationContext = createContext()

export const CommunicationProvider = ({ children }) => {
  const [communication, setCommunication] = useState({
    output: null,
    language: 'javascript', // typescript or javascript
    framework: 'vanilla', // react, vue, angular, vanilla
    streaming: false,
    prompt: '',
  })
  return (
    <CommunicationContext.Provider value={{ communication, setCommunication }}>
      {children}
    </CommunicationContext.Provider>
  )
}
