import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import { Btn } from '../components/FigmaShared';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center p-4">
      <AlertCircle className="mb-4 h-12 w-12 text-muted-foreground" />
      <h1 className="mb-2 text-2xl font-bold">Page Not Found</h1>
      <p className="mb-6 text-muted-foreground">The page you are looking for does not exist.</p>
      <Btn variant="primary" onClick={() => navigate('/dashboard')}>Go to Dashboard</Btn>
    </div>
  );
}
