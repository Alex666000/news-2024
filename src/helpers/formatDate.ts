export const formatDate = date => {
  const options = {
    day: 'numeric',
    month: 'long',
    weekday: 'long',
    year: 'numeric',
  }

  return date.toLocaleDateString('en-US', options)
}
