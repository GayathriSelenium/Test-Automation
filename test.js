/* eslint-env mocha */
describe('todos API', () => {
    it('returns JSON', () => {
      cy.request('https://api.build.ig.orgn.io/wellturndown/dev/tags')
      
        .its('headers')
        .its('content-type')
        .its('Authorization')
        .should('include', 'application/json','Bearer eyJraWQiOiJ4V0dpbmVpK1FscWd5NUoxbWcxTkZ4SGhsS3JuWHF5NmVNcUlQbXlxanA4PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIwYTJhNDQyZC01ZmZlLTRmOTQtODI0MS03NmUxNTZkODkwNTQiLCJjb2duaXRvOmdyb3VwcyI6WyJXZWxsLVR1cm5kb3duLUFkbWluIiwiV1IiLCJhcC1zb3V0aGVhc3QtMl9oanl1QjJ0eWZfT3JpZ2luQXp1cmVBRCIsIldSX3Rlc3RlciIsIlRlc3QxIl0sInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoib3BlbmlkIiwiYXV0aF90aW1lIjoxNTc1MzI5MzU1LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGhlYXN0LTIuYW1hem9uYXdzLmNvbVwvYXAtc291dGhlYXN0LTJfaGp5dUIydHlmIiwiZXhwIjoxNTc1MzMyOTU1LCJpYXQiOjE1NzUzMjkzNTUsInZlcnNpb24iOjIsImp0aSI6ImM3YzUzNmViLWExNWUtNGNhNC1hMDEyLTIzNjg3NTI1MDE5MyIsImNsaWVudF9pZCI6IjJoOHVuYjdyNTgwODZmOGtiY2Frb3NuOHBrIiwidXNlcm5hbWUiOiJPcmlnaW5BenVyZUFEX0dheWF0aHJpLlJhamFyYW1Ab3JpZ2luLmNvbS5hdSJ9.BbXJP9lYn9MM14OVfJ5u3-qOD_wk9OnR9vkeUCJWPjit3i1uXPJVuhRmjjeDtiIQ6ZqlHP56hOjAvPc4nqeXpiAhFx8ag-kO343jO2BKHlIb8xew7xVycdvUMVYw3eYu2UOEUTpldH-7YWCeruoKoGIljr2djwzuFkRXTdaG-by5MibUTzVFuB0tLikMGNbdlrLBGvIpCfSbQAzLerVPLqF6nHUDrpQPMvEq07qBRQBvfdzUU2feSDbETtHKCsXHAIO9HQaEYq5VCQUETxu9Lhoa-UL8-ubV1e-Tv3u7Z4Gjd-pk7rxMvkkIbCoy8xGk144X6y9p-MMkHU94En0olw')
        
    })
  })