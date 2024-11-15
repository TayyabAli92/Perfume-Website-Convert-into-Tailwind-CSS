export default function Contact() {
  return (
    <div className="flex flex-col justify-center p-4 mb-12 mt-12">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-center text-3xl mb-4">Contact Us</h1>
        <p className="text-center mb-6">
          If you have any questions or inquiries, feel free to reach out to us
          using the form below.
        </p>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 text-white font-semibold py-2 rounded-md hover:bg-pink-700 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
