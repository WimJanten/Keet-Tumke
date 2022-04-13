#include "Request.h"

Request::Request(String key)
{
    _key = key;
}

int Request::sendRequest(byte[] input)
{
    HTTPClient http;
    String url = "https://145.220.75.123/pils";
    url += _id;
    http.begin(url);
    http.addHeader("Content-Type", "application/json");
    // http.addHeader("x-authorization", _key);
    _response = http.POST("{\"occupied\":true}");
    Serial.print("send ");
    Serial.print(input);
    Serial.print(" with response code: ");
    Serial.print(_response);
    Serial.print(" with id: ");
    Serial.println(_id);
    http.end();
    return _response;
}
