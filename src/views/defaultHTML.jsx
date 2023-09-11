const React = require('react');

function DefaultHTML (html) {
    return (
        <html>
            <head>
            <title>{html.title || 'Admin. Portal'}</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
            <link href="/css/main.css" rel="stylesheet"></link>
            </head>
            <body>
                <nav class="nav">
                    <a class="nav-link active" href="#">
                        <img className="logo" src="/images/MLBlogo.png" alt="Maui Land Broker logo"></img>
                    </a>
                    {/* <a class="nav-link" href="#">Link</a>
                    <a class="nav-link" href="#">Link</a> */}
                </nav>
                {html.children}
            </body>
        </html>
    )
}

module.exports = DefaultHTML;
