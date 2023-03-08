'use client'

import { Inter } from 'next/font/google'
import { useState } from 'react'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { addUsername } from '../../store/index'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const dispatch = useDispatch()
  const router = useRouter()
  const [name, setName] = useState('')

  const handleSubmit = () => {
    dispatch(addUsername(name))
    localStorage.setItem("username", name);
    router.push('/dashboard')
  }
  
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <input type="text" name="first" onChange={(e) => setName(e?.target?.value)} className={styles.inputText} required placeholder="Github Username" value={name}/>
        <button type="submit" className={styles.buttonSubmit} onClick={handleSubmit}>Submit</button>
      </div>
    </main>
  )
}