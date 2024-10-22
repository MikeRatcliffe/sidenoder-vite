import type { Preview } from '@storybook/react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootswatch/dist/slate/bootstrap.min.css'
import '../src/renderer/src/assets/App.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
