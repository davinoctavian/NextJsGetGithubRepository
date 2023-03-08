'use client'
import { Inter } from 'next/font/google'
import styles from './dashboard.module.css'
import { use, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../store/index'

const inter = Inter({ subsets: ['latin'] })

export default function Dashboard() {
  const router = useRouter()
  const [ data, setData ] = useState([])
  const arrUser = useSelector(selectUser)
  const username = arrUser?.username ?? ''

  useEffect(() =>{
    if (username == '') return
    const callApi = async() => {
        try {
            const res = await fetch("https://api.github.com/users/" +username+"/repos", {
                headers: {
                "Content-Type": "application/json",
                },
                method: "GET",
            })
            const result = await res.json()
            setData(result)
        } catch (err) {
            console.log(err)
        }
    }
    callApi()
  }, [username])

  return (
    <div className={styles.agFormatContainer}>
        <h2 className={styles.titleDocument}>{username} <span onClick={() => router.push('/')}><sup>X</sup></span></h2>
        <div className={styles.agCoursesBox}>
            {data && Array.isArray(data) && data.map((x) => 
                <div className={styles.agCoursesItem} key={x.id}>
                    <a href={x.html_url} className={styles.agCoursesItemLink}>
                        <div className={styles.agCoursesItemBg}></div>
                
                        <div className={styles.agCoursesItemTitle}>
                            {x.name.length > 19 ? x.name.substring(0, 18)+'...' : x.name}
                        </div>
                
                        <div className={styles.agCoursesItemDateBox}>
                            Start:
                            <span className={styles.agCoursesItemDate}>
                            {String(x.created_at).split('T')[0]}
                            </span>
                        </div>
                    </a>
                </div>
            )}
            
        </div>
    </div>
  )
}