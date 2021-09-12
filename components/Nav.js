import navStyles from '../styles/Nav.module.css';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';

export default function Nav() {
    const [session, loading] = useSession();
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
                {!session && (
                    <li>
                        <button onClick={signIn}>Sign in</button>
                    </li>
                )}
                {session && (
                    <li>
                        <Link href="/dashboard">Dashboard</Link>
                    </li>
                )}
                {session && (
                    <li>
                        <button onClick={signOut}>Sign out {session.user.email}</button>
                    </li>
                )}
            </ul>
        </nav>
    )
}