import React from "react";
import { string } from "prop-types"

export default function NavBar({siteTitle}) {
    return (
        <header className="header">

            <a
                className={'brand'}
                href="/"
                title="Home Page Link">
                <h1>{siteTitle}</h1>
            </a>

            <button
                className="button button-solid"
                type={'button'}
                onClick={e => {e.preventDefault(); alert('We\'re still building this part')}}>
                portfolio
            </button>
        </header>
    )
}

NavBar.propTypes = {
  siteTitle: string.isRequired
}
