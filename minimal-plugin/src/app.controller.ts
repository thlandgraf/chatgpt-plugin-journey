import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('.well-known/ai-plugin.json')
  getAIPluginJSON(): string {
    const aiplugin = {
      schema_version: 'v1',
      name_for_model: 'helloWorld',
      name_for_human: 'HelloPlugin',
      description_for_model:
        'This plugin greets the user with the "Hello World" message.',
      description_for_human: 'Greetings from the HelloPlugin!',
      auth: { type: 'none' },
      api: {
        type: 'openapi',
        url: 'http://localhost:3000/openapi.yaml',
        has_user_authentication: false,
      },
      logo_url:
        'https://www.shareicon.net/data/128x128/2015/05/31/47175_example_256x256.png',
      contact_email: 'foo@bar.com',
      legal_info_url: 'https://www.example.com',
    };
    return JSON.stringify(aiplugin);
  }

  @Get('openapi.yaml')
  getOpenAPIYAML(): string {
    return `
openapi: 3.0.2
info:
  title: Get a greeting
  description: If you ask for, I will greet you!
  version: 1.0.0
servers:
  - url: http://localhost:3000
paths:
  /hello: 
    get: 
      summary: ask for a greet
      description:  This Plugin geets you with a message.
      operationId: get_greetings
      responses:
        "200": 
          description: A successful response
          content:
            text/plain: 
              schema:
                type: string
      security:
        - HTTPBearer: []
    `;
  }

  @Get('hello')
  sayHelloWorld(): string {
    return 'Hello World!';
  }
}
