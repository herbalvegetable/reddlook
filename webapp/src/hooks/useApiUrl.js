export const getApiUrl = (deployment, window) => {
    const apiTable = {
        'local': `${window.location.hostname}:5000`,
        'vercel': 'reddlook-server.vercel.app',
    }
    return apiTable[deployment];
}