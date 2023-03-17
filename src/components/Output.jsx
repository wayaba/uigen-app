import { CommunicationContext } from '@/context/communication'
import { useContext } from 'react'

export function Output() {
  const { communication } = useContext(CommunicationContext)
  const { output } = communication

  return (
    <section className="mb-20 animate-fadeIn text-center text-white">
      <h3 className="pt-20 pb-10 text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-purple-400">
        Resultado
      </h3>
      <div>{output}</div>
    </section>
  )
}
