import Head from 'next/head';
import { CourseList } from '../components/course/list';
import { useRouter } from 'next/router';
import { UserContext } from '../contexts/user';

export default function Home() {
    const router = useRouter();

    // Double render, so we're calling courses twice... not great.
    return (
        <UserContext.Provider value={{ email: String(router.query.email) }}>
            <Head>
                <title>MasterClass - Course Listing</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <header className="p-4">
                <a className="text-blue-500 hover:text-blue-700 hover:underline" href="/">MasterClass</a>
            </header>

            <main className="container mx-auto p-4">
                <h1>Course Listing</h1>
                <CourseList/>
            </main>

            <footer>
            </footer>
        </UserContext.Provider>
    );
}
