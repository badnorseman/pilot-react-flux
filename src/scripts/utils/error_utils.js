function getErrorsFromXhr(xhr) {
  let parsedErrors = JSON.parse(xhr.responseText)
  let errors = []

  return (
    for (let k in parsedErrors)
      errors.push(parsedErrors[k])
  )
}
