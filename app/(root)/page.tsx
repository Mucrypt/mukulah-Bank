import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: 'Mukulah'}
  return (
    <section className='home'>
      <div className='home-content' >
        <header className='home-header'>
          <HeaderBox 
            type ='greeting'
            title='Welcome to the Bank'
            user={loggedIn?.firstName || 'Guest'}  
            subtext='Access all the features of the website'
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={12050}
          />

        </header>

      </div>
    </section>
  )
}

export default Home