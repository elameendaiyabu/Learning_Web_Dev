export function InvestmentCalculations(
  initialInvestment,
  annualInvestment,
  //   expectedReturn,
  duration
) {
  const resultArray = []
  let a = 0
  let b = 0
  let c = 0
  let d = 0

  for (let i = 1; i <= duration; i++) {
    let investedCapital =
      parseFloat(initialInvestment) + parseFloat(annualInvestment)
    let interest = parseFloat(900)
    let totalInterest = parseFloat(interest)
    let investmentValue =
      parseFloat(investedCapital) + parseFloat(totalInterest)

    a += parseFloat(investedCapital)
    b += parseFloat(interest) + 126
    c += parseFloat(totalInterest) + parseFloat(interest)
    d += parseFloat(investmentValue)

    const obj = {
      year: i,
      investmentValue: parseFloat(a),
      interest: parseFloat(b),
      totalInterest: parseFloat(c),
      investedCapital: parseFloat(d),
    }
    resultArray.push(obj)
  }

  return resultArray
}
