export default function Home() {
  return (
    <section
      className="flex items-center justify-center min-h-[100vh] text-center px-6 
      bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
      text-gray-900 dark:text-white transition-colors duration-500"
    >
      <div className="max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          🚧 Under Construction
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-6">
          This site is currently a work in progress. I am building something
          awesome — stay tuned!
        </p>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>
    </section>
  );
}
