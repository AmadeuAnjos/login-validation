import styles from '../styles/Login.module.css'
import LoginCard from '../src/components/loginCard/loginCard'
import Button from '../src/components/button/button'
import Input from '../src/components/input/input'

export default function LoginPage() {
  return (
    <div className={styles.background}>      
      <LoginCard title="Entre em sua conta">
        <Input type="email" placeholder="Seu e-mail" />
        <Input type="password" placeholder="Sua senha" />
        <Button>Login</Button>
      </LoginCard>
    </div>
  )
}
