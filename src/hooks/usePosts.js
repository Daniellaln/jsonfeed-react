import { useState, useEffect } from 'react'

export function usePosts(limit = 10) {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    async function fetchPosts() {
      try {
        setLoading(true)
        setError(null)
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`,
          { signal: controller.signal }
        )
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
        const data = await res.json()
        setPosts(data)
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
    return () => controller.abort()
  }, [limit])

  return { posts, loading, error }
}
