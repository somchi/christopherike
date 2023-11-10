import { FormControl } from './form-control';
import { Input } from './input';
import { Label } from './label';

export const ServiceForm = () => {
  return (
    <form>
      <FormControl>
        <Label>Name</Label>
        <Input placeholder="Enter service" className="font-medium" />
      </FormControl>
      <FormControl>
        <Label>Description</Label>
        <textarea
          className="w-full p-5 bg-gray-700 rounded-xl font-medium text-gray-300 
          focus:outline-none focus:ring-1 focus:ring-blue-300"
          rows={5}
        />
      </FormControl>
      <FormControl>
        <button className="rounded-full w-80 bg-green-600 text-white py-3 px-1 text-lg font-semibold">
          Submit
        </button>
      </FormControl>
    </form>
  );
};
