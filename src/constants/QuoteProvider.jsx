import { createContext, useState } from "react";
import { getDiferenceYears, calculateBrand, calculatePlan, formatMoney } from "../helpers";

const QuoteContext = createContext()
const QuoteProvider = ({ children }) => {

    const [data, setData] = useState({
        brand: '',
        year: '',
        plan: ''
    })
    const [error, setError] = useState('')
    const [result, setResult] = useState(0)
    const [loading, setLoading] = useState(false)

    const handleChangeData = e => {
        setData({
            ...data, [e.target.name]: e.target.value
        })
    }
    const insuranceQuoter = () => {

        let result = 2000
        const diference = getDiferenceYears(data.year)
        result -= ((diference * .03) * result)
        result *= calculateBrand(data.brand)
        result *= calculatePlan(data.plan)
        result = formatMoney(result)
        setLoading(true)

        setTimeout(() => {
            setResult(result);
            setLoading(false)
        }, 3000);

    }

    return (
        <QuoteContext.Provider
            value={{
                data,
                handleChangeData,
                error,
                setError,
                insuranceQuoter,
                result,
                loading
            }}>
            {children}
        </QuoteContext.Provider>
    )
}
export {
    QuoteProvider
}
export default QuoteContext