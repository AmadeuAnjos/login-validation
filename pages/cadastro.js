import Link from 'next/link'
import styles from '../styles/Login.module.css'
import LoginCard from '../src/components/loginCard/loginCard'
import Button from '../src/components/button/button'
import Input from '../src/components/input/input'

export default function CadastroPage() {
  return (
    <div className={styles.background}>      
      <LoginCard title="Crie sua conta">
        <form className={styles.form}>
          <Input type="text" placeholder="Seu nome" />
          <Input type="email" placeholder="Seu e-mail" />
          <Input type="password" placeholder="Sua senha" />
          <Button>Cadastrar</Button>
          <Link className={styles.paragraph} href="/login"><e className={styles.e}>Login</e></Link>
        </form>
      </LoginCard>
    </div>
  )
}

//1:02:00 video