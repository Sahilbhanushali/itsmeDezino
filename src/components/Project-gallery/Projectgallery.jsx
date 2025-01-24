import React from "react";

const Projectgallery = () => {
  return (
    <div className="grid gap-4">
      {/* First big image */}
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
          alt="Big Image 1"
        />
      </div>

      {/* Two small images */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            alt="Small Image 1"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
            alt="Small Image 2"
          />
        </div>
      </div>

      {/* Second big image */}
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
          alt="Big Image 2"
        />
      </div>

      {/* Two small images */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
            alt="Small Image 3"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
            alt="Small Image 4"
          />
        </div>
      </div>
    </div>
  );
};

export default Projectgallery;
