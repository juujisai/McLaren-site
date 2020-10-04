import React from 'react';
import { Link } from 'react-router-dom'


class PurchaseCompletedPopul extends React.Component {
  state = {}

  componentDidMount() {
    const svgOk = [document.querySelector('.ok-sign svg path'), document.querySelector('.ok-sign svg circle')]
    // console.log(svgOk)
    let svgLength = []

    for (let i = 0; i < svgOk.length; i++) {
      svgLength = [...svgLength, svgOk[i].getTotalLength()]
    }


    // console.log(svgLength)
    svgOk.forEach((item, id) => item.style.strokeDasharray = svgLength[id])
    svgOk.forEach((item, id) => item.style.strokeDashoffset = svgLength[id])
    svgOk.forEach((item, id) => item.style.animation = `svgAnimate 2s ease both .5s`)

  }

  render() {
    return (
      <div className="products-bought">
        <div className="ok-sign">
          <svg width="211" height="200" viewBox="0 0 211 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="95" stroke="#25DE21" strokeWidth="10" />
            <path d="M46 100L87.5 153.5C88 124.5 113.2 62.4 210 46" stroke="#039500" strokeWidth="10" />
          </svg>
          <h2>Purchase completed ...</h2>

        </div>
        <div className="continue-cart"><Link to='/account'>Go to My Account</Link> </div>

      </div>
    );
  }
}

export default PurchaseCompletedPopul;