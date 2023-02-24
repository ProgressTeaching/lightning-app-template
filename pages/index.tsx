import Head from "next/head"
import { withPageAuthRequired } from "@auth0/nextjs-auth0"
import { useUser } from "@auth0/nextjs-auth0/client"

export default function Home() {
  const { user, error, isLoading }: any = useUser()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  return (
    <>
      <Head>
        <title>ProgressTeaching</title>
        <meta name="description" content="ProgressTeaching App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="p-5">
        <h1 className="text-3xl font-bold underline">
          Hi {user.name}, welcome to ProgressTeaching!
        </h1>
      </main>
    </>
  )
}

export const getServerSideProps = withPageAuthRequired()
