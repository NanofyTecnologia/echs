import { createMutation } from 'react-query-kit'

import { email } from '@/services/email'

export function useSendEmail() {
  const mutation = createMutation({
    mutationKey: ['send-email'],
    mutationFn: email.send,
  })

  return mutation()
}
