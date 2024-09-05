import { AI } from '../ai/provider'
import { Chat } from './chat'
import { TooltipProvider } from './ui/tooltip'

const App = () => {
  return (
    <html>
    <head>
      <title>Waku AI example</title>
    </head>
    <body>
    <TooltipProvider>
      <AI>
        <Chat/>
      </AI>
    </TooltipProvider>
    </body>
    </html>
  )
}

export default App