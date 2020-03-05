import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken'

const COOKIE_NAME_ACCESS = '__Secure-Authorization__access_token'
const COOKIE_NAME_ID = '__Secure-Authorization__id_token'

const decodeToken = () => {
    return jwt.decode(getIdToken(), { complete: true })
}

const getUserInitials = email => {
    var result = '?'
    const name = email.match(/^([\w]+).([\w]+)@.+$/)
    if (name && name.length === 3) {
        result = `${name[1][0].toUpperCase()}${name[2][0].toUpperCase()}`
    }
    return result
}

export const getAccessToken = () => {
    return Cookies.get(COOKIE_NAME_ACCESS)
    //return 'eyJraWQiOiJ4V0dpbmVpK1FscWd5NUoxbWcxTkZ4SGhsS3JuWHF5NmVNcUlQbXlxanA4PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIwOWQxYjIyNi0zNmRhLTQyYjMtOGZmMS0xYjAyYTMzMDhkOGEiLCJjb2duaXRvOmdyb3VwcyI6WyJhcC1zb3V0aGVhc3QtMl9oanl1QjJ0eWZfT3JpZ2luQXp1cmVBRCJdLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6Im9wZW5pZCIsImF1dGhfdGltZSI6MTU2NTUyNTQ2NywiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoZWFzdC0yLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoZWFzdC0yX2hqeXVCMnR5ZiIsImV4cCI6MTU2NTUyOTA2NywiaWF0IjoxNTY1NTI1NDY3LCJ2ZXJzaW9uIjoyLCJqdGkiOiJlYmI4ZTQwOS1lZDQ5LTQ4ZGYtODI2Zi04MWQxZDdhYThhYTgiLCJjbGllbnRfaWQiOiI2MDNjZXYyMDA2dm1uZXVucmN0NjJndGluaCIsInVzZXJuYW1lIjoiT3JpZ2luQXp1cmVBRF9KYXNvbi5EcnVtbW9uZDJAb3JpZ2luLmNvbS5hdSJ9.mksvKgH64KyWhsj77S4dHXlrIKFGMbcNVNDzKa8w7eOYVj0ndSvLzYquhA47sBtpo6Z6EtQJgfjAmH3FrrlrjYNDk3FJEr3SegMwjuw-x_kUz8IK6NPpDYnHunKDRfBlF6lAq9wXdVvr4GTpAT-JDBtXTYIIuhMjfvkdNAj9y9VbUWwdZIRYF8gh75wpWnAT7khkIpdHlkM1Zmr53Ah47HXWtPWSD5bNPNylO1yqYuImr7GAuJ-Dxcs1885EuNEhwzhULJFcqbP1m7gwgWhGCUiBSMmPd1Bq1_XyUen0ZPhiREO3mH3c3F2vTP5N0BeAjwRwO1dpbbg_LF9kCUrlqg'
}

export const getIdToken = () => {
    return Cookies.get(COOKIE_NAME_ID)
    //return 'eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.LPlZ57Ohi_fEJVoNFWmFVsnLiI3PlNPgxML01bM-zBSJDQPFGsKvq8jngTGrk8t6GJc0VhQKba61lFE0hhcGCF-wOcIfWHpUq7uX1CnJRj0RMtEWriIQrJgQGvOKw-Fq6RjA_ZrWzV-G6rBhzr09BiP5NHT3d9DWU3u2GXgPXflw1jkzD0bzzAp7cBWosxlMY9kiCiGF9wR__Z-RdWFMXa7BwbUL-JUZyoxABGd4rUynAz7Ca9AZ1RLALejHlmIXt7-Q5To44r4glrHyYxh8WUtaDOj1gNBzRwNm4GMLB8QRKmGBYhupJGt1aaFqP38zlOJCazNySUEC2k-SyNLToA.WdG-8qhdhNtwibYM.SHvQ0KtRAyW5Rg8gGlCMPZr5EcfW-hV9toXsg4ZDdZWAXc8F5bZWJ9Xbw98o2k3-BWTNVrlvzOvp45IiGzNK2wnvxr1SWW-ACLH1Ni9kwxY1l3oZRlXZzBN3W7UMj7G1MNKnTZ_exGJ8vHEFyq9_h81OAQ-DH6_Ez9GcnoCDMLdHN4GpaS6BIkpEwStxK7iPd0nkgyMIHRrg1czYVuhzsJ_1cnIktXKVNZiD2P-8I_YtpP_8XMrLYm5FVAb12U-wvc2s3Uxao3nwQoCM9G6vb0nAeLNvD2aFJeKzHQZBYKL0aOhhGVpSaFsqDTYjBrnsYDupHXrjhBccJ-uEuIP8ad0QTTYN6SiHOGn3Nj0OnhwPrnv5iMzl21zmyL9ghkdB5ukzvlEP9Ng4TIAzkKXmduhYCZcUPXCz2NcqgkHSMAd8G3w6YCnbE2SBA7F5DaZTk2HqPel6YIoAjiEkCv0TbdLGlCfomYyQLqDD7QsEIAZkI8ZKp83fl2q36wgSeB_H0F2HmnR3LVAAtV_hKH6f6BbVGiBo1u4tutGG1CWpAMFTVmSSsmxKJWNmwJQ0AH_ME64WMLE7brmNlw-OBzZ-F8seeQdMUWs-8ep6bOliPVAw3WLuLFXShl5fCd2dM6VhLFRwjFt3Hvm-EyMwivXoqbMOWCS2dSJzT4CokbST82RvxD_AzRzhwhVVj7DDv3knvmODCPhP4npxBvcMVqS4beU8YxdpIKxK5YLEcEXBwRXAfGzCKO6ausoy5HSUz_CLSVErUDngJquaRYo4Cbbl77yO6KbXlTis0ueLnxdjMQrMGOMyQ6E866kZrVVRP3Y_04xhIUr973yU_cfrKEsPviQ5SrD0AdO4o3-AIBXRY8A_cRwcE_pm65k5vad6KdRAUJqGKb16-IynvyHkbjbX0OgB2iQGoXys0V16wwqcSIbbOYsw-qBNxYnpLf-jQv657Ooc-MtnGbLu_AH13JRutF2QhXQ0t80ZZKPkv84jXIyFM6XVgEcsUnrKlbGCnRUl3Y6sJUAFXrv17mF1Pl6ghR3_nSQxezBOnd9M6Mg41lZhBiC-EIbClYEEUo5gEDKVdSzYQ3TIt7Ur9UfnsxA72_ZdnA3x6E7nES3Hs0H2C1GXs74yscoCnCIjYhhkqzchAn-iIJvysHzzNRvBv-nvjO5E2flrc7YuzoPltLBlB34v8JW2SAaDurJCjOycam5UnBBUBSIA5CBJIpzzQbnA6kpZX7C3CowuEZhH7FDgYgsXog.OXsQhH3hSol5mKEZEuUAxQ'
}

export const getLoggedInUser = () => {
    const credentials = decodeToken().payload
    return {
        userId: credentials.identities[0].userId,
        email: credentials.email,
        initials: getUserInitials(credentials.email),
    }
}
