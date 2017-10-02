export const formattedDate = dateStr => {
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }
  console.log(dateStr)
  const date = new Date(dateStr)
  const formatted = date.toLocaleDateString('en-US', options)
  console.log(formatted)
  return formatted
}
