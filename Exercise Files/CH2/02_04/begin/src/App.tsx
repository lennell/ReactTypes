import './App.css'

function App() {
  // Tuple
  // const aTuple: [string, number] = ['Manny', 34]
  // enum
  // enum Codes {first = 1, second = 2}
  // any
  // const notSure: any = '3';
  // void
  // const warning = (): void => {
  //   console.log('Warning')
  // }

  return (
    <>
      <h1>Typescript is cool</h1>
      <p className="read-the-docs">
        The value {notSure} is of {typeof notSure} type!
      </p>
    </>
  )
}

export default App
