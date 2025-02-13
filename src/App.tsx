import './App.css'
import Card from "./components/card.tsx";

function App() {

  return (
    <>
      <h1>30 github challenge</h1>
      <h2>Welcome to the 30 github challenge</h2>
      <h3>This is a challenge to get 30 stars on github</h3>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <a href="https://github.com/aiperiakunova/30-github-challenge">
                    Github
                  </a>
                </h5>
                <p className="card-text">
                  This is a challenge to get 30 stars on github
                </p>
                  <Card/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
