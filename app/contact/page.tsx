import Link from "next/link";

export const metadata = {
    title: "Contact Me",
    description: "Set up a meeting or drop me a message.",
}

export default function ContactPage() {
    return (
        <section className="container mx-auto px-4 py-8">
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Contact Me</h1>
            <p className="mb-4 text-neutral-800 dark:text-neutral-200">
                I would love to hear from you. You can either schedule a meeting using the calendar below or email me directly.
            </p>
            <div className="mb-8">
                <iframe
                    src="https://calendly.com/shreshthg30"
                    className="w-[90%] mx-auto h-[600px] border-0"
                    title="Schedule a Meeting"
                ></iframe>
            </div>
            <p className="text-neutral-800 dark:text-neutral-200">
                Or send me an email at{" "}
                <Link
                    href="mailto:shreshthg30@gmail.com"
                    className="text-blue-500 hover:underline"
                >
                    shreshthg30@gmail.com
                </Link>
            </p>
        </section>
    )
}
