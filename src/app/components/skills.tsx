'use client';
import React from 'react';

const Skill = ({ degree }: { degree: string }) => {
  return (
    <div className="grid w-full md:w-[48%] gap-2">
      <h3 className="font-medium text-xl">Photoshop</h3>
      <div className="bg-slate-800 h-3 w-full rounded-full">
        <div
          style={{ width: `${degree}%` }}
          className={`bg-green-400 h-3 rounded-full`}
        ></div>
      </div>
    </div>
  );
};
export default Skill;
