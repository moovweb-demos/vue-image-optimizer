// This file was added by layer0 init.
// You should commit this file to source control.

import { Router } from '@layer0/core/router'

export default new Router()

  .noIndexPermalink()
  // Send requests to static assets in the build output folder `dist`
  .static('dist')

  // Send everything else to the App Shell
  .fallback(({ appShell }) => {
    appShell('dist/index.html')
  })
