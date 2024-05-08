/* eslint-disable @typescript-eslint/no-explicit-any */
import { IUploadFile } from '../../../interface/file'

export type IPayloadType = {
  file?: IUploadFile
  body: Record<string, any>
  params: { id: string }
}

export interface UpdatePaymentResponse {
  success?: boolean
  data?: any
  error?: string
}

export type IPaymentFilterRequest = {
  searchTerm?: string
  paymentStatus?: any
  paymentAmount?: number
  [key: string]: any
}
