import { NextRequest, NextResponse } from 'next/server';
import { Contact, ApiResponse } from '@/types';

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    const adminKey = process.env.ADMIN_API_KEY;

    if (!adminKey || !authHeader || authHeader !== `Bearer ${adminKey}`) {
      return NextResponse.json<ApiResponse>(
        { success: false, error: '인증 실패' },
        { status: 401 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json<ApiResponse>(
        { success: false, error: 'Supabase 설정 오류' },
        { status: 500 }
      );
    }

    // 쿼리 파라미터 처리
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '50');
    const offset = parseInt(searchParams.get('offset') || '0');
    const sortBy = searchParams.get('sortBy') || 'created_at';
    const order = searchParams.get('order') || 'desc';

    const query = new URLSearchParams({
      limit: Math.min(limit, 1000).toString(),
      offset: offset.toString(),
      order: `${sortBy}.${order}`,
    });

    console.log('Fetching contacts from Supabase:', {
      url: `${supabaseUrl}/rest/v1/contacts?${query}`,
      hasKey: !!supabaseKey,
      hasUrl: !!supabaseUrl,
    });

    let response;
    try {
      response = await fetch(
        `${supabaseUrl}/rest/v1/contacts?${query}`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${supabaseKey}`,
            'apikey': supabaseKey,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        }
      );
    } catch (fetchErr) {
      console.error('Fetch error:', {
        error: fetchErr instanceof Error ? fetchErr.message : fetchErr,
        url: `${supabaseUrl}/rest/v1/contacts`,
      });
      throw new Error(`Supabase 연결 실패: ${fetchErr instanceof Error ? fetchErr.message : '알 수 없는 오류'}`);
    }

    if (!response.ok) {
      const error = await response.text();
      console.error('Supabase error:', {
        status: response.status,
        statusText: response.statusText,
        error,
        url: `${supabaseUrl}/rest/v1/contacts?${query}`,
      });
      throw new Error(`Supabase API error: ${response.status} - ${error}`);
    }

    let contacts: Contact[] = [];
    try {
      contacts = await response.json();
    } catch (parseErr) {
      console.error('JSON parse error:', parseErr);
      contacts = [];
    }

    // 전체 개수 조회
    const countResponse = await fetch(
      `${supabaseUrl}/rest/v1/contacts?select=count()`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${supabaseKey}`,
          'apikey': supabaseKey,
          'Content-Type': 'application/json',
          'Prefer': 'count=exact',
        },
      }
    );

    const totalCount = countResponse.ok
      ? parseInt(countResponse.headers.get('content-range')?.split('/')[1] || '0')
      : 0;

    return NextResponse.json<ApiResponse>(
      {
        success: true,
        data: {
          contacts,
          pagination: {
            total: totalCount,
            limit,
            offset,
            pages: Math.ceil(totalCount / limit),
          },
        },
      },
      { status: 200 }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : '알 수 없는 오류';
    console.error('API error:', {
      error: errorMessage,
      type: error instanceof Error ? error.constructor.name : typeof error,
      fullError: error,
    });
    return NextResponse.json<ApiResponse>(
      { success: false, error: `서버 오류: ${errorMessage}` },
      { status: 500 }
    );
  }
}
