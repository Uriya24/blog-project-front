import {ContactForm} from "../components/contact_form"

export function Contact() {
    return(
        <div className="container mx-auto p-4 my-2 text-center w-full max-w-md">
            <h3 className="mb-12 text-3xl font-bold">Contact me</h3>
            <ContactForm/>
        </div>
    )
}