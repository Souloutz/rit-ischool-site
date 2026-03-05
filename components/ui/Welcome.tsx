export default function Welcome({
  age,
  name
}: Readonly<{
  age: number,
  name: string
}>) {
  return (
    <>
      <h1>Hello {name}</h1>
      <p>You are {age} years old!</p>
    </>
  )
}