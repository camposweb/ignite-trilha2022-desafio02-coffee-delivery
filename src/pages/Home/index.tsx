import { HomeContainer } from './styles'
import { Intro } from './components/Intro'
import { CoffeeList } from './components/CoffeList'

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <CoffeeList />
    </HomeContainer>
  )
}
