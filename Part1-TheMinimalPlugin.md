## setup nest project
```bash
nest new minimal-plugin
```
### run to see, if it works
```bash
npm run start:debug
```
... and open http://localhost:3000/ in your browser oe in another Terminal
```bash
curl http://localhost:3000/
```
... you will see the hello world message

now modify `src/app.controller.ts` to
```typescript
hmm
```

to run the plufin we need CORS enabled, to do so modify `src/main.ts` to
```typescript
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
``` 

Now head over to ChatGPT -> New Chat -> Plugins -> Plugin Store -> Develop your own plugin -> http://localhost:3000/ -> Find Manifest File -> Install local host plugin

Chat:
> 