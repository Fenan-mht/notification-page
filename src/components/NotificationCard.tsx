import sampleUser from "../assets/download.jpeg";
import Button from "./Button";

const NotificationCard = () => {
  return (
    <div className="bg-white  py-2 px-5 border w-full ">
      <div className="flex flex-row gap-3">
        <div className="w-10 h-10">
          <img src={sampleUser} className="h-10 w-10 rounded-full" alt="" />
        </div>
        <div className="flex flex-col gap-1">
          <div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <p className="text-xs">5 min ago</p>
          </div>
          <div className="flex flex-row gap-2">
            <Button
              buttonStyle={"bg-blue-500 text-white"}
              buttonTitle={"Accept"}
              onclick={() => {}}
            />
            <Button
              buttonStyle={"border bg-white text-gray-500 shadow-md "}
              buttonTitle={"Deny"}
              onclick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
