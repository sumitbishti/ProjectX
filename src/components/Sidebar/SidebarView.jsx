import { Text } from '@radix-ui/themes'

const SidebarView = ({ name, city }) => {
  return (
    // React Fragments doesn't create unnecessary DOM nodes
    <>
      <Text as="span">{name}</Text>
      <Text as="span">{city}</Text>
    </>
  )
}
export default SidebarView
