export const ENDPOINTS = {
    currentContest: "/contest/current",
    modifyCurrentContest: `/contest/modify-bet`,
    getAllContest: (page, records, filter = "") => `/contest/grid?page=${page}&records=${records}${filter}`
}


export const ContestNumber = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
]