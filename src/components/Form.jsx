import { Fragment } from 'react'
import { BRANDS, YEARS, PLAN } from "../constants"
import useQuoter from '../hooks/useQuoter'
import Error from './Error'

const Form = () => {

    const { handleChangeData, data, error, setError, insuranceQuoter } = useQuoter()

    const handleSubmit = e => {
        e.preventDefault()
        if (Object.values(data).includes('')) {
            setError('All fields are necesary')
            return
        }
        setError('')
        insuranceQuoter()
    }
    return (
        <>
            {error && <Error />}
            <form
                onSubmit={handleSubmit}
            >
                <div className='my-5'>
                    <label className='block mb-3 font-bold text-gray-500 uppercase'>
                        Brand
                    </label>
                    <select name='brand'
                        className='w-full p-3 bg-gray-300 border border-g-200 rounded-lg text-center
                         hover:bg-gray-400 transition-colors cursor-pointer'
                        onChange={e => handleChangeData(e)}
                        value={data.brand} >
                        <option value="">- Choose Brand -</option>
                        {
                            BRANDS.map(brand => (
                                <option
                                    key={brand.id}
                                    value={brand.id}
                                >
                                    {brand.name}
                                </option>
                            ))}
                    </select>
                </div>
                <div className='my-5'>
                    <label className='block mb-3 font-bold text-gray-500 uppercase'>
                        Year
                    </label>
                    <select name='year'
                        className='w-full p-3 bg-gray-300 border border-g-200 rounded-lg text-center
                        hover:bg-gray-400 transition-colors cursor-pointer'
                        onChange={e => handleChangeData(e)}
                        value={data.year}
                    >
                        <option value="">- Choose Year -</option>
                        {
                            YEARS.map(year => (
                                <option
                                    key={year}
                                    value={year}
                                >
                                    {year}
                                </option>
                            ))}
                    </select>
                </div>
                <div className='my-5'>
                    <label className='block mb-3 font-bold text-gray-500 uppercase'>
                        Plan
                    </label>
                    <div className='flex gap-4 items-center pb-3 font-bond text-gray-600'>
                        {PLAN.map(plan => (
                            <Fragment key={plan.id}>
                                <label>
                                    {plan.name}
                                </label>
                                <input
                                    type="radio"
                                    name='plan'
                                    value={plan.id}
                                    onChange={e => handleChangeData(e)}
                                />
                            </Fragment>
                        ))}
                    </div>
                    <input type="submit"
                        className='w-full bg-indigo-500 hover:bg-indigo-900 transition-colors
                    text-white cursor-pointer p-3 uppercase font-bold rounded-lg'
                        value="quote"
                    />
                </div>
            </form>
        </>
    )
}

export default Form