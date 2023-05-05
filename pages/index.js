import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.home}>      
      <h1>Página 1</h1>
    </div>
  )
}
