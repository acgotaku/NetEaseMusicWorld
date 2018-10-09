let toggle

// hook request headers
chrome.webRequest.onBeforeSendHeaders.addListener(function (details) {
  const header = {
    name: 'X-Real-IP',
    value: '211.161.244.70'
  }
  if (toggle) details.requestHeaders.push(header)
  return { requestHeaders: details.requestHeaders }
}, { urls: ['*://music.163.com/*'] }, ['blocking', 'requestHeaders'])

// redirect cdn access
chrome.webRequest.onBeforeRequest.addListener(function (details) {
  const redirectUrl = details.url.replace(
    /(m\d+?)(?!c)\.music\.126\.net/, '$1c.music.126.net'
  )
  if (toggle) return { redirectUrl: redirectUrl }
}, { urls: ['*://*.music.126.net/*'] }, ['blocking'])

// toggle button
chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.storage.local.get('toggle', function (data) {
    chrome.storage.local.set({ toggle: !data.toggle })
    toggle = !data.toggle
    chrome.browserAction.setBadgeText({ text: ((toggle) ? 'ON' : 'OFF') })
  })
})

// initialize
chrome.storage.local.get('toggle', function (data) {
  toggle = (typeof(data.toggle) === "undefined") ? true : data.toggle
  chrome.storage.local.set({ toggle: toggle })
  chrome.browserAction.setBadgeText({ text: ((toggle) ? 'ON' : 'OFF') })
})
