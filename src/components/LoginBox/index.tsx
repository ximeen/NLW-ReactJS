//  -> -> IMPORTAÇÃO DOS ESTILOS UTILIZANDO MODULE <- <-
import { useContext } from 'react'
import { VscGithubInverted } from 'react-icons/vsc'

import { AuthContext } from '../../contexts/auth'
import styles from './styles.module.scss'



export function LoginBox() {

  const { signInUrl} = useContext(AuthContext)
  

  return(
    <div className={styles.loginBoxWrapper}>
      <strong> Entre e compartilhe uma mensagem </strong>
      <a href={signInUrl} className={styles.signInWithGithub}>  
      <VscGithubInverted size = "24" />
        Logar com GitHub
      </a>
    </div>
  )
}