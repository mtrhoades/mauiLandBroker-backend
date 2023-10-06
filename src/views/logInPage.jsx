import React from 'react';

const logInPage = (html) => {
  return (
    <html>
        <head>
        <title>{html.title || 'Admin. Portal'}</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.2/mdb.min.css" rel="stylesheet"/>
        <link href="/css/main.css" rel="stylesheet"></link>
        </head>
        <body className="loginBody">
            <nav class="nav">
                <a class="nav-link active" href="/admin">
                    <img className="logo" src="/images/MLBlogo.png" alt="Maui Land Broker logo"></img>
                </a>
            </nav>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <form style={{paddingTop: '40px'}}>
                    <div class="form-outline mb-4">
                        <label class="form-label" for="userName">User Name</label>
                        <input type="text" name="username" id="userName" class="form-control" style={{border: "1px solid"}} />
                    </div>
                    <div class="form-outline mb-4">
                        <label class="form-label" for="passWord">Password</label>
                        <input type="password" name="password" id="passWord" class="form-control" style={{border: "1px solid"}} />
                    </div>
                    <a href="/admin/associations">
                        <button type="button" class="btn btn-primary btn-block mb-4">Log in</button>
                    </a>
                </form>
            </div>
        </body>
    </html>




  )
}

export default logInPage;