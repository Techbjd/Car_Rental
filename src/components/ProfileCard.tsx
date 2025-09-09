import { HiCheckCircle } from "react-icons/hi";
function ProfileCard() {
  return (
    <div className="max-w-[1296px] mx-auto px-6 py-16 flex flex-col md:flex-row gap-16">
      
      {/* Left Column - Text */}
      <div className="flex-1 flex flex-col gap-6">
        <h2 className="text-4xl md:text-5xl font-bold">
          Unlock unforgettable memories on the road
        </h2>
        <p className="text-gray-700 text-base md:text-lg">
          Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper.
        </p>

        {/* Checkmark Sections */}
        <div className="flex flex-col md:flex-row gap-6 p-4 rounded-2xl">
          <div className="flex-1 flex flex-col gap-2 text-gray-600 text-sm">
            <div className="flex items-start gap-2">
              <HiCheckCircle className="text-[#5937E0]-500 w-[32px] h-[32px]  mt-1" />
              <p>Velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper</p>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-2 text-gray-600 text-sm">
            <div className="flex items-start gap-2">
              <HiCheckCircle className="text-[#5937E0]-500 w-[32px] h-[32px]  mt-1" />
              <p>Velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6  p-4 rounded-2xl">
          <div className="flex-1 flex flex-col gap-2 text-gray-600 text-sm">
            <div className="flex items-start gap-2">
              <HiCheckCircle className="text-[#5937E0]-500 w-[32px] h-[32px]  mt-1" />
              <p>Velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper</p>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-2 text-gray-600 text-sm">
            <div className="flex items-start gap-2">
              <HiCheckCircle className="text-[#5937E0]-500 w-[32px] h-[32px] mt-1" />
              <p>Velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper</p>
            </div>
          </div>
        </div>

      </div>

      {/* Right Column - Image */}
      <div className="flex-1 flex ">
        <img
          src="data:image/jpeg;base64,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"
          alt="Profile"
          className="w-full max-w-[550px] h-auto rounded-2xl bg-amber-300"
        />
      </div>

    </div>
  );
}

export default ProfileCard;
