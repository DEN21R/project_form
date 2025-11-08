import MainComponent from './components/mainComponent'
import GlobalProvider from './components/globalProvider'
import './App.css'

function App() {
  return (
    <GlobalProvider>
      <MainComponent />
    </GlobalProvider>
  )
}

export default App
