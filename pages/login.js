import Link from 'next/link'
import styles from '../styles/Login.module.css'
import LoginCard from '../src/components/loginCard/loginCard'
import Button from '../src/components/button/button'
import Input from '../src/components/input/input'

import { useState } from 'react'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/router'

export default function CadastroPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [error, setError] = useState('')
  const router = useRouter()

  const handleFormEdit = (event, name) => {
    setFormData({
      ...formData,
      [name]: event.target.value
    })
  }

  const handlerForm = async (event) => {
    try {
      event.preventDefault()
      const response = await fetch(`/api/user/login`, {
        method: 'POST',
        body: JSON.stringify(formData)
      })

      const json = await response.json()
      if (response.status !== 200) throw new Error(json)

      setCookie('autorization', json)
      router.push('/')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className={styles.background}>      
      <LoginCard title="Entrar na sua conta"> 
        <form className={styles.form} onSubmit={handlerForm}>
          <Input type="email" placeholder="Seu e-mail" required value={formData.email} onChange={(e) => {handleFormEdit(e, 'email')}} />
          <Input type="password" placeholder="Sua senha" required value={formData.password} onChange={(e) => {handleFormEdit(e, 'password')}} />
          <Button>Login</Button>
          {error && <p className={styles.error}>Usuário inexistente</p> }
          <p className={styles.paragraph}>Não tem Login ? <Link href="/cadastro"> <e className={styles.e}>Cadastre-se</e></Link></p>
        </form>
      </LoginCard>
    </div>
  )
}
