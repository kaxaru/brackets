module.exports = module.exports = function check(str, bracketsConfig) {
  let brackets = []
  addSlashForBrackets = (el) => {
    return new RegExp(`\\${el}`).test('()[]|{}') ? `\\${el}` : el
  }

  bracketsConfig.map(el => {
      brackets.push(el[0].trim() + el[1].trim())
  })

  checkContainBrackets = (re, string) => {
      let temp = string;
      re.map(regularExpression => {
          string = new RegExp(`${addSlashForBrackets([...regularExpression][0])}${addSlashForBrackets([...regularExpression][1])}`).test(string) ? string.split(regularExpression).join('') : string
      })

      return temp.length == string.length ? string.length == 0 ? true : false : checkContainBrackets(re, string)  
  }

  return checkContainBrackets(brackets, str)

}
