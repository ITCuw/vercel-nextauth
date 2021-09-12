import NextAuth from "next-auth";
import Providers from "next-auth/providers";

//for production: switch env file port value to 465 from 587. then switch redirect url in github

export default NextAuth({
    providers: [
        Providers.GitHub({
            clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
            scope: "read:user"
        }),
        // Providers.Twitter({
        //     clientId: "",
        //     clientSecret: ""
        // }),
        Providers.Email({
            server: {
                host: process.env.NEXT_PUBLIC_EMAIL_SERVER_HOST,
                port: process.env.NEXT_PUBLIC_EMAIL_SERVER_PORT,
                auth: {
                    user: process.env.NEXT_PUBLIC_EMAIL_SERVER_USER,
                    pass: process.env.NEXT_PUBLIC_EMAIL_SERVER_PASSWORD
                }
            },
            from: process.env.NEXT_PUBLIC_EMAIL_FROM
        })
    ],
    // database: {
    //     type: "mongodb",
    //     database: ":memory:",
    //     synchronize: false
    // },
    database: process.env.NEXT_PUBLIC_DATABASE_URL,
    secret: process.env.SECRET,

    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    debug: true,
});