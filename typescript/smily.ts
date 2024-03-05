/**
 *
 * @param texts list of string [":)", ":(", ":>"]
 * @returns amount of smily face detected
 */

export function countSmilyFace(texts: string[]): number {
  const regex = /[:;][-~]?[)D]/g;
  const matching = texts.filter((smile) => smile.match(regex));
  return matching.length;
}
