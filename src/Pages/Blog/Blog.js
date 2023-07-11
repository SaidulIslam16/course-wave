export const Blog = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 row-gap-8 lg:grid-cols-5">
                <div className="lg:col-span-2">
                    <div className="mb-3">
                        <a
                            href="/"
                            aria-label="Article"
                            className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-4xl xl:text-5xl">
                                What is cors?
                            </p>
                        </a>
                    </div>
                    <p className="mb-4 text-base text-gray-700 md:text-lg">
                        CORS (Cross-Origin Resource Sharing) is a security mechanism implemented in web browsers that allows restricted resources (such as fonts, scripts, or API data) on a web page to be requested from a different domain than the one serving the page. It is a mechanism that enables controlled access to resources on different origins or domains.
                        <br />
                        <br />
                        By default, web browsers enforce the "same-origin policy," which restricts scripts and requests from accessing resources on a different origin. CORS provides a way for servers to specify which origins are allowed to access their resources. It involves the use of HTTP headers (such as Access-Control-Allow-Origin) that the server sends in its responses to inform the browser about the permissions granted for cross-origin requests.
                    </p>
                </div>
                <div className="flex flex-col space-y-8 lg:col-span-3">
                    <div>
                        <div className="mb-3">
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                                    Why are you using firebase? What other options do you have to implement authentication?
                                </p>
                            </a>
                        </div>
                        <p className="mb-4 text-base text-gray-700 md:text-lg">
                            Firebase is a popular backend-as-a-service (BaaS) platform provided by Google. It offers a wide range of services, including authentication, real-time databases, cloud storage, and more. Here are some reasons why developers opt for Firebase authentication.
                            <br />
                            <br />
                            While Firebase is a popular choice, there are alternative options for implementing authentication:
                            <br />
                            <li>Roll your own </li>
                            <li>Auth0 </li>
                            <li>AWS Cognito </li>
                            <li>Okta </li>
                        </p>
                    </div>
                    <div>
                        <div className="mb-3">
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                                    How does the private route work?
                                </p>
                            </a>
                        </div>
                        <p className="mb-4 text-base text-gray-700 md:text-lg">
                            A private route is a web route or page that requires authentication to access. It checks if a user is logged in and redirects them to the login page if not. Authenticated users can access the route, while unauthorized users are restricted. Private routes enhance security and control access to sensitive content or features within an application.
                        </p>
                    </div>
                    <div>
                        <div className="mb-3">
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                                    What is Node? How does Node work?
                                </p>
                            </a>
                        </div>
                        <p className="mb-4 text-base text-gray-700 md:text-lg">
                            Node.js is a server-side JavaScript runtime environment that allows developers to run JavaScript code outside of web browsers. It uses an event-driven, non-blocking I/O model to handle concurrent requests efficiently. With its single-threaded, asynchronous execution, it can handle high traffic and scalable applications. Node.js comes with NPM, a package manager that provides access to a vast ecosystem of libraries and frameworks. It is cross-platform and widely used for building web servers, APIs, and real-time applications.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};