import Taro from '../../index'

declare module '../../index' {
  namespace checkIsSupportFacialRecognition {
    interface Option {
      /** 交互方式 */
      checkAliveType?: number
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: CallbackResult) => void
      /** 接口调用失败的回调函数 */
      fail?: (res: CallbackResult) => void
      /** 接口调用成功的回调函数 */
      success?: (result: CallbackResult) => void
    }
    interface CallbackResult extends TaroGeneral.CallbackResult {
      /** 错误信息 */
      errMsg: string
      /** 错误码 */
      errCode: number
    }
  }

  namespace startFacialRecognitionVerify {
    interface Option {
      /** 身份证名称 */
      name: string
      /** 身份证名称 */
      idCardNumber: string
      /** 交互方式 */
      checkAliveType?: number
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: CallbackResult) => void
      /** 接口调用失败的回调函数 */
      fail?: (res: CallbackResult) => void
      /** 接口调用成功的回调函数 */
      success?: (result: CallbackResult) => void
    }
    interface CallbackResult extends TaroGeneral.CallbackResult {
      /** 错误信息 */
      errMsg: string
      /** 错误码 */
      errCode: number
      /** 认证结果 */
      verifyResult: string
    }
  }

  namespace startFacialRecognitionVerifyAndUploadVideo {
    interface Option {
      /** 身份证名称 */
      name: string
      /** 身份证名称 */
      idCardNumber: string
      /** 交互方式 */
      checkAliveType?: number
      /** 接口调用结束的回调函数（调用成功、失败都会执行） */
      complete?: (res: CallbackResult) => void
      /** 接口调用失败的回调函数 */
      fail?: (res: CallbackResult) => void
      /** 接口调用成功的回调函数 */
      success?: (result: CallbackResult) => void
    }
    interface CallbackResult extends TaroGeneral.CallbackResult {
      /** 错误信息 */
      errMsg: string
      /** 错误码 */
      errCode: number
      /** 认证结果 */
      verifyResult: string
    }
  }

  interface TaroStatic {
    /** 检查是否支持面部识别
     * @supported weapp
     */
    checkIsSupportFacialRecognition(
      option?: checkIsSupportFacialRecognition.Option
    ): Promise<checkIsSupportFacialRecognition.CallbackResult>

    /** 开始人脸识别认证
     * @supported weapp
     */
    startFacialRecognitionVerify(
      option?: startFacialRecognitionVerify.Option
    ): Promise<startFacialRecognitionVerify.CallbackResult>

    /** 开始人脸识别认证并上传认证视频
     * @supported weapp
     */
    startFacialRecognitionVerifyAndUploadVideo(
      option?: startFacialRecognitionVerifyAndUploadVideo.Option
    ): Promise<startFacialRecognitionVerifyAndUploadVideo.CallbackResult>
  }
}
