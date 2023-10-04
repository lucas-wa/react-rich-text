import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { HomeMain } from '@/components/home-main'

export default function Home() {
  return (
    <div className='w-full min-h-screen flex flex-col justify-between items-center'>
      <Header></Header>

      <HomeMain></HomeMain>

      <Footer></Footer>

    </div>
  )
}
