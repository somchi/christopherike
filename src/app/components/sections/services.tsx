import { forwardRef } from 'react';

const Skill = ({ degree }: { degree: string }) => {
  const value = degree;
  const width = `w-[${value}%]`;
  return (
    <div className="grid w-full md:w-[48%] gap-2">
      <h3 className="font-medium text-xl">Photoshop</h3>
      <div className="bg-slate-800 h-3 w-full rounded-full">
        <div
          className={`${width.toString()} bg-green-400 h-3 rounded-full`}
        ></div>
      </div>
    </div>
  );
};

export const Services = forwardRef<
  HTMLSelectElement,
  React.HTMLAttributes<HTMLSelectElement>
>(({ ...props }, ref) => {
  return (
    <section
      id="services"
      className="md:px-20 px-10 py-20 bg-gray-700"
      ref={ref}
    >
      <div className="grid items-center gap-2 justify-center mb-10">
        <h1 className="font-bold text-4xl text-center">My Services</h1>
        <div className="h-1 w-20 bg-green-400 justify-self-center flex"></div>
      </div>
      <div className="grid w-full md:justify-between md:flex-wrap md:flex gap-8 gap-y-8">
        <div className="md:w-[48%] flex  flex-col gap-2">
          <h1 className="font-semibold text-2xl text-gray-300">
            Technical Writing
          </h1>
          <h2 className="line-clamp-6 hover:line-clamp-none">
            Let me help you create concise, easy-to-read user guides and product
            documentation for your software products. What’s more, I can help
            you write how-to tutorials on topics like WordPress, web
            development, etc. Be rest assured that the technical content I would
            be creating for you will be well-annotated and filled with
            illustrative videos to make it easy for your readers to follow.
          </h2>
        </div>
        <div className="md:w-[48%] flex  flex-col gap-2 relative">
          <h1 className="font-semibold text-2xl text-gray-300">
            Content Writing
          </h1>
          <h2 className="line-clamp-6">
            As your content writer, you would not bother thinking of what to
            write for your social media pages or your blogpost. I write
            articulating, eye- catching topics bearing in mind the search
            optimization of the keywords for high conversion.
          </h2>
        </div>
        <div className="md:w-[48%] flex flex-col gap-2">
          <h1 className="font-semibold text-2xl text-gray-300">Copy Writing</h1>
          <h2 className="line-clamp-6">
            I write content for your promotional ads or post, sales slash, or
            discount sales for the sole purpose of advertising. I write basic
            and easy to understand content for your brands for awareness or to
            convince an individual to take an action
          </h2>
        </div>
        <div className="md:w-[48%] flex flex-col gap-2">
          <h1 className="font-semibold text-2xl text-gray-300">
            Video Editing
          </h1>
          <h2 className="line-clamp-6">
            I write content for your promotional ads or post, sales slash, or
            discount sales for the sole purpose of advertising. I write basic
            and easy to understand content for your brands for awareness or to
            convince an individual to take an action
          </h2>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="font-bold text-2xl">My Skills</h1>
        <div className="grid mt-4 w-full md:justify-between flex-wrap  md:flex gap-8 gap-y-8">
          <Skill degree="80" />
          <Skill degree="80" />
          <Skill degree="80" />
        </div>
      </div>
    </section>
  );
});

Services.displayName = 'Services';
