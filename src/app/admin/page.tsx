import { Designs } from './_components/sections/designs';
import { Reviews } from './_components/sections/reviews';
import { Services } from './_components/sections/services';
import { Skills } from './_components/sections/skills';
import { Users } from './_components/sections/users';
import { Videos } from './_components/sections/video';

const AdminHome = () => {
  return (
    <main className="grid relative md:px-20 px-8">
      <div className="flex gap-6">
        <div className="grid md:w-1/2 gap-6 h-fit">
          <Services />
          <Skills />

          <Videos />
        </div>
        <div className="grid md:w-1/2 gap-6 h-fit">
          <Reviews />
          <Users />
          <Designs />
        </div>
      </div>
    </main>
  );
};
export default AdminHome;
