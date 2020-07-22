export default (expenses) => {
    return expenses
        .map((expense) => expense.amount) // map over expenses to get amount
        .reduce((acc, val) => acc + val, 0) // get all amount and add up
}