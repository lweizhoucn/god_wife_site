// 示例方法，没有实际意义
export function trim(str: string) {
  return str.trim();
}

export function clientFormat(cl?: ClinetInfo) {
  const building = cl?.building;
  const roomNumber = cl?.roomNumber;
  const phoneNumber = cl?.phoneNumber;
  let br = '|-|';
  if (building && roomNumber) {
    br = building + '-' + roomNumber;
  }

  return phoneNumber?.concat(':').concat(br);
}
