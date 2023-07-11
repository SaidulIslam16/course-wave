import { useState } from "react";

const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b">
            <button
                type="button"
                aria-label="Open item"
                title="Open item"
                className="flex items-center justify-between w-full p-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="text-lg font-medium">{title}</p>
                <svg
                    viewBox="0 0 24 24"
                    className={`w-3 text-gray-600 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                        }`}
                >
                    <polyline
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        points="2,7 12,17 22,7"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            {isOpen && (
                <div className="p-4 pt-0">
                    <p className="text-gray-700">{children}</p>
                </div>
            )}
        </div>
    );
};

export const Faq = () => {
    return (
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
            <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                    <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span class="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="232db96b-4aa2-422f-9086-5a77996d1df1"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#232db96b-4aa2-422f-9086-5a77996d1df1)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span class="relative">The</span>
                        </span>{' '}
                        Faqs About Courses
                    </h2>
                    <p class="text-base text-gray-700 md:text-lg ">
                        Discover answers to commonly asked questions about our courses. Get information on enrollment, course content, duration, prerequisites, certification, and more.
                    </p>
                </div>
                <div class="space-y-4">
                    <Item title="How do I enroll in a course?">
                        To enroll in a course, simply visit our website, browse the available courses, select the desired course, and follow the enrollment instructions provided. You may need to create an account and make the required payment.
                    </Item>
                    <Item title="What is the duration of a typical course?">
                        The duration of our courses varies depending on the specific program. Courses can range from a few weeks to several months. The duration is typically mentioned in the course description, providing you with an estimate of the time commitment required.
                    </Item>
                    <Item title="Are there any prerequisites for enrolling in a course?">
                        Prerequisites can vary depending on the course. Some courses may have specific requirements, such as prior knowledge, educational background, or certain skills. Prerequisite details are usually listed on the course page, allowing you to determine if you meet the requirements.
                    </Item>
                    <Item title="Will I receive a certificate upon course completion?">
                        Yes, upon successful completion of a course, you will typically receive a certificate of completion. This certificate serves as recognition of your accomplishment and can be used to showcase your skills and knowledge to employers or for further educational purposes. Certificate issuance criteria are outlined in the course information.
                    </Item>
                </div>
            </div>
        </div>
    );
};