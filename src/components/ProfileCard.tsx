import { HiCheckCircle } from "react-icons/hi";
function ProfileCard() {
  return (
    <section className="w-full flex justify-center">
      <div className="w-full max-w-[1296px] px-6 py-16 flex flex-col md:flex-row gap-16">
        
        {/* Left Column - Text */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Unlock unforgettable memories on the road
          </h2>
          <p className="text-gray-700 text-base md:text-lg">
            Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. 
            Quis nunc interdum gravida ullamcorper.
          </p>

          {/* Checkmark Sections */}
          <div className="flex flex-col md:flex-row gap-6 p-4 rounded-2xl">
            <div className="flex-1 flex flex-col gap-2 text-gray-600 text-sm">
              <div className="flex items-start gap-2">
                <HiCheckCircle className="text-[#5937E0] w-[32px] h-[32px] mt-1" />
                <p>Velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper</p>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2 text-gray-600 text-sm">
              <div className="flex items-start gap-2">
                <HiCheckCircle className="text-[#5937E0] w-[32px] h-[32px] mt-1" />
                <p>Velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 p-4 rounded-2xl">
            <div className="flex-1 flex flex-col gap-2 text-gray-600 text-sm">
              <div className="flex items-start gap-2">
                <HiCheckCircle className="text-[#5937E0] w-[32px] h-[32px] mt-1" />
                <p>Velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper</p>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2 text-gray-600 text-sm">
              <div className="flex items-start gap-2">
                <HiCheckCircle className="text-[#5937E0] w-[32px] h-[32px] mt-1" />
                <p>Velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg"
            alt="Profile"
            className="w-full max-w-[550px] h-auto rounded-2xl bg-amber-300"
          />
        </div>
      </div>
    </section>
  );
}


export default ProfileCard;
