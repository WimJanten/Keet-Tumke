#ifndef REQUEST_H
#define REQUEST_H

#include <WiFi.h>
#include <HTTPClient.h>

class Request
{

private:
    int _response;
    int _id;
    String _key;

public:
    Request(String key);
    int sendRequest(int input);
};

#endif
