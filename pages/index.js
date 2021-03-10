import Layout from '../components/layout'
import Link from 'next/link'
import {skills, estudios} from '../profile'
console.log(estudios)

console.log(skills)

const Index = () => (
    <Layout>
        {/** Header card */}
        <header className="row">
            <div className="col-mid-12">
                <div className="card card-body bg-secondary text-light animate__animated animate__fadeIn">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="imagen1.png" alt="" className="img-fluid"/>
                        </div>
                        <div className="col-md-8">
                            <h1>Renzo Soler</h1>
                            <h3>FullStack Developer</h3>
                            <p>Hola hola hoahaoahoahahoaahoahoahoahohohohaohoahohohaohaohaohaohaohaohaoahoaajoalalalalaalalalalaa asdasdadadadddaaddadaada</p>
                            <a href="/hireme">Hire me</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/** Second section */}

        <div className="row py-2">
            <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Skills</h1>

                        {skills.map(({ skill, percentage }, i) => (
              <div className="py-3" key={i}>
                <h5>{skill}</h5>
                <div className="progress ">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}

                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Estudios</h1>

                            <ul>
                            {estudios.map(({ title,description,  from, to }, index) => (
                <li key={index}>
                  <h3>{title}</h3>
                  <h5>
                    {from} {to ? `- ${to}` : "- current"}
                  </h5>
                  <p>
                  {description}
                  </p>
                </li>
              ))}
                            </ul>

                            <Link href="/hireme">
              <a className="btn btn-light">Conoce mas</a>
            </Link>

                    </div>
                </div>
            </div>
        </div>
        
    </Layout>
)

export default Index;