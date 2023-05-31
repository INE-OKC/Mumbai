import bellpic from '../assets/image/bellicon.png'
import activitypic from '../assets/image/activityicon.png'

function Activity() {
  return (
    <div className="flex justify-between px-4 py-4 ">
      <h3 className="text-white font-medium md:text-sm md:ml-8">Activity</h3>
      <div>
        <button>
          <a href="/">
            <img src={bellpic} alt="pic" className="inline mr-6 md:w-4 md:mr-2" />
          </a>
        </button>
        <button>
          <a href="/">
            <img src={activitypic} alt="pic" className="inline md:w-4" />
          </a>
        </button>
      </div>
    </div>
  );
}

export default Activity