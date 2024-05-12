/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
    return (
        <div>
            <section className="bg-red-200 text-indigo-600 body-font mb-10">
                {/* main  */}
                <div className="container px-5 py-10 mx-auto">
                    {/* Heading  */}
                    <h1 className=' text-center text-3xl font-bold text-black' >Testimonial</h1>
                    {/* para  */}
                    <h2 className=' text-center text-2xl font-semibold mb-10' ></h2>

                    <div className="flex flex-wrap -m-4">
                        {/* Testimonial 1 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-pink-500" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnv1u2ogunv5yUBU7VRdoKl463--XMBj-ynZ8E6PP7LQ&s" />
                                <p className="font-bold leading-relaxed">"ZL-Classic makes online shopping a breeze! With its wide range of products and easy navigation, I always find what I need quickly and efficiently."</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-black font-bold title-font tracking-wider text-sm uppercase">Akshay Jadhav</h2>
                                <p className="text-black">Senior Product Engineer</p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://www.devknus.com/img/gawri.png" />
                                <p className="font-bold leading-relaxed">"Impressed by ZL-Classic's seamless checkout process and timely delivery. Shopping here is always a pleasure!"</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-black font-bold title-font tracking-wider text-sm uppercase">S Mishra</h2>
                                <p className="text-black text-1xl">Business Consultant</p>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/512/436/436299.png" />
                                <p className="font-bold leading-relaxed">"ZL-Classic's customer service is top-notch! They're always ready to assist and ensure a smooth shopping experience every time."</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-black font-bold title-font tracking-wider text-sm uppercase">Suraj Yadav </h2>
                                <p className="text-black">Customer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial