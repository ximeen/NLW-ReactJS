import { useContext, useState, FormEvent } from 'react'
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc'

import { AuthContext } from '../../contexts/auth'
import { api } from '../../services/api'
import styles from './styles.module.scss'

export function SendMessageForm() {

  const { user, signOut } = useContext(AuthContext) 
  // Criando um estado para armazenar a mensagem que o usuario digita
  const [ message, setMessage] = useState('');

  async function handleSendMessage(event: FormEvent) {
    event.preventDefault();

    if (!message.trim()){
      return;
    }

    await api.post('messages', { message })

    setMessage('');
  }

  return(
    // -> CRIAÇAO DO FORM PARA ENVIO DAS MESAGENS 
    <div className={styles.sendMessageFormWrapper}>
      {/* BUTÃO DE SAIR */}
      <button onClick = {signOut}  className = {styles.signOutButton}>
      <VscSignOut  size ="32" />
      </button>
      {/* PARTE DO HEADER */}
      <header className = {styles.userInformation} >
        {/* COLETANDO A IMAGEM E A INFORMAÇÕES DO USUARIO (USER?.) É PARA VERIFICAR SE ESTAR LOGADO OU NÃO */}
        <div className={styles.userImage}>
          <img src= {user?.avatar_url} alt= {user?.name} />
        </div>

        {/* COLETANDO O NOME DO USUARIO */}
        <strong className = {styles.userName}> {user?.name} </strong>
        {/* COLETANDO O NOME DE USUARIO DO GITHUB */}
        <span className = {styles.userGithub}>
          <VscGithubInverted size = "16" />
          {user?.login}
        </span>

        <form  onSubmit = {handleSendMessage} className = {styles.sendMessageForm}>
          <label htmlFor="message"> Mensagem </label>

            <textarea 
              name="message"
              id="message"
              placeholder = "Qual a sua expectativa para o doWhile? "
              // pegando o texto digitado e armazenando no (setMessage)
              onChange = {event => setMessage(event.target.value)}
              value = {message}
            />

            <button type = "submit" > Enviar mensagem </button>

        </form>

      </header>
    </div>

  )
}