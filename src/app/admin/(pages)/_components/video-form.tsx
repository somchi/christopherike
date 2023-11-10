'use client';

import { DropzoneVideo } from '../../_components/dropzone-video';
import { FormControl } from './form-control';
import { Input } from './input';
import { Label } from './label';

export const VideoForm = () => {
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
        <Label>Video</Label>
        <DropzoneVideo setFile={handleFileUpload} />
      </FormControl>
      <FormControl>
        <button className="rounded-full w-80 bg-green-600 text-white py-3 px-1 text-lg font-semibold">
          Submit
        </button>
      </FormControl>
    </form>
  );
};
