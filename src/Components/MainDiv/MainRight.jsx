import MainSideRightBottom from './MainSideRightBottom';
import MainSideRightTop from './MainSideRightTop';

export default function MainRight() {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex basis-2/3">
        <MainSideRightTop />
      </div>
      <div className="flex basis-1/3">
        <MainSideRightBottom />
      </div>
    </div>
  );
}
