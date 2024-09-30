export const handleChange = (setFields, e) => {
  const { name, value } = e.target
  setFields(prevFields => ({
    ...prevFields,
    [name]: value
  }))
}
