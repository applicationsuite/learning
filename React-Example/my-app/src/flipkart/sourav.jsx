

export function DataBindings() {
  var mobile = {
    title: "realme C53 (Champion Black, 64 GB)",
    price: 10999,
    image: "realmeBlack.jpg",
    rating: { rate: 4.5, count: 12644, reviews: 575 },
    features: [
      "6 GB RAM | 64 GB ROM | Expandable Upto 2 TB",
      "17.12 cm (6.74 inch) HD Display",
      "108MP + 2MP | 8MP Front Camera",
      "5000 mAh Battery",
      "T612 Processor",
      "1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories",
    ],
  };
  return (
    <div className="container-fluid">
      <div className="mt-3 row">
        <div className="col-3">
          <img src={mobile.image} />
        </div>
        <div className="col-6">
          <h3 className="text-primary">{mobile.title}</h3>
          <div>
            <span className="bg-success p-2 rounded rounded-2 text-white">
              {mobile.rating.rate} <span className="bi bi-star-fill"></span>
            </span>
            <span className="ms-2 fw-bold">
              {mobile.rating.count} Ratings & {mobile.rating.reviews} Reviews
            </span>
          </div>
          <div className="hello">
            <ul className="mt-3">
              {mobile.features.map((feature) => (
                <li>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-2">
          <h2>&#8377; {mobile.price}</h2>
        </div>
      </div>
    </div>
  );
}
