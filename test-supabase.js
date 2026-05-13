const fetch = require('node-fetch');

async function test() {
  const res = await fetch('http://localhost:9000/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: '테스트',
      email: 'test@example.com',
      phone: '01012345678',
      company: '테스트회사',
      subject: '테스트 문의',
      message: '테스트 메시지',
      type: 'inquiry'
    })
  });
  
  const data = await res.json();
  console.log('Response:', JSON.stringify(data, null, 2));
}

test().catch(console.error);
