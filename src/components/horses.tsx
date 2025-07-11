import { HORSE_DATA } from "./horseData";

export function Horses() {
  return (
    <ul>
      {HORSE_DATA.map((horse, index) => (
        <li key={index}>{horse.breed}</li>
      ))}
    </ul>
  )
}

/*
export function Horses() {
  return HORSE_DATA.map((horse, index) => (
    <section key={index}>
      <h2 className="text-purple-400">{horse.breed}</h2>
      <div className="grid grid-cols-4 items-center justify-center">
        {horse.images.map((horseImage, index) => (
          <img
            key={index}
            src={horseImage.url}
            alt={horseImage.alt}
            width={180}
            height={38}
            className="mx-auto"
          />
        ))}
      </div>
    </section>
  ))
}

export default Horses;*/