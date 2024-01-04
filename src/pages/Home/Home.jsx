import './Home.module.css'

const Home = () => {
  return (
    <main>
      <div className="intro">
        <h1>Learn to code by watching others</h1>
        <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
  but understanding how developers think is invaluable. </p>
      </div>
      <div className="form__action">
        <button>
          <span><strong>Try it free 7 days </strong>then $20/mo. thereafter</span>
        </button>
        <form>
          <div className="form__group">
            <input type="text" value="First Name"/>
          </div>
          <div className="form__group">
            <input type="text" value="Last Name"/>
          </div>
          <div className="form__group">
            <input type="text" value="Email Address"/>
          </div>
          <div className="form__group">
            <input type="text" value="Password"/>
          </div>
          <button type="submit">Claim your free trial</button>
          <span className="agreement">
            By clicking the button, you are agreeing to our <a href="">Terms and Services</a>
          </span>
        </form>
      </div>
    </main>
  )
}

export default Home