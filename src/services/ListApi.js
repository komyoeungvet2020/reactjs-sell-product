export function getApi() {
    return fetch(' http://localhost:3030/list_api')
      .then(data => data.json())
}

export function getApiDetail() {
  return fetch(' http://localhost:3030/api_detail')
    .then(data => data.json())
}