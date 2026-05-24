const categoryColor = { 기술: 'cat--tech', 역사: 'cat--history', 문화: 'cat--culture', 경관: 'cat--landscape' };

function StarRating({ rating }) {
  if (rating === null) return <span className="rating rating--pending">탐방 후 평점 입력 예정</span>;
  return (
    <span className="rating rating--filled">
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={n <= rating ? 'star star--on' : 'star star--off'}>★</span>
      ))}
      <span className="rating__num">{rating}.0</span>
    </span>
  );
}

export default function PlaceCard({ place }) {
  return (
    <div className="place-card">
      <div className="place-card__photo">
        {place.photo
          ? <img src={place.photo} alt={place.name} />
          : <div className="place-card__photo-placeholder">
              <span>{place.city === 'shenzhen' ? '⚡' : '🏯'}</span>
              <span>사진 준비 중</span>
            </div>
        }
        <span className={`place-card__city tag--${place.city}`}>{place.cityLabel}</span>
        <span className={`place-card__cat ${categoryColor[place.category]}`}>{place.category}</span>
      </div>
      <div className="place-card__body">
        <h3>{place.name}</h3>
        <StarRating rating={place.rating} />
        <p className="place-card__desc">{place.desc}</p>
        <div className="place-card__ux">
          <span className="place-card__ux-label">UX 관전 포인트</span>
          <p>{place.uxPoint}</p>
        </div>
      </div>
    </div>
  );
}
