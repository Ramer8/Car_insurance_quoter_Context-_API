import { useCallback, useMemo, useRef } from "react"
import useQuoter from "../hooks/useQuoter"
import { BRANDS, PLAN } from '../constants'

const Result = () => {
    const { result, data } = useQuoter()
    const { brand, plan, year } = data
    const yearRef = useRef(year)

    const [nameBRAND] = useCallback(
        BRANDS.filter(m => m.id === Number(brand)),
        [result])

    const [namePLAN] = useCallback(
        PLAN.filter(m => m.id === Number(plan)),
        [result])

    return (
        <div className="bg-gray-100 text-left mt-2 p-2 shadow rounded-lg">
            <h2 className="text-gray-600 text-center font-black text-3xl ">
                Summary
            </h2>
            <p className="my-2">
                <span className="font-bold">Brand:  </span>
                {nameBRAND === undefined ? null : nameBRAND.name}
            </p>
            <p className="my-2">
                <span className="font-bold">Plan:  </span>
                {namePLAN === undefined ? null : namePLAN.name}
            </p>
            <p className="my-2">
                <span className="font-bold">Car year:  </span>
                {yearRef.current}
            </p>

            <p className="my-2 text-2xl mb-1">
                <span className="font-bold">Total quotation:  </span>
                <span className="font-bold text-gray-500">{result === 0 ? null : result}</span>
            </p>
        </div>
    )
}

export default Result