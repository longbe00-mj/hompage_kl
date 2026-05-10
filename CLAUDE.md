# 빌드 및 배포 가이드

## 최근 배포 (2026-05-10)

### 변경 사항
- Header.tsx에서 `border-b border-gray-200` 제거 (그라데이션 바 위의 흰색 줄 제거)
- HeroSection.tsx hero 설명 텍스트의 따옴표 제거

### 빌드 프로세스
```bash
npm run build
```
- Next.js 15.5.15로 성공적으로 컴파일
- 14개 페이지 정적 생성 완료

### 배포 프로세스
1. 로컬 빌드 완료 후 `.next` 폴더 압축 (cache 폴더 제외)
   ```bash
   tar --exclude='.next/cache' -czf next-build.tar.gz .next/
   ```
2. SCP를 통해 EC2 서버에 업로드
   ```bash
   scp -i "C:\Users\MJ\Downloads\mj.pem" next-build.tar.gz ec2-user@52.79.137.220:/tmp/
   ```
3. 서버에서 압축 해제 및 PM2 재시작
   ```bash
   ssh -i "C:\Users\MJ\Downloads\mj.pem" ec2-user@52.79.137.220 "cd /home/ec2-user/homepage && sudo tar -xzf /tmp/next-build.tar.gz && sudo pm2 restart thekllink-homepage"
   ```

### 배포 환경
- 서버: EC2 instance at 52.79.137.220
- 포트: 80 (PORT 환경변수)
- 프로세스 관리: PM2
- 접속 방식: SSH (ec2-user 계정)
- SSH 키 파일: `C:\Users\MJ\Downloads\mj.pem`
- 프로젝트 디렉토리: `/home/ec2-user/homepage`

### 주의사항
- SCP 배포 시 `.next/cache` 폴더는 제외 (권한 문제로 인해 tar 압축으로 진행)
- 캐시 폴더는 서버에서 자동으로 재생성됨
- PM2 프로세스는 root 권한으로 실행 필수
