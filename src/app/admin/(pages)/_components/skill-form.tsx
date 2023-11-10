import { FormControl } from './form-control';
import { Input } from './input';
import { Label } from './label';

export const SkillForm = () => {
  return (
    <form>
      <FormControl>
        <Label>Name</Label>
        <Input placeholder="Enter name" className="font-medium" />
      </FormControl>
      <FormControl>
        <Label>Level</Label>
        <Input placeholder="Enter service" className="font-medium" />
      </FormControl>
      <FormControl>
        <button className="rounded-full w-80 bg-green-600 text-white py-3 px-1 text-lg font-semibold">
          Submit
        </button>
      </FormControl>
    </form>
  );
};
