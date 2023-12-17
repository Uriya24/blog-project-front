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
                {/*<label htmlFor="name">Name</label>*/}
                <input className="mb-4 px-1 border-2 rounded placeholder-black bg-gray-400"
                    id="name" name="name" type="text" placeholder="Name"/>
                {/*<label htmlFor="email">Email address</label>*/}
                <input className="mb-4 px-1 border-2 rounded placeholder-black bg-gray-400"
                       id="email" name="email" type="email" placeholder="Email address"/>
                {/*<label htmlFor="subject">Subject</label>*/}
                <input className="mb-4 px-1 border-2 rounded placeholder-black bg-gray-400"
                       id="subject" name="subject" type="text" placeholder="Subject"/>
                {/*<label htmlFor="Message">Message</label>*/}
                <textarea className="mb-10 h-40 px-1 border-2 rounded placeholder-black bg-gray-400"
                          id="message" name="message" placeholder="Message"></textarea>
                {/*<br/>*/}
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