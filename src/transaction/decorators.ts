import { createParamDecorator } from '@nestjs/common';

export const CurrentHostName = createParamDecorator((data, req) => {
  return req.getArgByIndex(2).req.header('host');
});

export const RequestProtocol = createParamDecorator((data, req) => {
  return req.getArgByIndex(2).req.protocol;
});
