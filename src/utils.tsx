export function pagnateText(s: string, l: number): string {
  let n: string = s;
  if(s.length > l) n = `${s.substring(0, l)}...`; 
  return n;
}

export default pagnateText;
