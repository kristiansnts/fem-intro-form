import './Home.module.css'

const Home = () => {

  return (
    <main className="flex h-screen items-center justify-center">
      <section className='w-4/5 lg:flex'>
        <Intro />
        <div className="form__action">
          <button className='w-full my-3 p-4 bg-accent-blue rounded-md shadow-md'>
            <span className='block w-3/5 mx-auto text-white text-xs font-normal'><strong className='font-bold'>Try it free 7 days </strong>then $20/mo. thereafter</span>
          </button>
          <form className='p-5 my-2 bg-white rounded shadow-lg'>
            <div className="form__group">
              <input 
                type="text" 
                placeholder="First Name"
                className='w-full p-3 mb-3 text-sm text-slate-600 font-medium border rounded '
              />
            </div>
            <div className="form__group">
              <input 
                type="text" 
                placeholder="Last Name"
                className='w-full p-3 mb-3 text-sm text-slate-600 font-medium border rounded '
              />
            </div>
            <div className="form__group">
              <input 
                type="text" 
                placeholder="Email Address"
                className='w-full p-3 mb-3 text-sm text-slate-600 font-medium border rounded '
              />
            </div>
            <div className="form__group">
              <input 
                type="text" 
                placeholder="Password"
                className='w-full p-3 mb-3 text-sm text-slate-600 font-medium border rounded '
              />
            </div>
            <button 
              type="submit" 
              className='w-full p-3 bg-primary-green text-white font-medium uppercase shadow-inner rounded'  
            >Claim your free trial</button>
            <span className="block text-sm text-center mt-3 w-5/6 mx-auto text-slate-600">
              By clicking the button, you are agreeing to our 
              <a href="" className='text-primary-red'> Terms and Services</a>
            </span>
          </form>
        </div>
      </section>
    </main>
  )
}

const Intro = () => {
  return (
    <div className="intro text-center text-white mb-8 flex flex-col justify-center lg:w-1/2 lg:text-left lg:mr-20">
          <h1 className='text-3xl font-bold mb-5'>Learn to code by watching others</h1>
          <p className='text-sm'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
            but understanding how developers think is invaluable. </p>
        </div>
  )
}

export default Home