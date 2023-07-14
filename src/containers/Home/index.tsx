import { FC } from 'react'
import Header from '../../components/Header'
import Main from './components/Main'
import Footer from '../../components/Footer'
const Home: FC = () => {
  console.log('Home Render')
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}
export default Home
