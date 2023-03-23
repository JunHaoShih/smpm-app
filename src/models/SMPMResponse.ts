/**
 * 呼叫SMPM-API回傳的格式
 */
export interface SMPMResponse<T> {
  /**
   * response code
   */
  code: number,
  /**
   * response message
   */
  message: string,
  /**
   * return object
   */
  content: T,
}
