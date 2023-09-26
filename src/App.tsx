import { Github } from 'lucide-react'

import { Button } from './components/ui/button'
import { Separator } from './components/ui/separator'
import { Textarea } from './components/ui/textarea'

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ai</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Developed with 💜 in Rocketseat NLW
          </span>
          <Separator orientation="vertical" className="h-6" />
          <Button variant="outline">
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
        </div>
      </div>
      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
              className="resize-none p-5 leading-relaxed"
              placeholder="Include prompt for A.I."
            />
            <Textarea
              className="resize-none p-5 leading-relaxed"
              placeholder="Result generated from A.I."
              readOnly
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Remember: you can use variable{' '}
            <code className="text-violet-400">{'{transcription}'}</code> in your
            prompt to add selected video transcription content.
          </p>
        </div>
        <aside className="w-80"></aside>
      </main>
    </div>
  )
}
