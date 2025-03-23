import type { schema } from '@stacksjs/validation'
import type { LoyaltyPointRequestType } from '../types/requests'
import { Request } from '@stacksjs/router'
import { customValidate, validateField } from '@stacksjs/validation'

interface ValidationField {
  rule: ReturnType<typeof schema.string>
  message: Record<string, string>
}

interface CustomAttributes {
  [key: string]: ValidationField
}
interface RequestDataLoyaltyPoint {
  id: number
  wallet_id: string
  points: number
  source: string
  source_reference_id: string
  description: string
  expiry_date: string
  is_used: boolean
  created_at?: Date
  updated_at?: Date
}
export class LoyaltyPointRequest extends Request<RequestDataLoyaltyPoint> implements LoyaltyPointRequestType {
  public id = 1
  public wallet_id = ''
  public points = 0
  public source = ''
  public source_reference_id = ''
  public description = ''
  public expiry_date = ''
  public is_used = false
  public created_at = new Date()
  public updated_at = new Date()
  public uuid = ''
  public async validate(attributes?: CustomAttributes): Promise<void> {
    if (attributes === undefined || attributes === null) {
      await validateField('LoyaltyPoint', this.all())
    }
    else {
      await customValidate(attributes, this.all())
    }
  }
}

export const loyaltyPointRequest = new LoyaltyPointRequest()
