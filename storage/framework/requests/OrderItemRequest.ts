import type { schema } from '@stacksjs/validation'
import type { OrderItemRequestType } from '../types/requests'
import { Request } from '@stacksjs/router'
import { customValidate, validateField } from '@stacksjs/validation'

interface ValidationField {
  rule: ReturnType<typeof schema.string>
  message: Record<string, string>
}

interface CustomAttributes {
  [key: string]: ValidationField
}
interface RequestDataOrderItem {
  id: number
  quantity: number
  price: number
  special_instructions: string
  order_id: number
  created_at?: Date
  updated_at?: Date
}
export class OrderItemRequest extends Request<RequestDataOrderItem> implements OrderItemRequestType {
  public id = 1
  public quantity = 0
  public price = 0
  public special_instructions = ''
  public order_id = 0
  public created_at = new Date()
  public updated_at = new Date()

  public async validate(attributes?: CustomAttributes): Promise<void> {
    if (attributes === undefined || attributes === null) {
      await validateField('OrderItem', this.all())
    }
    else {
      await customValidate(attributes, this.all())
    }
  }
}

export const orderItemRequest = new OrderItemRequest()
