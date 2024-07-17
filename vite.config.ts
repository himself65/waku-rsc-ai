import type { UserConfig } from 'vite'

/** @type {import('vite').UserConfig} */
export default ({ mode }: { mode: string }) => {
  if (mode === 'development') {
    return {
      optimizeDeps: {
        include: ['ai']
      },
      ssr: {
        noExternal: ['ai']
      }
    } satisfies UserConfig
  }
  return {}
};
