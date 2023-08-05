// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: 'dontHaveAccess' };
}

export const layout = () => {
  return {
    logo: 'http://101.132.106.146:8080/uploadImages/zhoulw/2023/07/25/23/14/9ea44128-2836-452c-a37c-c9c48bd6af80.jpeg',
    menu: {
      locale: false,
    },
  };
};
