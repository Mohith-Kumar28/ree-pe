import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

import { Form } from './new-product-form';
import { Preview } from './new-product-preview';

// Step 1: Define types for props
interface NewProductSheetProps {}

export const NewProductSheet: React.FC<NewProductSheetProps> = () => {
  // Step 2: Add state for preview visibility
  const [showPreview, setShowPreview] = useState<boolean>(false);

  // Step 3: Create a toggle function
  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="sm" variant="default" className="h-8 gap-1">
          New Product
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Create Product</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you are done.
          </SheetDescription>
        </SheetHeader>
        <Button
          onClick={togglePreview}
          variant="outline"
          className="absolute right-20 top-4"
        >
          {showPreview ? 'Close Preview' : 'Open Preview'}
        </Button>
        <main
          className={cn(
            ' flex-1 gap-4 overflow-auto p-4',
            showPreview ? 'grid  md:grid-cols-2 lg:grid-cols-3' : '',
          )}
        >
          <Form />
          {/* Step 5: Conditionally render the Preview component */}
          {showPreview && <Preview />}
        </main>
        <SheetFooter>
          {/* <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose> */}
          {/* Step 4: Add a toggle button */}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
