import dateFormat from './libs/dateformat';
import crypto from './libs/hmac-sha256';

export class SignifaiServices {

  constructor(url, user_id, secret) {
    this.url = url;
    this.user_id = user_id;
    this.secret = secret;
  }

  /**
   * Get Authorization Headers for SignifAI API
   * @param {String} user_id 
   * @param {String} secret 
   * @param {String} method 
   * @returns {Object} headers
   */
  getHeaders(user_id, secret, method) {
    const now = dateFormat(new Date(), "GMT:ddd, dd mmm yyyy HH:MM:ss") + " GMT";
    const signatureString = [ method, user_id, '', 'application/json', now ].join(':');
    const hash = crypto.HmacSHA256(signatureString, secret.replace('\\"', '"'));
    const headers = {
      'Content-Type': 'application/json',
      'X-Signifai-Date': now,
      'Authorization': 'signifai '.concat(user_id).concat(':').concat(hash)
    };
    return headers;
  }

  /**
   * Test API Connection
   * @param {Function} callback Callback function
   * @returns {Object} Response { status, message }
   */
  test(callback) {
    this.request({
      method: 'POST',
      url: this.url + '/metrics',
      data: { namePrefix: '' }
    }, response => {

      if (404 === response.code) {
        callback({ status: "error", message: "Invalid URL" });
        return;
      }

      if (401 === response.code) {
        callback({ status: "error", message: response.message });
        return;
      }

      callback({ status: "success", message: "Successfully connected to SignifAI" });
    });
  }

  /**
   * Make SignifAI API Request
   * @param {Object} params Request parameters (method, url, data)
   * @param {Function} callback Callback function
   */
  request(params, callback) {
    const method = params.method || 'GET';
    const url = params.url || '';
    const data = params.data || {};

    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    const headers = this.getHeaders(this.user_id, this.secret, method);
    xhr.setRequestHeader('Content-Type', headers['Content-Type']);
    xhr.setRequestHeader('X-Signifai-Date', headers['X-Signifai-Date']);
    xhr.setRequestHeader('Authorization', headers['Authorization']);

    xhr.onload = () => { callback(JSON.parse(xhr.response)) };
    xhr.send(JSON.stringify(data));
  }

  /**
   * Suggest Metric Names
   * @param {String} name Metric name for suggestion
   * @returns {Array<String>} Array of suggested metrics
   */
  getMetricsSuggestions(name) {
    this.request({
        method: 'POST',
        url: this.url + '/suggest/metrics',
        data: {
          namePrefix: name,
          size: 10,
          from: '-20d'
        }
      }, response => { return response; });
  }

  /**
   * Suggest Attribute Names
   * @param {String} name Attribute name for suggestion
   * @returns {Array<String>} Array of suggested attributes
   */
  getAttributesSuggestion(name) {
    this.request({
      method: 'POST',
      url: this.url + '/suggest/attributes',
      data: {
        namePrefix: name,
        size: 10,
        from: '-20d'
      }
    }, response => { return response });
  }
}