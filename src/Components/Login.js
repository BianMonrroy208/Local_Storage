import React from 'react'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            pass: ''
        }
        this.localEstorage = this.localEstorage.bind(this)
        this.mensaje = this.mensaje.bind(this)
        this.pass = this.pass.bind(this)
        this.clear = this.clear.bind(this)
    }

    localEstorage(event) {
        this.setState({
            user: event.target.value,
        });
    }

    pass(event) {
        this.setState({
            pass: event.target.value,
        });
    }

    mensaje(event) {
        var encript = btoa(this.state.pass);
        var desCript = atob(encript)
        localStorage.setItem("User", this.state.user);
        localStorage.setItem("Password", encript);
        alert("Desencriptar" + desCript);
        event.preventDefault();
    }
    clear() {
        localStorage.clear();
    }
    render() {
        return (
            /*<div>
                <form className="container" onSubmit={this.mensaje}>
                    <h1 >Local Storage</h1>
                    <div className="form-group">
                        <label >Email address  </label>
                        <input placeholder="YouGmail@gmail.com" className="form-control" value={this.state.user} onChange={this.localEstorage} />
                        <small className="form-text text-muted">We'll never share your email with anyone else.</small>

                    </div>
                    <div className="form-group">
                        <label>PassWord </label>
                        <input type="password" className="form-control" value={this.state.pass} onChange={this.pass}></input>

                    </div>
                    <input className="form-control btn btn-primary " type="submit" value="Sign In"></input>
                </form>
                <div className="container">
                    <button className="form-control btn btn-warning  mt-2" onClick={this.clear}>Clear</button>
                </div>
            </div>
            */
            <div className="card mt-5">
                <article className="card-body">
                    <h4 className="card-tittle text-center mb-4 mt-1">Sig in</h4>
                    <hr />
                    <p className="text-success text-center">Smart T.M.T</p>
                    <form className="mt-5" onSubmit={this.mensaje}>
                        <div className="form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    
                                </div>
                                <input placeholder="You account" className="form-control" value={this.state.user} onChange={this.localEstorage}></input>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                  
                                </div>
                                <input className="form-control" placeholder="******" type="password" value={this.state.pass} onChange={this.pass}></input>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-primary btn-block" value="Login"></input>
                        </div>
                    </form>
                    <button className="form-control btn btn-warning  mt-2" onClick={this.clear}>Clear</button>

                </article>

            </div>
        )
    }
}

export default Login