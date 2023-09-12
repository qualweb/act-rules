---
'@qualweb/act-rules': patch
---

Puppeteer in unit tests should be headless.

This changes the launch arguments for puppeteer so that it is headless unless the env var `PUPPETEER_HEADLESS` is set otherwise.
