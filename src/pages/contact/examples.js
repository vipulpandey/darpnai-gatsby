import React from 'react'
import Link from 'gatsby-link'
import Layout from '../../components/Layout'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Gully Voluteering is a Public Outreach Initiative of DarpnAI. Few important things are in development, Stay Tuned</h1>
              <p>              
              In the meanwhile, If you want to be Gully Volunteer and help India fight CoronaVirus, Submit the form at : 
              </p>
              <ul>
                <li>
                <a href="https://forms.gle/Xz3cRr7eNYFzUXoAA">
                  Form for Gully Volunteers
                </a>
                </li>
                {/* <li>
                  <Link to="/contact/file-upload/">Form with file upload</Link>
                </li> */}
              </ul>

              <h2>Help</h2>
              <h3>What is Gully Volunteering ?</h3>
              <p>
                The daily selfless tasks and duties that as a volunteers you have to perform like 
                <li>helping the needy in your area</li>
                <li>creating awareness against social stigmas related to CoronaVirus </li>
                <li>do a distress assessment surveys due to pandemic</li>
                <li>learn and grow with new skills everyday</li>
              </p>
              <h3>How you can Join for Gully Volunteering ?</h3>
              <p>
                Please, fill the form above.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
