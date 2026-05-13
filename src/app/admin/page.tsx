'use client';

import { useState, useEffect } from 'react';
import { Contact } from '@/types';

interface ContactWithIndex extends Contact {
  index: number;
}

interface PaginationInfo {
  total: number;
  limit: number;
  offset: number;
  pages: number;
}

export default function AdminPage() {
  const [contacts, setContacts] = useState<ContactWithIndex[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [pagination, setPagination] = useState<PaginationInfo | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('created_at');
  const [order, setOrder] = useState<'asc' | 'desc'>('desc');

  const apiKey = process.env.NEXT_PUBLIC_ADMIN_API_KEY || 'admin123';

  const fetchContacts = async (page = 1) => {
    try {
      setLoading(true);
      const limit = 20;
      const offset = (page - 1) * limit;

      const response = await fetch(
        `/api/contact/list?limit=${limit}&offset=${offset}&sortBy=${sortBy}&order=${order}`,
        {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('데이터 조회 실패');
      }

      const data = await response.json();
      if (data.success && data.data) {
        const contactsWithIndex = data.data.contacts.map(
          (contact: Contact, index: number) => ({
            ...contact,
            index: offset + index + 1,
          })
        );
        setContacts(contactsWithIndex);
        setPagination(data.data.pagination);
        setCurrentPage(page);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : '오류가 발생했습니다');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === apiKey) {
      setAuthenticated(true);
      setPassword('');
      fetchContacts();
    } else {
      setError('잘못된 비밀번호입니다');
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    setPassword('');
    setContacts([]);
  };

  const handleSort = (field: string) => {
    if (sortBy === field) {
      setOrder(order === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setOrder('desc');
    }
    setCurrentPage(1);
  };

  useEffect(() => {
    if (authenticated) {
      const limit = 20;
      const offset = (currentPage - 1) * limit;

      const fetch_contacts = async () => {
        try {
          setLoading(true);
          const response = await fetch(
            `/api/contact/list?limit=${limit}&offset=${offset}&sortBy=${sortBy}&order=${order}`,
            {
              headers: {
                'Authorization': `Bearer ${apiKey}`,
              },
            }
          );

          if (!response.ok) {
            throw new Error('데이터 조회 실패');
          }

          const data = await response.json();
          if (data.success && data.data) {
            const contactsWithIndex = data.data.contacts.map(
              (contact: Contact, index: number) => ({
                ...contact,
                index: offset + index + 1,
              })
            );
            setContacts(contactsWithIndex);
            setPagination(data.data.pagination);
          }
        } catch (err) {
          setError(err instanceof Error ? err.message : '오류가 발생했습니다');
        } finally {
          setLoading(false);
        }
      };

      fetch_contacts();
    }
  }, [sortBy, order, currentPage, authenticated, apiKey]);

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin</h1>
          <p className="text-gray-600 mb-6">문의 관리 시스템</p>

          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                API 키
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="API 키를 입력하세요"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
            >
              로그인
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">문의 관리</h1>
            <p className="text-gray-600 mt-1">
              총 {pagination?.total || 0}건의 문의
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
          >
            로그아웃
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">로딩 중...</p>
            </div>
          </div>
        ) : (
          <>
            {/* 테이블 */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100 border-b">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                        번호
                      </th>
                      <th
                        className="px-6 py-3 text-left text-sm font-semibold text-gray-900 cursor-pointer hover:bg-gray-200"
                        onClick={() => handleSort('name')}
                      >
                        이름 {sortBy === 'name' && (order === 'asc' ? '↑' : '↓')}
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                        이메일
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                        전화
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                        회사
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                        제목
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                        유형
                      </th>
                      <th
                        className="px-6 py-3 text-left text-sm font-semibold text-gray-900 cursor-pointer hover:bg-gray-200"
                        onClick={() => handleSort('created_at')}
                      >
                        접수일시 {sortBy === 'created_at' && (order === 'asc' ? '↑' : '↓')}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {contacts.length > 0 ? (
                      contacts.map((contact) => (
                        <tr
                          key={contact.id}
                          className="hover:bg-gray-50 transition"
                        >
                          <td className="px-6 py-4 text-sm text-gray-600">
                            {contact.index}
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            {contact.name}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            <a
                              href={`mailto:${contact.email}`}
                              className="text-blue-600 hover:underline"
                            >
                              {contact.email}
                            </a>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            <a
                              href={`tel:${contact.phone}`}
                              className="text-blue-600 hover:underline"
                            >
                              {contact.phone}
                            </a>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            {contact.company || '-'}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">
                            <div className="max-w-xs truncate" title={contact.subject}>
                              {contact.subject}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm">
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                              {contact.type === 'inquiry' && '일반문의'}
                              {contact.type === 'partnership' && '파트너'}
                              {contact.type === 'business' && '사업제휴'}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            {new Date(contact.created_at).toLocaleString('ko-KR')}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan={8}
                          className="px-6 py-8 text-center text-gray-600"
                        >
                          문의 내역이 없습니다
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 페이지네이션 */}
            {pagination && pagination.pages > 1 && (
              <div className="mt-8 flex justify-center gap-2">
                <button
                  onClick={() => fetchContacts(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  이전
                </button>

                {Array.from({ length: pagination.pages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => fetchContacts(page)}
                      className={`px-4 py-2 rounded-lg ${
                        currentPage === page
                          ? 'bg-blue-600 text-white'
                          : 'border border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}

                <button
                  onClick={() =>
                    fetchContacts(Math.min(pagination.pages, currentPage + 1))
                  }
                  disabled={currentPage === pagination.pages}
                  className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  다음
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
