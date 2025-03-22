import type { schema } from '@stacksjs/validation'
import type { GiftCardRequestType } from '../types/requests'
import { Request } from '@stacksjs/router'
import { customValidate, validateField } from '@stacksjs/validation'

interface ValidationField {
  rule: ReturnType<typeof schema.string>
  message: Record<string, string>
}

interface CustomAttributes {
  [key: string]: ValidationField
}
interface RequestDataGiftCard {
  id: number
  code: string
  initial_balance: number
  current_balance: number
  currency: string
  status: string
  purchaser_id: string
  recipient_email: string
  recipient_name: string
  personal_message: string
  is_digital: boolean
  is_reloadable: boolean
  is_active: boolean
  expiry_date: date
  last_used_date: date
  template_id: string
  created_at?: Date
  updated_at?: Date
}
export class GiftCardRequest extends Request<RequestDataGiftCard> implements GiftCardRequestType {
  public id = 1
  public code = ''
  public initial_balance = 0
  public current_balance = 0
  public currency = ''
  public status = ''
  public purchaser_id = ''
  public recipient_email = ''
  public recipient_name = ''
  public personal_message = ''
  public is_digital = false
  public is_reloadable = false
  public is_active = false
  public expiry_date = ''
  public last_used_date = ''
  public template_id = ''
  public created_at = new Date()
  public updated_at = new Date()
  public uuid = ''
  public async validate(attributes?: CustomAttributes): Promise<void> {
    if (attributes === undefined || attributes === null) {
      await validateField('GiftCard', this.all())
    }
    else {
      await customValidate(attributes, this.all())
    }
  }
}

export const giftCardRequest = new GiftCardRequest()
