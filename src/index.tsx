import * as React from 'react'
import './styles.scss'

import { useEffect, useState } from 'react'

export type TypingAnimationProps = { words: string[] }

/**
 * TypingAnimation is a component that simulate a computer typing display
 * It basically display letters by letters, then pause, then goes backway
 * If many words are setted, they will be displayed one by one
 */
const TypingAnimation = ({ words }: TypingAnimationProps) => {
  const [currentWord, setCurrentWord] = useState('')
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [waiter, setWaiter] = useState(0)

  const [readBackWay, setReadBackWay] = useState(false)

  useEffect(() => {
    const interval = setInterval(updateWord, 100)

    return () => {
      clearInterval(interval)
    }
  }, [currentCharIndex, waiter, readBackWay])

  const updateWord = () => {
    if (currentCharIndex == -1) {
      if (waiter > 0) {
        setWaiter(waiter - 1)
      } else {
        if (readBackWay) {
          setReadBackWay(false)

          setCurrentWord('')
          setCurrentCharIndex(0)
        } else {
          setReadBackWay(true)
          setCurrentCharIndex(words[currentWordIndex].length - 1)
        }
      }

      return
    }

    const char = words[currentWordIndex].charAt(currentCharIndex)

    if (readBackWay) {
      setCurrentWord(currentWord.substring(0, currentWord.length - 1))
    } else {
      setCurrentWord(currentWord + char)
    }

    if (readBackWay) {
      if (currentCharIndex > 0) {
        setCurrentCharIndex(currentCharIndex - 1)
      } else {
        setCurrentCharIndex(-1)
        updateCurrentWordIndex()
      }
    } else {
      if (currentCharIndex < words[currentWordIndex].length - 1) {
        setCurrentCharIndex(currentCharIndex + 1)
      } else {
        setWaiter(10)
        setCurrentCharIndex(-1)
      }
    }
  }

  const updateCurrentWordIndex = () => {
    if (currentWordIndex < words.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1)
    } else {
      setCurrentWordIndex(0)
    }
  }

  return (
    <>
      {currentWord} <span className='typing-animation__animated-cursor'>|</span>
    </>
  )
}

export default TypingAnimation