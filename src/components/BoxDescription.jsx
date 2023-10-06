/**
 * @typedef {Object} BoxDescription
 * @property {React.ReactNode} children
 */

/**
 * BoxDescription Component
 * @param {BoxDescription} param0 
 * @returns 
 */
const BoxDescription = ({children}) => {
  return <div className="box-description">{children}</div>
}

export default BoxDescription;