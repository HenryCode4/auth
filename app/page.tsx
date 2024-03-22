import { Poppins } from 'next/font/google'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { LoginButton } from '@/components/auth/login-button'

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default function Home() {
  return (
    
    <main className='flex h-full flex-col items-center justify-center bg-gradient-to-r from-purple-700 via-purple-400 to-purple-800'>
        <div className='space-y-6 text-center'>
          <h1 className={cn('text-6xl font-semibold text-white drop-shadow-md', font.className,)}>
           DIVIC
          </h1>
          <p className='text-white text-lg border border-gray-300 rounded-full shadow-gray-500/40 px-4 shadow-inner shadow-bottom'>
           Software Solution House
          </p>

          <LoginButton>
            <Button className='mt-6' variant="secondary" size="lg">
            Sign in
          </Button>
          </LoginButton>
          
        </div>
    </main>
  )
}
