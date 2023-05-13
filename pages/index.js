import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { verifica } from '../services/user'
import { getCookie } from 'cookies-next'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.home}>      
      <h1>Página acessada com sucesso</h1>
    </div>
  )
}

export const getServerSideProps = async ({ req, res }) => {
  try {
    const token = getCookie('authorization', { req, res })
    if (!token) throw new Error('Token inválido')

    verifica(token)
    return {
      props: {}
    }
    
  } catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: '/login'
      },
      props: {}
    }
  }
}

