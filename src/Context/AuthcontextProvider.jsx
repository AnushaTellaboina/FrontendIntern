import React from 'react'

export const Authcontext = React.createContext()
function AuthcontextProvider({children}) {
  const [userData, setUserData] = React.useState([])

  return (
    <Authcontext.Provider value={{userData, setUserData}}>
      {children}
    </Authcontext.Provider>
  )
}

export default AuthcontextProvider
