/** Intrinsic sizes of the app screenshots (light variant) – used for width/height to avoid layout shift. */
export const SCREENS = {
  'wind-flow-map': { w: 960, h: 1197 },
  'tailwind-score': { w: 1051, h: 805 },
  'best-start-time': { w: 1015, h: 815 },
  'wind-cost': { w: 1106, h: 1056 },
  echelon: { w: 1106, h: 2287 },
} as const

export type ScreenName = keyof typeof SCREENS
