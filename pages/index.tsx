type Props = {
  title: string
}

export default function Home({ title = 'Vince' }: Props) {
  return <div>Hello {title}</div>
}
