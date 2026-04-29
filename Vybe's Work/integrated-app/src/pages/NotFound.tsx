import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="py-24 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-slate-500 mt-2">That page doesn't exist.</p>
      <Link to="/" className="text-brand-600 hover:underline mt-4 inline-block">
        Back to Home
      </Link>
    </div>
  );
}
