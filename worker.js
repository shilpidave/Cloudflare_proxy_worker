export default {
  async fetch(request) {
    let url = new URL(request.url);
    url.hostname = "sendgrid.net";
    return fetch(url.toString(), request);
  }
}
