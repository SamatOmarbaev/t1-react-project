import { useEffect, useState } from "react";

export function useDebounce(initialValue: string, delay: number) {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(initialValue)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [initialValue, delay])

  return value
}