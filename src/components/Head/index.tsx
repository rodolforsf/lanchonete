interface HeadProps {
    title: string
    description?: string
  }
  
  export function Head({ title, description = '' }: HeadProps) {
    document.title = `Lanchonete Completta | ${title}`
    document.querySelector('[name=description]')?.setAttribute('content', description)
  
    return null
  }
  