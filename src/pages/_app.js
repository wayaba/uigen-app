import { CommunicationProvider } from '@/context/communication'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <CommunicationProvider>
      <Component {...pageProps} />
    </CommunicationProvider>
  )
}
