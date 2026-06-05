'use client';

import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';

export default function ScrollProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={{ duration: 1.4, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
