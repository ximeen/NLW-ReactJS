import { useContext } from 'react';
import styles from './App.module.scss';

//    -> -> IMPORTAÇÃO DOS COMPONENTES  <- <-
import { LoginBox } from './components/LoginBox';
import { MessageList } from './components/MassegeList';
import { SendMessageForm } from './components/SendMessageForm';
import { AuthContext } from './contexts/auth';

export function App() {

  const { user } = useContext(AuthContext)

  return (
    <main className = {`${styles.contentWrapper} ${!!user ? styles.contentSigned : ''}`}>
      {/* componentes */}

      <MessageList />
      {!! user ? <SendMessageForm/> : <LoginBox />}

      {/* =========== */}
    </main>        
  )
}

