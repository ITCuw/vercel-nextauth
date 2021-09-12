import headerStyles from '../styles/Header.module.css';

const Header = () => {
    return (
        <div>
            <div className={headerStyles.headertitle}>
                <h1 className={headerStyles.title}>
                    <span>Auth</span> with Vercel
                </h1>
            </div>
            <p className={headerStyles.description}>Deploying nextauth with wildcard domain on Vercel</p>
        </div>
    )
}

export default Header;