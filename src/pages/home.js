
export function Home() {
    return (
        <div className="flex flex-col flex-wrap justify-center items-center text-center">
            <h1
                className="text-6xl m-5 p-3 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-rose-600 2xl:text-8xl 2xl:p-4">
                Welcome to my Blog!
            </h1>
            <div className="p-1 m-1 text-2xl 2xl:text-3xl 2xl:p-2">
                <p>I'm an Agronomist who makes his first steps in the
                web
                development world.</p>
                <p>This is my first project, written in Javascript and
                    using
                    React.</p>
                <p>Try it out!</p>
            </div>

        </div>
    )
}