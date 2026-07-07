import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Compare from '@/components/Compare'
import Timeline from '@/components/Timeline'
import Places from '@/components/Places'
import Reels from '@/components/Reels'
import Team from '@/components/Team'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Team />
        <About />
        <Compare />
        <Timeline />
        <Places />
        <Reels />
      </main>
      <Footer />
    </>
  )
}
