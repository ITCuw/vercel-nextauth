import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/client'
//built with the help from https://www.youtube.com/watch?v=o_wZIVmWteQ&t=1s
//d

export default function Dashboard() {
    const [session, loading] = useSession();
    const [content, setContent] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("api/secret");
            const json = await res.json();

            if (json.content) {
                setContent(json.content)
            }
        }
        fetchData();
    }, [session]);

    //the [session] makes sure that the use effect doesn't run more than once
    //th
    //handles if page hasn't loaded yet
    if (typeof window !== "undefined" && loading) return null;
    if (!session) {
        return (
            <main>
                <div>
                    <h1>You are not signed in yet!</h1>
                </div>
            </main>
        )
    }

    return (
        <main>
            <div>
                <h1>You have entered your protected dashboard</h1>
                <p>
                    {content}
                </p>
            </div>
        </main>
    );
}