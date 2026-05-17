'use client';

import { organizationData } from '@/config/organization';
import MemberCard from './MemberCard';
import styles from './Organization.module.css';

export default function Organization() {
  const { cLevel, teamLeaders } = organizationData;

  return (
    <section id="organization" className={styles.section}>
      <div className={styles.container}>
        {/* 헤더: 로고 + 타이틀 */}
        <header className={styles.header}>
          <span className={styles.sectionTitle}>C-Level Core Member</span>
          <div className={styles.brand}>
            <h2 className={styles.title}>{organizationData.title}</h2>
          </div>
        </header>

        {/* C-Level 2명 */}
        <div
          className={styles.cLevel}
          role="group"
          aria-label="C-Level"
        >
          {cLevel.map((member) => (
            <MemberCard
              key={member.id}
              position_kr={member.position_kr}
              position_en={member.position_en}
              description={member.description}
              photo={member.photo}
              size="large"
            />
          ))}
        </div>

        {/* 연결선 */}
        <div
          className={styles.connector}
          aria-hidden="true"
        />

        {/* 팀장 6명 */}
        <div
          className={styles.teamLeaders}
          role="group"
          aria-label="Team Leaders"
        >
          {teamLeaders.map((member) => (
            <MemberCard
              key={member.id}
              position_kr={member.position_kr}
              position_en={member.position_en}
              description={member.description}
              photo={member.photo}
              size="medium"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
