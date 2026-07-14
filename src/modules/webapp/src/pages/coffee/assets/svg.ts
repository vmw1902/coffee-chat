export function extractPathAttributes(svg: string) {
  const parser = new DOMParser()
  const doc = parser.parseFromString(svg, 'image/svg+xml')

  const path = doc.querySelector('path')
  if (!path) {
    throw new Error('No <path> found.')
  }

  return {
    d: path.getAttribute('d') ?? '',
    fill: path.getAttribute('fill'),
    stroke: path.getAttribute('stroke'),
    strokeWidth: path.getAttribute('stroke-width'),
  }
}
