import { CommunicationContext } from '@/context/communication'
import { useContext, useEffect, useRef } from 'react'
import { SendIcon } from './Icons'
import { Loading } from './Loading'

export function Prompt() {
  const inputRef = useRef()
  const { communication, setCommunication } = useContext(CommunicationContext)
  const { streaming, prompt, language, framework } = communication

  async function handleSubmit(event) {
    event.preventDefault()
    //generateComponent({ prompt })
    generateOutput()
  }

  const generateOutput = async () => {
    setCommunication({ ...communication, streaming: true })

    const url = `/api/generate?prompt=${prompt}&language=${language}&framework=${framework}`

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const { content } = await response.json()
    setCommunication({ ...communication, streaming: false, output: content })
    /*
    const eventSource = new EventSource(url)
    let code = ''

    eventSource.onerror = (error) => {
      console.error(error)
      eventSource.close()
      setCommunication({ ...communication, streaming: false })
    }

    eventSource.onmessage = (event) => {
      const { data } = event

      if (data === '[DONE]') {
        setCommunication({ ...communication, streaming: false })

        eventSource.close()
        return
      }

      code += JSON.parse(data)
      setCommunication({ ...communication, output: code })
    }
    */
  }

  useEffect(() => {
    inputRef.current.focus()
    console.log('pagina cargada', communication)
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative block">
        <input
          value={prompt}
          onChange={(event) => {
            const { value } = event.target
            setCommunication({ ...communication, prompt: value })
          }}
          disabled={streaming}
          ref={inputRef}
          autoFocus
          placeholder="Crea un botón de color rojo con un borde de 2px y un borde redondeado de 5px."
          rows={1}
          name="prompt"
          type="text"
          className={`resize-none pr-10 ${
            streaming ? 'opacity-40 pointer-events-none' : ''
          } placeholder-white/30 rounded-2xl block w-full text-md px-6 text-xl py-4 border border-zinc-600 bg-white/5 backdrop-blur-3xl sm:text-md shadow-lg text-white outline-none overflow-hidden transition ring-white/40 focus:ring-2`}
        />
        <div className="absolute top-0 flex items-center justify-center h-full right-4">
          {streaming ? (
            <Loading />
          ) : (
            <button className="transition-all hover:scale-125" type="submit">
              <SendIcon />
            </button>
          )}
        </div>
      </div>
    </form>
  )
}
