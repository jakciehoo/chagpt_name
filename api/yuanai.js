import request from './../util/request';
/**
 * 	chatGPT流接口
 */
export function chat_bot_stream(data) {
    return request({
        url: '/yuan/ai/stream/chatBot',
        method: 'POST',
        data
    })
}