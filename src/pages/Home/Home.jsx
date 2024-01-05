import { useForm } from 'react-hook-form'
import './Home.module.css'

const Home = () => {

const {
  register, 
  handleSubmit,
  formState: {errors}
} = useForm();

const onSubmit = (data) => console.log(data)

  return (
    <main className="flex h-screen items-center justify-center">
      <section className='w-4/5 lg:flex'>
        <Intro />
        <div className="form__action">
          <button className='w-full my-3 p-4 bg-accent-blue rounded-md hover:shadow-md'>
            <span className='block w-3/5 mx-auto text-white text-xs font-normal'><strong className='font-bold'>Try it free 7 days </strong>then $20/mo. thereafter</span>
          </button>
          <form 
            className='p-5 my-2 bg-white rounded shadow-lg'
            onSubmit={handleSubmit(onSubmit)}  
            noValidate
          >
            <div className="form__group">
              <input 
                type="text" 
                placeholder="First Name"
                className='w-full p-3 mb-3 text-sm text-slate-600 font-medium border rounded'
                {...register("firstname", {
                  required: {
                    value: true,
                    message: "Please input your firstname"
                  }
                })}
              />
              {
                errors.email?.message && 
                <p className='text-primary-red -mt-2 mb-2 text-sm ml-2'>{errors.email?.message}</p>
              }
            </div>
            <div className="form__group">
              <input 
                type="text" 
                placeholder="Last Name"
                className='w-full p-3 mb-3 text-sm text-slate-600 font-medium border rounded'
                {...register("lastname", {
                  required: {
                    value: true,
                    message: "Please input your lastname"
                  }
                })}
              />
              {
                errors.email?.message && 
                <p className='text-primary-red -mt-2 mb-2 text-sm ml-2'>{errors.email?.message}</p>
              }
            </div>
            <div className="form__group">
              <input 
                type="email" 
                placeholder="Email Address"
                className='w-full p-3 mb-3 text-sm text-slate-600 font-medium border rounded'
                {...register("email", {
                  required: {
                    value: true,
                    message: "Please input the email!"
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email format"
                  }
                })}
              />
              {
                errors.email?.message && 
                <p className='text-primary-red -mt-2 mb-2 text-sm ml-2'>{errors.email?.message}</p>
              }
            </div>
            <div className="form__group">
              <input 
                type="password" 
                placeholder="Password"
                className='w-full p-3 mb-3 text-sm text-slate-600 font-medium border rounded'
                {...register("password")}
              />
            </div>
            <button 
              type="submit" 
              className='w-full p-3 bg-primary-green text-white font-medium uppercase hover:shadow-inner rounded'  
            >Claim your free trial</button>
            <span className="block text-sm text-center mt-3 w-5/6 mx-auto text-slate-600">
              By clicking the button, you are agreeing to our 
              <a href="" className='text-primary-red hover:font-bold'> Terms and Services</a>
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