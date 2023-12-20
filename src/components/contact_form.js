export function ContactForm() {
    const handleContactSubmit = (event) => {
        event.preventDefault();

        const {name, email, subject, message} = event.target.elements;
        name.value = "";
        email.value = "";
        subject.value = "";
        message.value = "";
    }
    return (
        <div>
            <form className="text-black flex flex-col" onSubmit={handleContactSubmit}>
                <input className="mb-4 px-1 border-2 rounded placeholder-black bg-gray-400"
                    id="name" name="name" type="text" placeholder="Name"/>
                <input className="mb-4 px-1 border-2 rounded placeholder-black bg-gray-400"
                       id="email" name="email" type="email" placeholder="Email address"/>
                <input className="mb-4 px-1 border-2 rounded placeholder-black bg-gray-400"
                       id="subject" name="subject" type="text" placeholder="Subject"/>
                <textarea className="mb-10 h-40 px-1 border-2 rounded placeholder-black bg-gray-400"
                          id="message" name="message" placeholder="Message"></textarea>
                <div>
                    <button
                        className="px-4 py-1 font-semibold border-2 text-white bg-blue-900 rounded-lg hover:bg-blue-950"
                        type="submit">Send message
                    </button>
                </div>
            </form>
        </div>
    )
}