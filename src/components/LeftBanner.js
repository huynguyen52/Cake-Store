import React from 'react'
import { Link } from 'react-router-dom';

import '../components/LeftBanner.scss';

function LeftBanner({src}) {
    return (
        <aside className="left-banner">
            <Link to="/">
                <img src={src} alt="banner" />
            </Link>
        </aside>
    )
}

export default LeftBanner
