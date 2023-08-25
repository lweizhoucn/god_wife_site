import { request } from '@umijs/max';

export async function list(
  params: {
    current?: number;
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<ResultInfo<ClinetInfo>>('/client/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

export async function selectList(keyword?:string) {
  return request<ResultInfo<ClinetInfo>>('/client/list/select', {
    method: 'GET',
    params:  {keyword} ,
    
  });
}

export async function add(options?: Record<string, any>) {
  return request('/client/add', {
    method: 'POST',
    data: options,
  });
}
export async function update(options?: Record<string, any>) {
  return request('/client/update', {
    method: 'POST',
    data: options,
  });
}
