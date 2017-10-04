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

export const dateDiff = (date1, date2) => {
  const diff = date2.getTime() - date1.getTime()
  const MS_IN_DAY = 1000 * 3600 * 24
  const MS_IN_HRS = 1000 * 3600
  const MS_IN_MIN = 1000 * 60
  const MS_IN_SEC = 1000

  if (diff < 0) {
    return { day: 0, hrs: 0, min: 0, sec: 0 }
  }
  return {
    day: Math.floor(diff / MS_IN_DAY),
    hrs: Math.floor((diff % MS_IN_DAY) / MS_IN_HRS),
    min: Math.floor(((diff % MS_IN_DAY) % MS_IN_HRS) / MS_IN_MIN),
    sec: Math.floor((((diff % MS_IN_DAY) % MS_IN_HRS) % MS_IN_MIN) / MS_IN_SEC),
  }
}

export const pad = num => {
  const length = `${num}`.length
  if (length < 2) {
    return `${'0'.repeat(2 - length)}${num}`
  }
  return num
}
