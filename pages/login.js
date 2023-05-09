import Link from 'next/link'
import styles from '../styles/Login.module.css'
import LoginCard from '../src/components/loginCard/loginCard'
import Button from '../src/components/button/button'
import Input from '../src/components/input/input'

export default function CadastroPage() {
  return (
    <div className={styles.background}>      
      <LoginCard title="Entrar na sua conta"> 
        <form className={styles.form}>
          <Input type="email" placeholder="Seu e-mail" />
          <Input type="password" placeholder="Sua senha" />
          <Button>Login</Button>
          <p className={styles.paragraph}>Não tem Login ? <Link href="/cadastro"> <e className={styles.e}>Cadastre-se</e></Link></p>
        </form>
      </LoginCard>
    </div>
  )
}
