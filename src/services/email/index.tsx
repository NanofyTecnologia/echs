import axios from 'axios'

import { SendEmailParams } from './types'

export const email = {
  async send(params: SendEmailParams) {
    const { data } = await axios.post('/api/email', params)

    return data
  },
}
