const data = {
    _id: "640a1bcc10067ae5dc2b",
    user_id: "640a1a6252b6cd95f74",
    month: 2,
    year: 2023,
    earnings: [
        {
            title: "basic pay",
            amount: 15000,
            _id: "640a1bcc10067ae5d4fcac2c"
        },{
            title: "allowance pay",
            amount: 1000,
            _id: "640a1bcc10067ae5d4fcac3c"
        }
    ],
    deductions: [
        {
            title: "pf",
            amount: 1500,
            _id: "640a1bcc10067ae5d4fcac2d"
        },
        {
            title: "professional tax",
            amount: 500,
            _id: "640a1bcc10067ae5d4fcac2e"
        }
    ],
    work_days: 28,
    lop_days: 2,
    createdAt: "2023-03-09T17:47:57.007Z",
    updatedAt: "2023-03-09T17:47:57.007Z"
}

const SumOfEarnings = data.earnings.reduce((acc,cur) => acc + cur.amount, 0)
console.log(SumOfEarnings);

const SumOfDeductions = data.deductions.reduce((acc,cur) => acc + cur.amount, 0)
console.log(SumOfDeductions);