import Button from '@/components/button'
import Image from 'next/image'

export default function Login() {
  return (
      <>
        <main className="w-screen h-screen flex items-center justify-center">
          <section className='flex flex-col items-center'>
            <Image 
              src="/assets/ninus_login_logo.png"
              width={100}
              height={100}
              className='translate-y-2'
            />
            <div className='flex justify-center items-center w-full'>
              <div className='card border border-neutral-300 px-14 py-10'>
                <h2 className='text-center text-lg'>Ninus <span className='font-bold'>Admin</span></h2>
                <div>
                  <input 
                    placeholder='email' 
                    type='text' 
                    className='text-sm border border-neutral-300 my-5 p-3 w-full' />
                </div>
                <div>
                  <input 
                    placeholder='password' 
                    type='password' 
                    className='text-sm border border-neutral-300 my-5 p-3 w-full' />
                </div>
                <div className='w-full bg-black text-white text-center py-3 my-3 text-sm cursor-pointer hover:bg-neutral-800'>
                  <Button>Entrar</Button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
  )
}
