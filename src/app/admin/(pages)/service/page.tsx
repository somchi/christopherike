import { ServiceForm } from '../_components/service-form';

const AddService = () => {
  return (
    <div className="md:mx-20 mx-8 mt-5">
      <div className="grid md:w-1/4">
        <ServiceForm />
      </div>
    </div>
  );
};
export default AddService;
