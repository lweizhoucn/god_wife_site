import { request } from '@umijs/max';

export async function list(
  params: {
    current?: number;
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<ResultInfo<SkuInfo>>('/sku/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

export async function selectList(keyword?:string) {
  return request<ResultInfo<SkuInfo>>('/sku/list/select', {
    method: 'GET',
    params: { keyword },
  });
}

export async function add(options?: Record<string, any>) {
  return request('/sku/add', {
    method: 'POST',
    data: options,
  });
}
export async function update(options?: Record<string, any>) {
  return request('/sku/update', {
    method: 'POST',
    data: options,
  });
}

export async function del(options?: Record<string, any>) {
  return request('/sku/delete', {
    method: 'GET',
    params: options,
  });
}