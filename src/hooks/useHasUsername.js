import { useEffect, useState } from 'react'

const useHasUserName = () => {
  const [username, setUsername] = useState(localStorage.getItem('username'))

  useEffect(() => {
    localStorage.setItem('username', username)

    if (username === 'null') {
      setUsername(null)
    }
  }, [username])

  return [username, setUsername]
}

export default useHasUserName
