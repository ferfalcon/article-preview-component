export type ShareTarget = 'facebook' | 'x' | 'pinterest'

export type ShareUrls = Record<ShareTarget, string>

export interface ShareContext {
  pageUrl: string
  title: string
  imageUrl: string
  description: string
}

export interface ShareDisclosureElements {
  region: HTMLElement
  trigger: HTMLButtonElement
  panel: HTMLElement
}

export function createShareUrls({
  pageUrl,
  title,
  imageUrl,
  description,
}: ShareContext): ShareUrls {
  const encodedPageUrl = encodeURIComponent(pageUrl)
  const encodedTitle = encodeURIComponent(title)
  const encodedImageUrl = encodeURIComponent(imageUrl)
  const encodedDescription = encodeURIComponent(description)

  return {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedPageUrl}`,
    x: `https://twitter.com/intent/tweet?url=${encodedPageUrl}&text=${encodedTitle}`,
    pinterest: `https://www.pinterest.com/pin/create/button/?url=${encodedPageUrl}&media=${encodedImageUrl}&description=${encodedDescription}`,
  }
}

export function setupShareDisclosure({
  region,
  trigger,
  panel,
}: ShareDisclosureElements): () => void {
  let isOpen = !panel.hidden

  const setOpen = (open: boolean, returnFocus = false) => {
    isOpen = open
    panel.hidden = !open
    region.classList.toggle('article__share-region--open', open)
    trigger.setAttribute('aria-expanded', String(open))

    if (!open && returnFocus) {
      trigger.focus()
    }
  }

  const handleTriggerClick = () => setOpen(!isOpen)
  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && isOpen) {
      event.preventDefault()
      setOpen(false, true)
    }
  }
  const handlePointerDown = (event: PointerEvent) => {
    if (isOpen && event.target instanceof Node && !region.contains(event.target)) {
      setOpen(false)
    }
  }

  trigger.addEventListener('click', handleTriggerClick)
  document.addEventListener('keydown', handleKeydown)
  document.addEventListener('pointerdown', handlePointerDown)

  return () => {
    trigger.removeEventListener('click', handleTriggerClick)
    document.removeEventListener('keydown', handleKeydown)
    document.removeEventListener('pointerdown', handlePointerDown)
  }
}