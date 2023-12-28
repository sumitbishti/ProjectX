const SidebarView = ({ name, city }) => {
  return (
    // React Fragments doesn't create unnecessary DOM nodes
    <>
      <h1>{name}</h1>
      <p>{city}</p>
    </>
  )
}
export default SidebarView
