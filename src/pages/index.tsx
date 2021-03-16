import Head from 'next/head';
import useSWR from 'swr';
import { fetcher } from '../services/fetcher';
import { CourseList } from '../components/course/list';

const BASE_URL = 'https://web-interview-api-kjlbv8.herokuapp.com/jsonapi/v1/';

export default function Home() {
    const { data, error } = useSWR(`${BASE_URL}/courses`, fetcher);

    if (error) {
        return <div>Oops!</div>;
    }

    if (!data) {
        return <div>Loading</div>;
    }

    return (
        <>
            <Head>
                <title>MasterClass - Course Listing</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <header className="p-4">
                <a className="text-blue-500 hover:text-blue-700 hover:underline" href="/">MasterClass</a>
            </header>

            <main className="container mx-auto p-4">
                <h1>Course Listing</h1>
                <CourseList data={ data }/>
            </main>

            <footer>
            </footer>
        </>
    );
}
