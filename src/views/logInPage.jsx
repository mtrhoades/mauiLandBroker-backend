import React from 'react';

const logInPage = (html) => {
  return (
    <html>
        <head>
        <title>{html.title || 'Admin. Portal'}</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.2/mdb.min.css" rel="stylesheet"/>
        <link href="/css/main.css" rel="stylesheet"></link>
        </head>
        <body className="loginBody">
            <nav className="nav">
                    <img className="logo" src="/images/MLBlogo.png" alt="Maui Land Broker logo"></img>
            </nav>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <form action="/admin" method="POST" style={{paddingTop: '40px'}}>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="userName">User Name</label>
                        <input type="text" name="username" id="userName" className="form-control" required style={{border: "1px solid"}} />
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="passWord">Password</label>
                        <input type="password" name="password" id="passWord" className="form-control" required style={{border: "1px solid"}} />
                    </div>
                        <button type="submit" className="btn btn-primary btn-block mb-4">Log in</button>
                </form>
            </div>
        </body>
    </html>




  )
}

export default logInPage;