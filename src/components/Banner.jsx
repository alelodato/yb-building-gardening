export default function Banner() {
    return (
        <section>
            <div className="hidden w-full sm:inline-block bg-gray-900 text-white py-3 text-center font-heading">
                <p className="text-sm md:text-base animate-pulse">
                    Operating across the Cambridge area • Call us: <a href="tel:+447860719081" className="font-semibold">07860 719081</a>
                </p>
            </div>
            <div className="bg-gray-900 text-white py-3 text-center font-heading sm:hidden">
                <p className="text-sm md:text-base animate-pulse">
                    Operating across the Cambridge area
                    <br />
                    Call us: <a href="tel:+447860719081" className="font-semibold">07860 719081</a>
                </p>
            </div>
        </section>
    );
}
