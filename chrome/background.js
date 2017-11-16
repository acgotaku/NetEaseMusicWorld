chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === 'loading') {
    chrome.webRequest.onBeforeSendHeaders.addListener(function (details) {
      const header = {
        name: 'X-Real-IP',
        value: '211.161.244.70'
      }
      details.requestHeaders.push(header)
      return {requestHeaders: details.requestHeaders}
    }, {urls: ['*://music.163.com/*']}, ['blocking', 'requestHeaders'])
  }
})
