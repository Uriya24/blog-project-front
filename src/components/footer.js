// not included in final project

export function Footer() {
    return (
        <div>
            <footer style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/zna-big.jpg)`,
            }}
                    className="fixed bottom-0 mt-2 pb-2 text-center w-full bg-inherit bg-fixed bg-center bg-cover bg-no-repeat">linkedin
                github
            </footer>
        </div>
    )
}