import React, { useRef, useEffect } from "react";

function ImageGallery({ images }) {
  const imageGalleryRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.getAttribute("data-src");
            img.setAttribute("src", src);
            observer.unobserve(img);
          }
        });
      },
      { rootMargin: "100px 0px" }
    );

    const imagesToObserve = imageGalleryRef.current.querySelectorAll("img[data-src]");
    imagesToObserve.forEach((img) => observer.observe(img));

    return () => {
      imagesToObserve.forEach((img) => observer.unobserve(img));
    };
  }, [images]);

  return (
    <div ref={imageGalleryRef} style={{ display: "grid", gridTemplateColumns: "repeat(3, 200px)", gap: "10px" }}>
      {images.map((imageUrl, index) => (
        <img
          key={index}
          data-src={imageUrl}
          alt={`Image ${index + 1}`}
          width="200"
          height="200"
          style={{ objectFit: "cover" }}
        />
      ))}
    </div>
  );
}

export default ImageGallery;

