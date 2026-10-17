function FeedbackItem({ cliente, data, children }) {
    return (
        <li className="list-disc ml-6 font-normal">
            <p className="leading-relaxed">
                “{children}”
            </p>
            {(cliente || data) && (
                <p className="text-base mt-2 opacity-80">
                    - {cliente}{cliente && data ? `, ${data}` : data}
                </p>
            )}
        </li>
    );
}

export default function Feedbacks() {
    return (
        <div className="flex flex-col justify-center w-full lg:w-3/5 text-white">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">Feedbacks.</h2>
            <p className="font-normal text-lg sm:text-xl mt-1 opacity-90">Quem conhece, confia.</p>
            <hr className="my-4 border-white w-28 border-t-2" />

            <ul className="flex flex-col gap-6 mt-4">
                <FeedbackItem cliente="Cliente 1" data="2026">
                    <strong className="font-bold">Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </FeedbackItem>

                <FeedbackItem cliente="Cliente 2" data="2026">
                    <strong className="font-bold">Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </FeedbackItem>

                <FeedbackItem cliente="Cliente 3" data="2025">
                    <strong className="font-bold">Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </FeedbackItem>
            </ul>
        </div>
    );
}

