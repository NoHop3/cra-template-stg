export const mdBreakpoint = 960;
export const smBreakpoint = 600;

export const mediaUpTo = (key: 'desktop' | 'tablet') => {
  switch (key) {
    case 'desktop':
      return `@media (max-width: ${mdBreakpoint - 0.1}px)`;
    case 'tablet':
      return `@media (max-width: ${smBreakpoint - 0.1}px)`;
    default:
      return false;
  }
};

export const mediaDownTo = (key: 'desktop' | 'tablet') => {
  switch (key) {
    case 'desktop':
      return `@media (min-width: ${mdBreakpoint}px)`;
    case 'tablet':
      return `@media (min-width: ${smBreakpoint}px)`;
    default:
      return false;
  }
};

export const mediaOnly = (key: 'desktop' | 'tablet' | 'mobile') => {
  switch (key) {
    case 'desktop':
      return `@media (min-width: ${mdBreakpoint}px)`;
    case 'tablet':
      return `@media (min-width: ${smBreakpoint}px) and (max-width: ${mdBreakpoint - 0.1}px)`;
    case 'mobile':
      return `@media (max-width: ${smBreakpoint - 0.1}px)`;
    default:
      return false;
  }
};
