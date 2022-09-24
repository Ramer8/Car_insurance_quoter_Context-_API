export const BRANDS = [
    { id: 1, name: "European" },
    { id: 2, name: "American" },
    { id: 3, name: "Asiatic" }


];

const YEARMAX = new Date().getFullYear();
export const YEARS = Array.from(
    new Array(30),
    (value, index) => YEARMAX - index
)
    ;
export const PLAN = [
    { id: 1, name: "Basic" },
    { id: 2, name: "Full" },

];