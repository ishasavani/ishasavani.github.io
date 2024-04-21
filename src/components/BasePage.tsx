import { type ReactNode } from 'react'

export interface BasePageProps {
  title: string
  children?: ReactNode
}

export default function BasePage({ title, children }: BasePageProps) {
  return (
    <div className="pt-10 flex flex-col w-full">
      <h2 className="place-self-center pr-96">{title}</h2>
      <div className="mt-10 max-w-prose place-self-center">{children}</div>
    </div>
  )
}
