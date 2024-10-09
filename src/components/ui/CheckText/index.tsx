import { Check } from 'lucide-react'

export default function CheckText({ text }: { text: string }) {
  return (
    <div className="flex items-center">
      <Check className="text-primary" />
      <p className="ml-2">{text}</p>
    </div>
  )
}
