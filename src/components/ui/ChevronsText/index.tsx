import { ChevronsRight } from 'lucide-react'

export default function ChevronsText({ text }: { text: string }) {
  return (
    <div className="flex items-center">
      <ChevronsRight className="text-primary" />
      <p className="ml-2">{text}</p>
    </div>
  )
}
