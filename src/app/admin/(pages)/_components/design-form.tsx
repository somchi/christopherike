'use client';

import { DropZone } from '../../_components/drop-zone';
import { FormControl } from './form-control';
import { Input } from './input';
import { Label } from './label';

export const DesignForm = () => {
  const handleFileUpload = (file: any) => {
    console.log(file);
  };
  return (
    <form>
      <FormControl>
        <Label>Name</Label>
        <Input placeholder="Enter name" className="font-medium" />
      </FormControl>
      <FormControl>
        <Label>Image</Label>
        <DropZone setFile={handleFileUpload} />
      </FormControl>
      <FormControl>
        <button className="rounded-full w-80 bg-green-600 text-white py-3 px-1 text-lg font-semibold">
          Submit
        </button>
      </FormControl>
    </form>
  );
};
