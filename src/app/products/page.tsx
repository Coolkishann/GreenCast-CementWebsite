import { Suspense } from 'react';
import ProductsContent from './ProductsContent';

export const metadata = {
  title: 'Green Cast Collections | White Cement Solutions',
  description: 'Explore the White Collection by Green Cast, featuring Superior White, Eco-Cement, and Architectural Pro formulations for structural and decorative requirements.',
};

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen py-24 flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full border-4 border-secondary/20 border-t-secondary animate-spin" />
          <p className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant/80">Loading Collection...</p>
        </div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}
