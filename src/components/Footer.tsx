export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 mt-12 bg-white">
      <div className="container py-8 text-sm text-gray-600">
        <p className="mb-2">Educational purposes only. Not financial advice.</p>
        <p>© {new Date().getFullYear()} FinLearn</p>
      </div>
    </footer>
  );
}
