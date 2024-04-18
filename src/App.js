import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShareIcon from '@mui/icons-material/Share';
import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

import GirlOne from './assets/images/girl-1.jpeg';
import GirlTwo from './assets/images/girl-2.jpeg';
import GirlThree from './assets/images/girl-3.jpeg';
import GirlFour from './assets/images/girl-4.jpeg';

function App() {
  return (
    <div className="p-4">
      <div>
        <ArrowBackIcon className="w-4 text-white cursor-pointer" />
      </div>
      <h1 className="mt-2 text-4xl text-white">City News</h1>
      <div className="mt-8 ">
        <div className="bg-car rounded-xl min-h-40 px-4">
          <div className="bg-white min-h-36 rounded-xl translate-y-14 p-5">
            <div className="flex">
              <img className="rounded-xl w-10 h-10" src={GirlOne} alt="pp-1" />
              <div className="ml-2">
                <h1 className="text-[#454F63] text-base">
                  Andrée-Ann Labranche
                </h1>
                <p className="text-[#454F63] opacity-50 text-xs">18 Nov</p>
              </div>
            </div>
            <p className="text-[#78849E] text-sm my-2">
              We must believe that we are gifted for something, and that this
              thing, at whatever cost, must be attained.
            </p>
            <div className="bg-[#F4F4F6FD] min-h-[1px]"></div>
            <div class="flex flex-row text-[#78849E]">
              <div class="basis-1/2">
                <ShareIcon className="cursor-pointer" />
              </div>
              <div class="basis-1/4 ">
                <span className="text-sm">256</span>
                <MapsUgcRoundedIcon className="ml-1 cursor-pointer" />
              </div>
              <div class="basis-1/4">
                <span className="text-sm ml-2">2K</span>
                <FavoriteBorderRoundedIcon className="ml-1 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4">
        <div className="min-h-36">
          <img
            className="rounded-xl w-24 h-24 translate-y-[7.3rem]"
            src={GirlOne}
            alt="pp-1"
          />
          <div className="bg-white rounded-xl p-5 pl-16 ml-10">
            <div className="flex">
              <div className="mr-2">
                <p className="text-[#454F63] opacity-50 text-xs">17 Nov</p>
                <h1 className="text-[#454F63] text-base">Adrien Stone</h1>
              </div>
              <img
                className="rounded-xl w-10 h-10 ml-20"
                src={GirlOne}
                alt="pp-1"
              />
            </div>
            <p className="text-[#78849E] text-sm my-2">
              If you’re offered a seat on a rocket ship, don’t ask what seat!
              Just get on.
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 mt-8">
        <div className="min-h-36 flex">
          <div className="bg-white rounded-xl p-5 pr-16 mr-10">
            <div className="flex">
              <img className="rounded-xl w-10 h-10" src={GirlOne} alt="pp-1" />
              <div className="ml-2">
                <p className="text-[#454F63] opacity-50 text-xs">16 Nov</p>
                <h1 className="text-[#454F63] text-base">Bernard Nolan</h1>
              </div>
            </div>
            <p className="text-[#78849E] text-sm my-2">
              You can’t fall if you don’t climb. But there’s no joy in living
              your whole life on the ground.
            </p>
          </div>
          <img
            className="rounded-xl w-24 h-24 absolute right-8 translate-y-7"
            src={GirlOne}
            alt="pp-1"
          />
        </div>
      </div>

      <div className="px-4 mt-8">
        <div className="min-h-36 flex">
          <img
            className="rounded-xl w-24 h-24 absolute translate-y-6"
            src={GirlOne}
            alt="pp-1"
          />
          <div className="bg-white rounded-xl p-5 pl-16 ml-10">
            <div className="flex">
              <div className="mr-2">
                <p className="text-[#454F63] opacity-50 text-xs">17 Nov</p>
                <h1 className="text-[#454F63] text-base">Adrien Stone</h1>
              </div>
              <img
                className="rounded-xl w-10 h-10 ml-20"
                src={GirlOne}
                alt="pp-1"
              />
            </div>
            <p className="text-[#78849E] text-sm my-2">
              If you’re offered a seat on a rocket ship, don’t ask what seat!
              Just get on.
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 mt-8">
        <div className="min-h-36 flex">
          <div className="bg-white rounded-xl p-5 pr-16 mr-10">
            <div className="flex">
              <img className="rounded-xl w-10 h-10" src={GirlOne} alt="pp-1" />
              <div className="ml-2">
                <p className="text-[#454F63] opacity-50 text-xs">16 Nov</p>
                <h1 className="text-[#454F63] text-base">Bernard Nolan</h1>
              </div>
            </div>
            <p className="text-[#78849E] text-sm my-2">
              You can’t fall if you don’t climb. But there’s no joy in living
              your whole life on the ground.
            </p>
          </div>
          <img
            className="rounded-xl w-24 h-24 absolute right-8 translate-y-7"
            src={GirlOne}
            alt="pp-1"
          />
        </div>
      </div>

      <div className="px-4 mt-8">
        <div className="min-h-36 flex">
          <img
            className="rounded-xl w-24 h-24 absolute translate-y-6"
            src={GirlOne}
            alt="pp-1"
          />
          <div className="bg-white rounded-xl p-5 pl-16 ml-10">
            <div className="flex">
              <div className="mr-2">
                <p className="text-[#454F63] opacity-50 text-xs">17 Nov</p>
                <h1 className="text-[#454F63] text-base">Adrien Stone</h1>
              </div>
              <img
                className="rounded-xl w-10 h-10 ml-20"
                src={GirlOne}
                alt="pp-1"
              />
            </div>
            <p className="text-[#78849E] text-sm my-2">
              If you’re offered a seat on a rocket ship, don’t ask what seat!
              Just get on.
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 mt-8">
        <div className="min-h-36 flex">
          <div className="bg-white rounded-xl p-5 pr-16 mr-10">
            <div className="flex">
              <img className="rounded-xl w-10 h-10" src={GirlOne} alt="pp-1" />
              <div className="ml-2">
                <p className="text-[#454F63] opacity-50 text-xs">16 Nov</p>
                <h1 className="text-[#454F63] text-base">Bernard Nolan</h1>
              </div>
            </div>
            <p className="text-[#78849E] text-sm my-2">
              You can’t fall if you don’t climb. But there’s no joy in living
              your whole life on the ground.
            </p>
          </div>
          <img
            className="rounded-xl w-24 h-24 absolute right-8 translate-y-7"
            src={GirlOne}
            alt="pp-1"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
