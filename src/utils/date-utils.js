export const formatDateString = (ISODateString) => {
  const options = { month: 'long', day: 'numeric', year: 'numeric' }
  const date = new Date(ISODateString)
  return new Intl.DateTimeFormat('en-US', options).format(date)
}
