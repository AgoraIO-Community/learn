import Image from "next/image"
export default function FlutterHome() {
    return (
        <main className="flex flex-col items-center justify-between p-24">


            <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] text-7xl text-center font-bold">
                Video Call with Flutter
            </div>
            <div className="text-center mb-20">
                <p className="text-lg mt-2">Here, you will learn how to build a video call application using Flutter.</p>
            </div>
            <Image
                src="/course_showcase.png"
                alt="Course Showcase"
                width={800}
                height={300}
            />


            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <h1
                    className=" pb-8 mx-auto text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white"
                >
                    What you will learn
                </h1>
                <ul className="list-inside">
                    <li className="pb-16">
                        <h3 className="text-xl font-bold">Core Concepts</h3>
                        <p>
                            This section introduces what agora is and the fundamental concepts of real time communication.
                        </p>
                    </li>
                    <li className="pb-16">
                        <h3 className="text-xl font-bold">Create the Video Call</h3>
                        <p>
                            We will create a video call application using Flutter and Agora.
                        </p>
                    </li>
                    <li className="pb-16">
                        <h3 className="text-xl font-bold">Video Call UI</h3>
                        <p>
                            Create a responsive UI that works on both mobile and web.
                        </p>
                    </li>
                </ul>
            </div>
        </main >
    )
}
