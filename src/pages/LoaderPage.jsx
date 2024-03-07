import { Analytics } from "@vercel/analytics/react"
import CustomCursor from '../components/Cursor'
import './LoaderPage.css'


function LoaderPage() {

  return (
    <>
      <Analytics />
      <CustomCursor />
        <div className="container-title">
          <div className='title is-animated unselectable'>
            <span>G</span>
            <span>o</span>
            <span>o</span>
            <span>f</span>
            <span>y</span>

            <span>N</span>
            <span>e</span>
            <span>w</span>
            <span>s</span>
          </div>
        </div>
        <div className="link unselectable">
          <a href="">Devenir culturé 🧠</a>
        </div>
      </>
      )
}

      export default LoaderPage
