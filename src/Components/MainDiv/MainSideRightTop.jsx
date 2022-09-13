export default function MainSideRightTop() {
  return (
    <div className="w-full h-full card bg-base-300 rounded-box place-items-center border border-white ml-1 flex justify-center items-center">
      <div>
        <h2 className="text-2xl">Progress</h2>
      </div>
      <div
        className="radial-progress text-primary mt-5"
        style={{'--value': 70}}
      >
        70%
      </div>
    </div>
  );
}
