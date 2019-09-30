import http from '../utils/http'
import apis from './api'

export function getRanking (params = {}) {
       return http.get(apis.getRanking, params) 
}