import styles from './Organization.module.css';

interface MemberCardProps {
  position_kr: string;
  position_en: string;
  description: string;
  photo: string;
  size: 'large' | 'medium';
}

export default function MemberCard({
  position_kr,
  position_en,
  description,
  photo,
  size,
}: MemberCardProps) {
  const photoClass =
    size === 'large'
      ? styles.photoLarge
      : styles.photoMedium;

  return (
    <article className={styles.card}>
      <div className={`${styles.photo} ${photoClass}`}>
        <img
          src={photo}
          alt={`${position_kr} ${position_en}`}
          loading="lazy"
        />
      </div>
      <h3 className={styles.positionKr}>{position_kr}</h3>
      <p className={styles.positionEn}>{position_en}</p>
      <p className={styles.description}>{description}</p>
    </article>
  );
}
