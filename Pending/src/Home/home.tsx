import Header from "../components/Header/header"
import Main from "../components/Main/main-part"
import Card from "../components/Main/main-part-card"
import About from "../components/About/about"
import Logo from "../components/logo/logo";
import Text from '../components/About/text'
import People from '../components/About/people'

export const Home = () => {
  return (
    <>
    <Header/>
    <Main/>
    <Card/>
    <Logo/>
    <Text/>
    <About/>
    <People/>
    {/* <Why/> */}
    {/* <Step/> */}
    </>
  )
}
