import { useLayoutEffect, useEffect } from 'react';

var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export { useIsomorphicLayoutEffect as default };
//# sourceMappingURL=useIsomorphicLayoutEffect.js.map
