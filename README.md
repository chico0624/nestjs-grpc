# NestJS gRPC

For a Mac

## setup
```
npm run start

echo '{"id": 2}' | evans --proto src/proto/hero/hero.proto -p 5000 cli call hero.HeroesService.FindOne

# or

evans --proto src/proto/hero/hero.proto -p 5000
call FindOne
```

### evans install
https://github.com/ktr0731/evans#macos

## generate ts from .proto
`npm run generate:protoc`

### protoc install
`brew install protobuf`