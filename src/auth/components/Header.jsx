import logo from '../../assets/images/logo-dark.png';

export function Header() {
    return (
        <header className="auth-header">
            <img src={logo} className="App-logo title" alt="logo" />
            <span className="App-title title">SmartLearn</span>
        </header>
    )
}