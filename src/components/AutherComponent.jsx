

export default function AutherComponent() {
    return (
        <>
            <div className="space-y-2 w-[90%]">
                <details
                    className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                >
                    <summary
                        className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
                    >
                        <span className="text-sm font-medium"> Availability </span>

                        <span className="transition group-open:-rotate-180">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </span>
                    </summary>

                    <div className="border-t border-gray-200 bg-white">
                        <header className="flex items-center justify-between p-4">
                            <span className="text-sm text-gray-700"> 0 Selected </span>

                            <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                                Reset
                            </button>
                        </header>

                        <ul className="space-y-1 border-t border-gray-200 p-4">
                            <li>
                                <label for="FilterInStock" className="inline-flex items-center gap-2">
                                    <input type="checkbox" id="FilterInStock" className="size-5 rounded border-gray-300" />

                                    <span className="text-sm font-medium text-gray-700"> In Stock (5+) </span>
                                </label>
                            </li>

                            <li>
                                <label for="FilterPreOrder" className="inline-flex items-center gap-2">
                                    <input type="checkbox" id="FilterPreOrder" className="size-5 rounded border-gray-300" />

                                    <span className="text-sm font-medium text-gray-700"> Pre Order (3+) </span>
                                </label>
                            </li>

                            <li>
                                <label for="FilterOutOfStock" className="inline-flex items-center gap-2">
                                    <input type="checkbox" id="FilterOutOfStock" className="size-5 rounded border-gray-300" />

                                    <span className="text-sm font-medium text-gray-700"> Out of Stock (10+) </span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </details>

                <details
                    className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                >
                    <summary
                        className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
                    >
                        <span className="text-sm font-medium"> Price </span>

                        <span className="transition group-open:-rotate-180">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </span>
                    </summary>

                    <div className="border-t border-gray-200 bg-white">
                        <header className="flex items-center justify-between p-4">
                            <span className="text-sm text-gray-700"> The highest price is $600 </span>

                            <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                                Reset
                            </button>
                        </header>

                        <div className="border-t border-gray-200 p-4">
                            <div className="flex justify-between gap-4">
                                <label for="FilterPriceFrom" className="flex items-center gap-2">
                                    <span className="text-sm text-gray-600">$</span>

                                    <input
                                        type="number"
                                        id="FilterPriceFrom"
                                        placeholder="From"
                                        className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                    />
                                </label>

                                <label for="FilterPriceTo" className="flex items-center gap-2">
                                    <span className="text-sm text-gray-600">$</span>

                                    <input
                                        type="number"
                                        id="FilterPriceTo"
                                        placeholder="To"
                                        className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                </details>
            </div>


            <a
                className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
                href="#"
            >
                Download
            </a>


            <a
                className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"
                href="#"
            >
                Download
            </a>

            <ul className="space-y-1 w-[90%]">
                <li>
                    <a
                        href="#"
                        className="group flex items-center justify-between rounded-lg bg-gray-100 px-4 py-2 text-gray-700"
                    >
                        <span className="text-sm font-medium"> General </span>
                    </a>
                </li>

                <li>
                    <a
                        href="#"
                        className="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                        <span className="text-sm font-medium"> Teams </span>

                        <span
                            className="shrink-0 rounded-full bg-gray-100 px-3 py-0.5 text-xs text-gray-600 group-hover:bg-gray-200 group-hover:text-gray-700"
                        >
                            5
                        </span>
                    </a>
                </li>

                <li>
                    <a
                        href="#"
                        className="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                        <span className="text-sm font-medium"> Billing </span>
                    </a>
                </li>

                <li>
                    <a
                        href="#"
                        className="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                        <span className="text-sm font-medium"> Invoices </span>

                        <span
                            className="shrink-0 rounded-full bg-gray-100 px-3 py-0.5 text-xs text-gray-600 group-hover:bg-gray-200 group-hover:text-gray-700"
                        >
                            3
                        </span>
                    </a>
                </li>

                <li>
                    <a
                        href="#"
                        className="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                        <span className="text-sm font-medium"> Account </span>
                    </a>
                </li>
            </ul>
        </>
    )
}
