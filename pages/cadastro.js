import LoginCard from 'src/components/loginCard/loginCard'
import styles from '../styles/Cadastro.module.css'

export default function CadastroPage() {
    return (
      <div className={styles.background}>      
        <LoginCard title="Crie sua conta">
          Cadastro
          </LoginCard>
      </div>
    )
  }
  