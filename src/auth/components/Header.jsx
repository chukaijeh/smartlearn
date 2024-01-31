import logo from '../../assets/images/logo-dark.png';

export function Header(params) {
    console.log(params);
    return (
        <header className="auth-header">
            <img src={logo} className="App-logo title" alt="logo" />
            <span className="App-title title">SmartLearn</span>
        </header>
    )
}