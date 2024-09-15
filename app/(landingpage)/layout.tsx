import React, { ReactNode } from 'react'
import NavBar from './_components/navbar'

const LandingPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='h-full'>
        <NavBar/>
        <main className='h-full'>
            {children}
        </main>
        
    </div>
  )
}

export default LandingPageLayout