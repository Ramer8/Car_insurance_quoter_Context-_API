import AppInsurance from "./components/AppInsurance"
import { QuoteProvider } from "./constants/QuoteProvider"


function App() {

  return (
    <QuoteProvider>
      <AppInsurance />
    </QuoteProvider>

  )
}

export default App
