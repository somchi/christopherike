import { Service } from '@/app/_libs/types';
import { Separator } from '@/app/components/separetor';
import { Pencil, Trash2 } from 'lucide-react';

const Item = ({ service }: { service: Service }) => {
  return (
    <div className="grid my-3">
      <div className="flex justify-between">
        <span className="font-medium">{service.name}</span>
        <div className="flex gap-4">
          <div className="cursor-pointer">
            <Pencil size={15} />
          </div>
          <div className="cursor-pointer">
            <Trash2 size={15} />
          </div>
        </div>
      </div>

      <span>{service.description}</span>
      <div className="flex justify-between mt-3">
        <span className="text-sm font-medium">
          Create by: {service.createdBy}
        </span>
        <span className="text-sm font-medium">
          Create: {service.dateCreate}
        </span>
        <span className="text-sm font-medium">
          Modified: {service.lastModified}
        </span>
      </div>
    </div>
  );
};

export const Services = () => {
  return (
    <div className="shadow-xl rounded p-5">
      <h2 className="font-bold text-xl">Services</h2>
      <div>
        <Item
          service={{
            name: 'Technical Writing',
            dateCreate: 'June 23rd, 2023',
            lastModified: 'June 23rd, 2023',
            createdBy: 'Christopher',
            description:
              'Let me help you create concise, easy-to-read user guides and product documentation for your software products. What’s more, I can help you write how-to tutorials on topics like WordPress, web development, etc. Be rest assured that the technical content I would be creating for you will be well-annotated and filled with illustrative videos to make it easy for your readers to follow.',
          }}
        />
        <Separator className="!bg-gray-600" />
        <Item
          service={{
            name: 'Technical Writing',
            dateCreate: 'June 23rd, 2023',
            lastModified: 'June 23rd, 2023',
            createdBy: 'Christopher',
            description:
              'Let me help you create concise, easy-to-read user guides and product documentation for your software products. What’s more, I can help you write how-to tutorials on topics like WordPress, web development, etc. Be rest assured that the technical content I would be creating for you will be well-annotated and filled with illustrative videos to make it easy for your readers to follow.',
          }}
        />
        <Separator className="!bg-gray-600" />
        <Item
          service={{
            name: 'Technical Writing',
            dateCreate: 'June 23rd, 2023',
            lastModified: 'June 23rd, 2023',
            createdBy: 'Christopher',
            description:
              'Let me help you create concise, easy-to-read user guides and product documentation for your software products. What’s more, I can help you write how-to tutorials on topics like WordPress, web development, etc. Be rest assured that the technical content I would be creating for you will be well-annotated and filled with illustrative videos to make it easy for your readers to follow.',
          }}
        />
      </div>
    </div>
  );
};
