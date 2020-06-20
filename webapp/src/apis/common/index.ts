import { BASE_URL } from 'config'
import fetch from '../fetch'
import { IPlatformInfo } from './model'

export function getPlatformInfo(): Promise<IPlatformInfo> {
  return fetch(`${BASE_URL}/common/platform`)
}
