export default function getLetters() {
  const array = []
  for (let i = 97; i <= 122; i++) {
    const letter = String.fromCharCode(i)
    array.push(letter)
  }
  return array
}
