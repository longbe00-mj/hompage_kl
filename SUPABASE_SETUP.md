# Supabase 설정 가이드

## 1. Contacts 테이블 생성

Supabase 대시보드에서 SQL 에디터를 열고 다음 SQL을 실행하세요:

```sql
-- contacts 테이블 생성
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  type TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 인덱스 생성 (검색 성능 최적화)
CREATE INDEX idx_contacts_created_at ON contacts(created_at DESC);
CREATE INDEX idx_contacts_email ON contacts(email);
CREATE INDEX idx_contacts_type ON contacts(type);

-- RLS (Row Level Security) 활성화
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- 서비스 역할에만 INSERT 허용
CREATE POLICY "Allow insert from service role" ON contacts
  FOR INSERT
  WITH CHECK (true)
  USING (true);

-- 모든 사용자에게 SELECT 금지 (API 키를 통해서만 접근)
CREATE POLICY "Deny all select" ON contacts
  FOR SELECT
  USING (false);
```

## 2. 테스트

다음 curl 명령으로 테스트하세요:

```bash
# 문의 저장 테스트
curl -X POST http://localhost:9000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "테스트",
    "email": "test@example.com",
    "phone": "01012345678",
    "company": "테스트회사",
    "subject": "테스트 문의",
    "message": "테스트 메시지",
    "type": "inquiry"
  }'

# 문의 목록 조회 테스트
curl http://localhost:9000/api/contact/list \
  -H "Authorization: Bearer admin123"
```

## 3. 확인

Supabase 대시보드 → Table Editor → contacts 테이블에서 데이터가 저장되는지 확인하세요.

## 4. 환경변수 확인

`.env.local` 파일에 다음이 설정되어 있는지 확인:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_KEY=your-service-key
```

## 문제 해결

### 테이블이 없다는 에러
→ 위의 SQL을 실행하여 테이블을 생성하세요.

### 401 인증 에러
→ SUPABASE_SERVICE_KEY가 올바른지 확인하세요.

### 403 권한 에러
→ RLS 정책이 올바르게 설정되었는지 확인하세요.

### 서버 로그 확인
서버를 실행 중이면 콘솔 로그에서 "Supabase save error" 또는 "Contact saved to Supabase"를 확인할 수 있습니다.
