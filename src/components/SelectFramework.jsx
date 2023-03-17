import { CommunicationContext } from '@/context/communication'
import { useContext } from 'react'
import { ReactIcon, VueIcon, SvelteIcon, JavaScriptIcon } from './Icons'

const FRAMEWORKS = [
  {
    name: 'Vanilla',
    icon: <JavaScriptIcon />,
    value: 'vanilla',
  },
  {
    name: 'React',
    icon: <ReactIcon />,
    value: 'react',
  },
  {
    name: 'Vue',
    icon: <VueIcon />,
    value: 'vue',
  },
  {
    name: 'Svelte',
    icon: <SvelteIcon />,
    value: 'svelte',
  },
]

export function SelectFramework() {
  const { communication, setCommunication } = useContext(CommunicationContext)
  const { framework } = communication
  return (
    <ul className="flex gap-x-2 items-center justify-center">
      {FRAMEWORKS.map(({ name, value, icon }) => (
        <li key={value} className="w-10 h-10">
          <label>
            <input
              defaultChecked={framework === value}
              className="peer"
              hidden
              type="radio"
              name="framework"
              value={value}
              onClick={() =>
                setCommunication({ ...communication, framework: value })
              }
            />
            <span className="peer-checked:opacity-100 hover:opacity-75 hover:scale-125 transition cursor-pointer opacity-40">
              {icon}
            </span>
          </label>
        </li>
      ))}
    </ul>
  )
}
