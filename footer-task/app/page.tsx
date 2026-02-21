
import Footer from "../components/Footer";

export default function Home() {
  return (
      //empty main with min height of the screen, flex column to push the footer to the bottom, and centered content
      <main className="min-h-screen flex flex-col justify-end">

        <div className="flex-grow flex items-center justify-center">
          <h2 className="text-2xl text-gray-400">Website Content</h2>
        </div>

        <Footer />

      </main>
  );
}