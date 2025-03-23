import type { ProductUnitRequestType } from '@stacksjs/orm'
import { Action } from '@stacksjs/actions'

import { response } from '@stacksjs/router'

export default new Action({
  name: 'ProductUnit Show',
  description: 'ProductUnit Show ORM Action',
  method: 'GET',
  async handle(request: ProductUnitRequestType) {
    const id = request.getParam('id')

    const model = await ProductUnit.findOrFail(Number(id))

    return response.json(model)
  },
})
