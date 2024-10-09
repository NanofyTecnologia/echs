import { Check } from 'lucide-react'

type Props = {
  text: string
  title?: string
}

export default function CheckText({ text, title }: Props) {
  return (
    <div className="flex items-start">
      <div>
        <Check className=" mt-[2px] h-auto w-6 text-primary" />
      </div>
      <p className="ml-2">
        <strong>{title}</strong> {text}
      </p>
    </div>
  )
}
