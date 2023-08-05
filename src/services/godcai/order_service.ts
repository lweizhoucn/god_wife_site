import { request } from '@umijs/max';

export async function list(
  params: {
    current?: number;
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<ResultInfo<OrderInfo>>('/order/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

export async function add(options?: Record<string, any>) {
  return request('/order/add', {
    method: 'POST',
    data: options,
  });
}
export async function update(options?: Record<string, any>) {
  return request('/order/update', {
    method: 'POST',
    data: options,
  });
}
