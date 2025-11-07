import MainComponent from './components/mainComponent'
import GlobalProvider from './components/globalProvider'

function App() {
  return (
    <GlobalProvider>
      <MainComponent />
    </GlobalProvider>
  )
}

export default App
