import { NextRequest, NextResponse } from 'next/server';
import { ContactFormData, ApiResponse } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // 유효성 검사
    if (!body.name || !body.email || !body.phone || !body.subject || !body.message) {
      return NextResponse.json<ApiResponse>(
        { success: false, error: '필수 필드를 모두 입력해주세요.' },
        { status: 400 }
      );
    }

    // Supabase에 저장
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

    if (supabaseUrl && supabaseKey) {
      try {
        const supabaseResponse = await fetch(`${supabaseUrl}/rest/v1/contacts`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${supabaseKey}`,
            'apikey': supabaseKey,
            'Content-Type': 'application/json',
            'Prefer': 'return=minimal',
          },
          body: JSON.stringify({
            name: body.name,
            email: body.email,
            phone: body.phone,
            company: body.company || null,
            subject: body.subject,
            message: body.message,
            type: body.type,
            created_at: new Date().toISOString(),
          }),
        });

        if (!supabaseResponse.ok) {
          const errorText = await supabaseResponse.text();
          console.error('Supabase error:', {
            status: supabaseResponse.status,
            statusText: supabaseResponse.statusText,
            body: errorText,
            url: `${supabaseUrl}/rest/v1/contacts`,
          });
        } else {
          console.log('✓ Contact saved to Supabase');
        }
      } catch (err) {
        console.error('Supabase fetch error:', err);
      }
    } else {
      console.warn('Supabase configuration missing:', {
        hasUrl: !!supabaseUrl,
        hasKey: !!supabaseKey,
      });
    }

    // Slack으로 알림 (선택사항)
    const slackToken = process.env.SLACK_BOT_TOKEN;
    const slackChannelId = process.env.SLACK_CHANNEL_ID;

    if (slackToken && slackChannelId) {
      const slackMessage = {
        channel: slackChannelId,
        text: `새 문의가 접수되었습니다`,
        blocks: [
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: `*새 ${body.type} 접수*\n\n*이름:* ${body.name}\n*이메일:* ${body.email}\n*전화:* ${body.phone}\n*회사:* ${body.company || '-'}\n*제목:* ${body.subject}\n*메시지:* ${body.message}`,
            },
          },
        ],
      };

      await fetch('https://slack.com/api/chat.postMessage', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${slackToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(slackMessage),
      }).catch(err => {
        console.error('Slack notification error:', err);
      });
    }

    // 이메일 발송 (Resend)
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'noreply@thekllink.com',
          to: body.email,
          subject: '문의가 접수되었습니다',
          html: `<h2>안녕하세요, ${body.name}님</h2><p>귀하의 문의가 정상적으로 접수되었습니다.</p><p>빠른 시일 내에 답변드리겠습니다.</p>`,
        }),
      }).catch(err => {
        console.error('Resend email error:', err);
      });
    }

    return NextResponse.json<ApiResponse>(
      {
        success: true,
        message: '문의가 정상적으로 접수되었습니다.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json<ApiResponse>(
      { success: false, error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
