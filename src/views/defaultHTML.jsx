const React = require('react');

function DefaultHTML (html) {
    return (
        <html>
            <head>
            <title>{html.title || 'Admin. Portal'}</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous"></link>
            <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous"></script>
            <link href="/css/main.css" rel="stylesheet"></link>
            </head>
            <body>
                <nav className="nav">
                    <a className="nav-link active" href="/admin/associations">
                        <img className="logo" src="/images/MLBlogo.png" alt="Maui Land Broker logo"></img>
                    </a>
                    <a href="/logout">Log Out</a>
                </nav>
                {html.children}
            </body>
        </html>
    )
}

module.exports = DefaultHTML;
