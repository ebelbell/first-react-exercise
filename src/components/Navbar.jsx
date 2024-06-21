//shortcut for react is RFCE
import React from 'react'
import NavTab from '../components/NavTab'

function Navbar() {
    let categories = [
        "Home",
        "About",
        "Products"
    ];

    return (
        <div className="grandparent">
            {/* snoh Aalegra's album cover */} 
            <img
            className="logo"
            src="https://media.pitchfork.com/photos/5d6567cfff9129000824150e/master/pass/snoh_thosefeels.jpeg"
            />

            {/* Bee Gee's album cover */}
            <img
            className="logo"
            src="https://cdn1.dustygroove.org/images/products/b/beegeestava_saturdayn_101b.jpg"
            />

            {/* Lofi YT girly icon */}
            <img
            className="logo"
            src="https://yt3.googleusercontent.com/M0eY1tfgiwuyqrSlWIkzf5-6RZSARiuChjpXyZe-hfl9C2fn-I4leLtxKAqYqGZv_FgE4u5TKQ=s900-c-k-c0x00ffffff-no-rj"
            />

        <div className="navBtns">
          <NavTab title={categories[0]} />
          <NavTab title={categories[1]} />
          <NavTab title={categories[2]} />
        </div>
      </div>
    )
}

export default Navbar;

//there can only be ONE parent to that component in REACT

