import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import { Btn } from '../components/FigmaShared';

export default function Unauthorized() {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center p-4">
      <AlertCircle className="mb-4 h-12 w-12 text-destructive" />
      <h1 className="mb-2 text-2xl font-bold">Access Denied</h1>
      <p className="mb-6 text-muted-foreground">You do not have permission to view this page.</p>
      <Btn variant="primary" onClick={() => navigate('/dashboard')}>Go to Dashboard</Btn>
    </div>
  );
}
