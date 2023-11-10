import { Skill as SkillType } from '@/app/_libs/types';
import { Separator } from '@/app/components/separetor';
import Skill from '@/app/components/skills';
import { Pencil, Trash2 } from 'lucide-react';

const Item = ({ skill }: { skill: SkillType }) => {
  return (
    <div className="grid my-3 md:w-[49%] px-3">
      <div className="flex justify-between">
        <Skill degree={skill.degree} name={skill.name} />
        <div className="flex gap-4">
          <div className="cursor-pointer">
            <Pencil size={15} />
          </div>
          <div className="cursor-pointer">
            <Trash2 size={15} />
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-3">
        <span className="text-sm font-medium">
          Create by: {skill.createdBy}
        </span>
        <span className="text-sm font-medium">Create: {skill.dateCreate}</span>
        <span className="text-sm font-medium">
          Modified: {skill.lastModified}
        </span>
      </div>
    </div>
  );
};

export const Skills = () => {
  return (
    <div className="w-full shadow-xl rounded p-5">
      <h2 className="font-bold text-xl">Skills</h2>
      <div className="grid md:flex flex-wrap">
        <Item
          skill={{
            name: 'Technical Writing',
            dateCreate: 'June 23rd, 2023',
            lastModified: 'June 23rd, 2023',
            createdBy: 'Christopher',
            degree: '80',
          }}
        />
        <Separator className="!bg-gray-600 md:w-[2px] md:h-24" />
        <Item
          skill={{
            name: 'Technical Writing',
            dateCreate: 'June 23rd, 2023',
            lastModified: 'June 23rd, 2023',
            createdBy: 'Christopher',
            degree: '80',
          }}
        />
        <Separator className="!bg-gray-600 md:w-[2px] md:h-24" />
        <Item
          skill={{
            name: 'Technical Writing',
            dateCreate: 'June 23rd, 2023',
            lastModified: 'June 23rd, 2023',
            createdBy: 'Christopher',
            degree: '80',
          }}
        />
      </div>
    </div>
  );
};
