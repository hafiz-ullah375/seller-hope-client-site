import React from 'react';



const Blogs = () => {

    return (
        <div className="flex my-8 items-center justify-center ">
            <div className="bg-white">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold">
                        Some Asked Questions
                    </h2>
                    <p className="mt-4 mb-8 text-gray-600">
                        Learn skills Questions And Answers
                    </p>
                    <div className="space-y-4">
                        <details className="w-full rounded-lg ring-1 ring-purple-600">
                            <summary className="px-4 py-6">
                                What are the different ways to manage a state in a React application?
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                                What options do I have to manage my React app state? What are the different state management libraries available?

                                Data management is very hard. And as an application grows and evolves, it’s essential to have a strategy in place to manage data. Whatever state management library is used, a robust application well-architected and thoroughly designed can make a massive difference in the developers’ productivity.

                                Thanks to the development of React and new libraries, Redux isn’t the only choice anymore. New libraries and technologies are available to simplify the way of managing data and application states.
                            </p>

                        </details>
                        <details className="w-full rounded-lg ring-1 ring-purple-600">
                            <summary className="px-4 py-6">
                                How does prototypical inheritance work?
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                                The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                            </p>
                        </details>
                        <details className="w-full rounded-lg ring-1 ring-purple-600">
                            <summary className="px-4 py-6">
                                What is a unit test? Why should we write unit tests?
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                                Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected.
                                <br />
                                Unit testing is   parts of software systems (“units”) in order to better understand what should happen when I put them together. When the system doesn’t behave as I expect, these “unit tests” help me figure out which part of the system needs to change, either because it behaves incorrectly or because it assumes something incorrectly about how another part of the system should behave.

                            </p>
                        </details>
                        <details className="w-full rounded-lg ring-1 ring-purple-600">
                            <summary className="px-4 py-6">
                                React vs. Angular vs. Vue?
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                                React is a UI library, Angular is a fully-fledged front-end framework,
                                <br />
                                Specific three names will undoubtedly be the most brought up frameworks on your search results page: React, Angular, and Vue. These names stand out because all JavaScript-based, non-trivial applications came to life with the help of at least one of these three famous frameworks.
                                Angular, React, and Vue are the most popular frameworks for any project that has something to do with JavaScript, from creating mobile, small-scale applications to building intuitive user interfaces for business web apps. However, before going into the actual comparison, I will guide you through the essential aspects and history of each JS Framework.
                            </p>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;