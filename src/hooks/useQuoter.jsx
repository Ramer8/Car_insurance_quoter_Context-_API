import { useContext } from "react";
import QuoteContext from "../constants/QuoteProvider";

const useQuoter = () => {
    return useContext(QuoteContext)
}
export default useQuoter