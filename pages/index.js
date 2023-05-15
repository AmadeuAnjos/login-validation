import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { verifica } from '../services/user'
import { getCookie } from 'cookies-next'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.home}>      
      <div className={styles.log}>
        <h1>Página acessada com sucesso</h1>
        <Link className={styles.paragraph} href="/login">Ir para tela de login</Link>
      </div>
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

