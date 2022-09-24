import Form from "./Form"
import useQuoter from "../hooks/useQuoter"
import Spinner from "./Spinner"
import Result from "./Result"

const AppInsurance = () => {

    const { result, loading } = useQuoter()
    return (
        <>
            <header className="my-10">
                <h1 className="text-4xl font-black text-white bg-clip-text text-center
                ">
                    Car Insurance Quoter
                </h1>
            </header>
            <main className="bg-gray-200 md:2/3 lg:w-1/2 mx-auto shadow rounded-lg p-10  pt-4">
                <Form />
                {loading ? <Spinner /> : <Result />}
            </main>
        </>

    )
}

export default AppInsurance
