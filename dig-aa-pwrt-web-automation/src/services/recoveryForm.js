import { client } from '.'
import { getLoggedInUser } from './token'

export const createRecoveryStateChangeEvent = request =>
    client.post(`recovery-state-change-event`, request, {})
