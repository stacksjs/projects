import type { schema } from '@stacksjs/validation'
import type { UserRequestType } from '../types/requests'
import { Request } from '@stacksjs/router'
import { customValidate, validateField } from '@stacksjs/validation'

interface ValidationField {
  rule: ReturnType<typeof schema.string>
  message: Record<string, string>
}

interface CustomAttributes {
  [key: string]: ValidationField
}
interface RequestDataUser {
  id: number
  name: string
  email: string
  job_title: string
  password: string
  created_at?: Date
  updated_at?: Date
}
export class UserRequest extends Request<RequestDataUser> implements UserRequestType {
  public id = 1
  public name = ''
  public email = ''
  public job_title = ''
  public password = ''
  public created_at = new Date()
  public updated_at = new Date()
  public uuid = ''
  public async validate(attributes?: CustomAttributes): Promise<void> {
    if (attributes === undefined || attributes === null) {
      await validateField('User', this.all())
    }
    else {
      await customValidate(attributes, this.all())
    }
  }
}

export const userRequest = new UserRequest()
