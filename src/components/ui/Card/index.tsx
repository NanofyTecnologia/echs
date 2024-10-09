import dynamicIconImports from 'lucide-react/dynamicIconImports'
import dynamic from 'next/dynamic'

type Props = {
  icon: keyof typeof dynamicIconImports
  text: string
}

export default function Card({ icon, text }: Props) {
  const LucideIcon = dynamic(dynamicIconImports[icon])
  return (
    <div className="flex h-20 w-72 items-center rounded-md border-l-2 border-primary bg-white p-3 shadow-md">
      <div className="rounded-full border-2 border-primary">
        <LucideIcon className="h-auto w-8 p-[6px] text-primary" />
      </div>
      <p className="ml-3 text-dark">{text}</p>
    </div>
  )
}
