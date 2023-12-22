import {useForm} from "react-hook-form";


export function ContactForm() {
    const {register, handleSubmit, formState, reset} = useForm();

    const handleContactSubmit = (event) => {

        reset()
    }
    return (<div>
            <form className="text-black flex flex-col" onSubmit={handleSubmit(handleContactSubmit)}>
                {formState.errors.name &&
                    <span className="text-start text-red-600">{formState.errors.name.message}</span>}
                <input className="mb-4 px-1 border-2 rounded placeholder-black bg-gray-400"
                       type="text" placeholder="Name" {...register('name', {
                    required: "Name is required",
                    minLength: {value: 2, message: "Name must be at least 2 characters long"},
                    pattern: {
                        value: /^[A-Za-z' ]+$/, message: "Name must contain only English letters"
                    }
                })}/>
                {formState.errors.email &&
                    <span className="text-start text-red-600">{formState.errors.email.message}</span>}
                <input className="mb-4 px-1 border-2 rounded placeholder-black bg-gray-400"
                       type="email" placeholder="Email address" {...register('email', {
                    required: "Email is required"
                })}/>
                {formState.errors.subject &&
                    <span className="text-start text-red-600">{formState.errors.subject.message}</span>}
                <input className="mb-4 px-1 border-2 rounded placeholder-black bg-gray-400"
                       type="text" placeholder="Subject" {...register('subject', {
                    required: "Subject is required"
                })}/>
                {formState.errors.message &&
                    <span className="text-start text-red-600">{formState.errors.message.message}</span>}
                <textarea className="mb-10 h-40 px-1 border-2 rounded placeholder-black bg-gray-400"
                          placeholder="Message" {...register('message', {
                    required: "Message content is required"
                })}></textarea>
                <div>
                    <button
                        className="px-4 py-1 font-semibold border-2 text-white bg-blue-900 rounded-lg hover:bg-blue-950"
                        type="submit">Send message
                    </button>
                </div>
            </form>
        </div>)
}