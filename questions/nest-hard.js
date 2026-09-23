const QUESTIONS = [
  {
    question:
      "A controller receives a request and needs to execute business logic. Which approach best follows typical NestJS architecture?",
    options: [
      "Put all business logic directly inside the controller",
      "Pass the work to a service",
      "Put the business logic inside the module decorator",
      "Put the business logic inside the DTO",
    ],
    answer: 1,
    explanation:
      "Controllers should mainly handle HTTP concerns, while services commonly contain the application's business logic.",
  },

  {
    question:
      "A service from UsersModule needs to be used inside OrdersModule. What must UsersModule normally do for the service to be available outside the module?",
    options: [
      "Add UsersService to its exports",
      "Add UsersService to its controllers",
      "Add OrdersModule to its providers",
      "Make UsersService a DTO",
    ],
    answer: 0,
    explanation:
      "A provider must be exported by its module before another module that imports that module can use it.",
  },

  {
    question:
      "UsersService is exported from UsersModule, but OrdersModule still cannot inject it. What is the most likely missing configuration?",
    options: [
      "OrdersModule has not imported UsersModule",
      "UsersService needs to be a controller",
      "UsersModule must import OrdersController",
      "The service needs a @Get() decorator",
    ],
    answer: 0,
    explanation:
      "The consuming module must import the module that exports the provider.",
  },

  {
    question:
      "A DTO has validation decorators, but invalid requests are still reaching the controller without validation. What is a likely cause?",
    options: [
      "ValidationPipe has not been enabled",
      "The controller needs @Entity()",
      "The service needs @Injectable() twice",
      "The DTO must extend Controller",
    ],
    answer: 0,
    explanation:
      "Validation decorators such as @IsEmail() require a validation mechanism such as ValidationPipe to actually perform validation.",
  },

  {
    question:
      "What is the main reason for using `ValidationPipe({ whitelist: true })`?",
    options: [
      "To remove properties that are not allowed by the DTO",
      "To automatically encrypt all properties",
      "To make every property optional",
      "To convert every value to a number",
    ],
    answer: 0,
    explanation:
      "With whitelist enabled, properties without validation decorators can be stripped from the incoming object.",
  },

  {
    question:
      "What is the purpose of `forbidNonWhitelisted: true` when used with ValidationPipe?",
    options: [
      "Reject requests containing properties that are not allowed",
      "Automatically remove invalid properties",
      "Make all DTO fields required",
      "Disable validation",
    ],
    answer: 0,
    explanation:
      "whitelist removes unknown properties, while forbidNonWhitelisted can make the request fail when such properties are supplied.",
  },

  {
    question:
      'A DTO has `age: number`, but a client sends `{ age: "25" }`. Which ValidationPipe option can help transform the string into a number when appropriate?',
    options: [
      "transform: true",
      "whitelist: true",
      "forbidNonWhitelisted: true",
      "strict: true",
    ],
    answer: 0,
    explanation:
      "ValidationPipe's transform option enables transformation of incoming values based on their expected types and transformation metadata.",
  },

  {
    question:
      "A route is protected by an authentication guard. What is the guard's primary responsibility?",
    options: [
      "Determine whether the request is allowed to proceed",
      "Save the request directly to the database",
      "Format the response JSON",
      "Create the user's account",
    ],
    answer: 0,
    explanation:
      "A guard determines whether a request should continue to the route handler.",
  },

  {
    question:
      "An authentication guard successfully verifies a JWT. Where is user information commonly attached so later handlers can access it?",
    options: [
      "The request object",
      "The module metadata",
      "The DTO class",
      "The database entity decorator",
    ],
    answer: 0,
    explanation:
      "Authenticated user information is commonly attached to the request object so controllers and other request-processing components can access it.",
  },

  {
    question:
      "A route requires an authenticated user with an `admin` role. Which combination is commonly suitable for implementing this?",
    options: [
      "Authentication guard plus role metadata/authorization guard",
      "DTO plus repository",
      "Entity plus interceptor only",
      "Middleware plus database migration",
    ],
    answer: 0,
    explanation:
      "Authentication establishes identity, while authorization logic can use route metadata and a guard to check the user's role.",
  },

  {
    question:
      "Why might a custom decorator such as `@CurrentUser()` be created in a NestJS application?",
    options: [
      "To conveniently retrieve the authenticated user from the request",
      "To create a database entity",
      "To replace all guards",
      "To start the HTTP server",
    ],
    answer: 0,
    explanation:
      "Custom parameter decorators can provide convenient access to values such as the authenticated user attached to the request.",
  },

  {
    question:
      "An interceptor calls `next.handle()` and then uses RxJS operators on the returned value. What does `next.handle()` represent?",
    options: [
      "The execution of the next handler in the request pipeline",
      "A database transaction",
      "The application's root module",
      "A TypeORM entity",
    ],
    answer: 0,
    explanation:
      "In an interceptor, next.handle() passes control to the next stage, eventually reaching the route handler.",
  },

  {
    question:
      "A developer wants to automatically add a consistent response wrapper around successful controller responses. Which NestJS feature is particularly suitable?",
    options: ["Interceptor", "Entity", "DTO only", "Repository"],
    answer: 0,
    explanation:
      "An interceptor can transform the response returned by a route handler, making it suitable for consistent response formatting.",
  },

  {
    question:
      "A developer wants to log every incoming request before the controller runs. Which NestJS feature can be used?",
    options: ["Middleware", "Entity", "DTO", "Repository"],
    answer: 0,
    explanation:
      "Middleware can execute logic during request processing before the request reaches the route handler.",
  },

  {
    question:
      "A developer wants to log how long every controller request takes, including after the handler finishes. Which feature is particularly suitable?",
    options: ["Interceptor", "DTO", "Entity", "Module"],
    answer: 0,
    explanation:
      "Interceptors can execute logic before and after the route handler, making them suitable for measuring execution time.",
  },

  {
    question:
      "A custom exception filter catches `HttpException`. What information can it commonly access from the exception?",
    options: [
      "The HTTP status and response information",
      "The database schema automatically",
      "The user's password automatically",
      "The application's source code",
    ],
    answer: 0,
    explanation:
      "HttpException provides methods such as getStatus() and getResponse() for retrieving HTTP error information.",
  },

  {
    question:
      "A service tries to inject `PaymentsService`, but NestJS reports that it cannot resolve the dependency. What should you check first?",
    options: [
      "Whether PaymentsService is registered and available in the module",
      "Whether the controller has @Get()",
      "Whether the entity has a primary key",
      "Whether main.ts contains a DTO",
    ],
    answer: 0,
    explanation:
      "Dependency resolution errors commonly occur when a provider is not registered, exported, or imported correctly.",
  },

  {
    question:
      "Two modules need to use each other's providers, creating a circular dependency. Which NestJS feature can help resolve a module-level circular dependency?",
    options: [
      "forwardRef()",
      "reverseRef()",
      "CircularModule()",
      "InjectCircular()",
    ],
    answer: 0,
    explanation:
      "forwardRef() can be used when modules have circular dependencies and need their references resolved later.",
  },

  {
    question:
      "What is one potential problem with putting too much business logic directly inside a controller?",
    options: [
      "The controller becomes harder to maintain and test",
      "NestJS will automatically delete the module",
      "HTTP requests stop supporting JSON",
      "TypeScript stops compiling",
    ],
    answer: 0,
    explanation:
      "Large controllers that contain business logic become harder to maintain, test, and reuse.",
  },

  {
    question:
      "A service needs to perform several database operations that must either all succeed or all fail. What database concept is relevant?",
    options: ["Transaction", "Middleware", "Guard", "Decorator"],
    answer: 0,
    explanation:
      "A database transaction groups operations so they can be committed together or rolled back when necessary.",
  },

  {
    question:
      "Why can directly modifying an entity object without saving it fail to update the database?",
    options: [
      "Changing an in-memory object does not necessarily persist the change",
      "Entities cannot contain properties",
      "TypeORM automatically rejects all updates",
      "Controllers cannot access entities",
    ],
    answer: 0,
    explanation:
      "Changing an entity instance in memory does not automatically persist the change. A persistence operation such as save or update is normally required.",
  },

  {
    question:
      "A service uses `findOne()` to retrieve a user and receives `null` or `undefined`. What should the service commonly do if the user is required?",
    options: [
      "Throw an appropriate exception such as NotFoundException",
      "Continue as if the user exists",
      "Restart the application",
      "Create a random user",
    ],
    answer: 0,
    explanation:
      "If a required resource does not exist, the service commonly throws NotFoundException so the client receives an appropriate 404 response.",
  },

  {
    question:
      "A POST endpoint creates an order but returns HTTP 200 instead of 201. Which decorator could be used to explicitly change the status?",
    options: [
      "@HttpCode(HttpStatus.CREATED)",
      "@Status(HttpStatus.CREATED)",
      "@Created()",
      "@Response(HttpStatus.CREATED)",
    ],
    answer: 0,
    explanation:
      "The @HttpCode() decorator can explicitly specify the status code returned by a route.",
  },

  {
    question:
      "A service method calls another service and waits for its result before continuing. Which JavaScript feature is commonly used for this?",
    options: ["await", "yield only", "defer", "pause"],
    answer: 0,
    explanation:
      "await is commonly used inside an async function to wait for a Promise's result before continuing.",
  },
  {
    question:
      "Which sequence best represents the usual order for middleware, guards, interceptors, and the controller handler in NestJS?",
    options: [
      "Middleware → Guards → Interceptors → Controller handler",
      "Controller handler → Middleware → Guards → Interceptors",
      "Guards → Middleware → Controller handler → Interceptors",
      "Interceptors → Controller handler → Middleware → Guards",
    ],
    answer: 0,
    explanation:
      "In the typical request lifecycle, middleware runs first, followed by guards and then interceptors before the controller handler executes.",
  },

  {
    question:
      "A guard returns false for a request. Will an interceptor's controller handler normally execute?",
    options: [
      "Yes, because guards only run after the controller",
      "No, because the guard prevents the request from reaching the handler",
      "Yes, but only if the service exists",
      "Only if the request contains a DTO",
    ],
    answer: 1,
    explanation:
      "A guard can prevent the request from continuing, so the controller handler will not execute when access is denied.",
  },

  {
    question:
      "A middleware modifies `req.user` before the request reaches the controller. Can the controller access that value?",
    options: [
      "Yes, because it is attached to the request object",
      "No, because middleware cannot modify requests",
      "Only through a database repository",
      "Only through a DTO",
    ],
    answer: 0,
    explanation:
      "Middleware can modify the request object, and later parts of the request pipeline can access those modifications.",
  },

  {
    question:
      "A guard needs access to metadata defined on a route with `@SetMetadata()`. Which NestJS utility is commonly used?",
    options: [
      "Reflector",
      "MetadataReader",
      "RouteScanner",
      "DecoratorService",
    ],
    answer: 0,
    explanation:
      "NestJS provides Reflector for reading metadata attached to controllers and route handlers.",
  },

  {
    question:
      "A role guard reads roles from route metadata and compares them with the authenticated user's roles. What is the guard performing?",
    options: [
      "Authorization",
      "Authentication",
      "Serialization",
      "Database migration",
    ],
    answer: 0,
    explanation:
      "Checking whether an authenticated user has permission to perform an action is authorization.",
  },

  {
    question:
      "A JWT is valid, but the user does not have permission to access `/admin`. Which concept should reject the request?",
    options: [
      "Authorization",
      "Authentication",
      "DTO transformation",
      "Database synchronization",
    ],
    answer: 0,
    explanation:
      "A valid JWT establishes authentication, but permissions such as admin access are part of authorization.",
  },

  {
    question:
      "A NestJS service needs a repository for the `User` entity when using TypeORM. Which decorator is commonly used to inject that repository?",
    options: [
      "@InjectRepository(User)",
      "@UseRepository(User)",
      "@Repository(User)",
      "@InjectEntity(User)",
    ],
    answer: 0,
    explanation:
      "@InjectRepository(User) tells NestJS to inject the TypeORM repository associated with the User entity.",
  },

  {
    question:
      "For `@InjectRepository(User)` to work, what generally needs to be configured in the module?",
    options: [
      "TypeOrmModule.forFeature([User])",
      "UserModule.forEntity(User)",
      "DatabaseModule.forController(User)",
      "RepositoryModule.register(User)",
    ],
    answer: 0,
    explanation:
      "TypeOrmModule.forFeature([User]) registers the repository for the User entity within the module's scope.",
  },

  {
    question:
      "A repository is registered with `TypeOrmModule.forFeature([Order])` inside OrdersModule. Where can that repository normally be injected?",
    options: [
      "Within OrdersModule and providers available in its module context",
      "Only inside main.ts",
      "Only inside AppController",
      "Automatically inside every module in the application",
    ],
    answer: 0,
    explanation:
      "forFeature registers the entity repository in the module's dependency injection scope. It is not automatically available everywhere.",
  },

  {
    question: "What is the main purpose of `TypeOrmModule.forRoot()`?",
    options: [
      "Configure the application's TypeORM database connection",
      "Register a controller",
      "Create a DTO",
      "Configure a single route",
    ],
    answer: 0,
    explanation:
      "forRoot() establishes the TypeORM configuration and database connection for the application.",
  },

  {
    question:
      "What is the main difference between `forRoot()` and `forFeature()` in a typical NestJS TypeORM setup?",
    options: [
      "forRoot configures the connection, while forFeature registers repositories/entities for a module",
      "forRoot creates controllers, while forFeature creates guards",
      "forRoot validates DTOs, while forFeature validates entities",
      "They perform exactly the same function",
    ],
    answer: 0,
    explanation:
      "forRoot is used for the main TypeORM configuration, while forFeature makes specified repositories available within a module.",
  },

  {
    question:
      "An Order entity has a `customerId` column, but the developer does not define a TypeORM relation. What can the application still do?",
    options: [
      "Store and query the customerId as a normal column",
      "It cannot store the order",
      "NestJS automatically creates the Customer entity",
      "TypeORM automatically creates every relationship",
    ],
    answer: 0,
    explanation:
      "A foreign-key-like ID can be stored as a normal column even when no TypeORM relation is defined.",
  },

  {
    question:
      "What is one benefit of defining a TypeORM relation instead of storing only an ID?",
    options: [
      "The ORM can represent and navigate the relationship between entities",
      "It removes the need for a database",
      "It automatically validates every API request",
      "It makes all queries synchronous",
    ],
    answer: 0,
    explanation:
      "Relations allow TypeORM to understand associations between entities and provide relation-aware querying and loading.",
  },

  {
    question:
      "An endpoint returns a user together with a large number of related records that are not needed. What can be a disadvantage of eagerly loading unnecessary relations?",
    options: [
      "It can make queries and responses heavier",
      "It prevents TypeScript from compiling",
      "It automatically deletes the relations",
      "It makes the HTTP method invalid",
    ],
    answer: 0,
    explanation:
      "Loading unnecessary relations can increase database work, memory usage, and response size.",
  },

  {
    question:
      "A developer wants to load a relation only for a particular query instead of always loading it. What is a common approach?",
    options: [
      "Explicitly request the relation in that query",
      "Put the relation inside main.ts",
      "Use @Controller() on the entity",
      "Make the relation a DTO",
    ],
    answer: 0,
    explanation:
      "Relations can commonly be loaded explicitly for queries where they are actually needed instead of always loading them.",
  },

  {
    question:
      "Two database operations must both succeed. If the second operation fails, the first should be undone. Which approach is appropriate?",
    options: [
      "Use a database transaction",
      "Use a controller decorator",
      "Use a DTO",
      "Use a guard",
    ],
    answer: 0,
    explanation:
      "Transactions provide atomicity so a group of related database operations can be committed together or rolled back.",
  },

  {
    question:
      "Why can using two independent `repository.save()` calls be risky when both operations must succeed together?",
    options: [
      "The first operation may succeed while the second fails",
      "save() cannot write to databases",
      "The second save automatically deletes the first",
      "NestJS only allows one repository operation per request",
    ],
    answer: 0,
    explanation:
      "Separate operations are not necessarily atomic. Without a transaction, one can succeed while another fails.",
  },

  {
    question:
      "A NestJS endpoint starts a database transaction but throws an exception before committing. What should normally happen to the transaction?",
    options: [
      "It should be rolled back",
      "It should always be committed",
      "It should create another transaction automatically",
      "It should be converted into a GET request",
    ],
    answer: 0,
    explanation:
      "When transactional work fails, the transaction should normally be rolled back so partial changes are not persisted.",
  },

  {
    question:
      "A developer catches every error in a service and returns `{ success: false }` without throwing an HTTP exception. What could be a problem?",
    options: [
      "The API may return an inappropriate success status such as HTTP 200",
      "NestJS will automatically create a new database",
      "The controller will always return HTTP 500",
      "The service can no longer use dependency injection",
    ],
    answer: 0,
    explanation:
      "Returning an error object does not automatically create an HTTP error response. The application may incorrectly report a successful status.",
  },

  {
    question:
      "A service catches a `NotFoundException` and replaces it with a generic `InternalServerErrorException`. What information may be lost?",
    options: [
      "The fact that the requested resource was not found",
      "The database connection",
      "The controller route",
      "The TypeScript type",
    ],
    answer: 0,
    explanation:
      "Replacing a specific exception with a generic 500 error can hide the original meaning and produce an inaccurate response.",
  },

  {
    question:
      "What is a common reason for creating a custom exception class in NestJS?",
    options: [
      "To represent an application-specific error consistently",
      "To replace all controllers",
      "To create database tables",
      "To make DTOs optional",
    ],
    answer: 0,
    explanation:
      "Custom exceptions can represent application-specific error conditions while fitting into NestJS's exception handling system.",
  },

  {
    question:
      "A service calls an external API and the API is temporarily unavailable. Which approach can be useful when appropriate?",
    options: [
      "Handle the failure and return or throw an appropriate application error",
      "Pretend the external API succeeded",
      "Delete the local database",
      "Ignore the Promise",
    ],
    answer: 0,
    explanation:
      "External service failures should be handled explicitly so the application can provide an appropriate response or recovery behavior.",
  },

  {
    question:
      "Why should a controller generally avoid directly containing database queries?",
    options: [
      "It mixes HTTP handling with data-access and business logic",
      "Controllers cannot technically access databases",
      "NestJS forbids repositories inside applications",
      "Database queries can only run in main.ts",
    ],
    answer: 0,
    explanation:
      "Keeping database access in services or dedicated data-access layers improves separation of concerns and maintainability.",
  },

  {
    question:
      "A developer wants a provider to have a single shared instance within its NestJS module/container by default. What is the default provider scope?",
    options: ["Singleton", "Request", "Transient", "Global"],
    answer: 0,
    explanation:
      "NestJS providers are singleton-scoped by default, meaning the same instance is reused within the application container.",
  },

  {
    question: "When might request scope be useful for a NestJS provider?",
    options: [
      "When the provider needs a separate instance for each incoming request",
      "When the provider should never be instantiated",
      "When the provider only accesses static files",
      "When the provider must become a controller",
    ],
    answer: 0,
    explanation:
      "Request-scoped providers create a new instance for each request, which can be useful when state must be isolated per request.",
  },
  {
    question:
      "A provider is registered with `Scope.REQUEST`. What does this mean?",
    options: [
      "A new instance is created for each incoming request",
      "The provider can only be used by controllers",
      "The provider is created once when the server starts",
      "The provider is automatically available to every application",
    ],
    answer: 0,
    explanation:
      "Request-scoped providers receive a new instance for each incoming request.",
  },

  {
    question: "What is the default scope of a NestJS provider?",
    options: ["Singleton", "Request", "Transient", "Controller"],
    answer: 0,
    explanation: "NestJS providers are singleton-scoped by default.",
  },

  {
    question: "What does `Scope.TRANSIENT` mean for a NestJS provider?",
    options: [
      "A new instance is created each time the provider is injected",
      "One instance is shared by the entire application",
      "One instance is created for every HTTP request only",
      "The provider cannot be injected",
    ],
    answer: 0,
    explanation:
      "Transient providers are not shared. NestJS creates a new instance for each consumer that injects them.",
  },

  {
    question:
      "A singleton service stores the currently logged-in user's ID in a property. Why can this be dangerous?",
    options: [
      "The same service instance may be shared across different requests",
      "Singleton services cannot have properties",
      "NestJS automatically deletes the property",
      "User IDs can only be stored in DTOs",
    ],
    answer: 0,
    explanation:
      "Singleton providers can serve many requests, so storing request-specific state in them can cause data to leak between requests.",
  },

  {
    question: "What does `forwardRef()` primarily help NestJS handle?",
    options: [
      "Circular dependencies",
      "Database transactions",
      "HTTP redirects",
      "DTO validation",
    ],
    answer: 0,
    explanation:
      "forwardRef() allows NestJS to resolve references that would otherwise create circular dependency problems.",
  },

  {
    question:
      "Two services inject each other directly. What problem can this create?",
    options: [
      "A circular dependency",
      "A database migration",
      "A validation error",
      "An HTTP redirect",
    ],
    answer: 0,
    explanation:
      "When ServiceA depends on ServiceB and ServiceB depends on ServiceA, the dependency graph becomes circular.",
  },

  {
    question: "What is `ModuleRef` useful for in NestJS?",
    options: [
      "Programmatically retrieving providers from the NestJS dependency injection container",
      "Creating database tables",
      "Validating HTTP bodies",
      "Defining controller routes",
    ],
    answer: 0,
    explanation:
      "ModuleRef provides access to NestJS's dependency injection container and can be used to retrieve providers dynamically.",
  },

  {
    question:
      "Why might a developer use `ModuleRef.get()` instead of normal constructor injection?",
    options: [
      "When a dependency needs to be retrieved dynamically at runtime",
      "Because constructor injection is not supported by NestJS",
      "To automatically create database migrations",
      "To bypass all validation",
    ],
    answer: 0,
    explanation:
      "ModuleRef can be useful when a provider needs to be resolved dynamically rather than declared as a normal constructor dependency.",
  },

  {
    question:
      "A provider is declared in a module but another module cannot inject it. Which configuration should be checked?",
    options: [
      "Whether the provider is exported and the consuming module imports the provider's module",
      "Whether the provider has a GET route",
      "Whether the provider is a TypeORM entity",
      "Whether main.ts contains the provider",
    ],
    answer: 0,
    explanation:
      "Providers generally need to be exported by their module and that module must be imported by the consuming module.",
  },

  {
    question: "What is an asynchronous provider useful for?",
    options: [
      "Creating a provider whose initialization depends on asynchronous work",
      "Making every HTTP request synchronous",
      "Replacing all controllers",
      "Disabling dependency injection",
    ],
    answer: 0,
    explanation:
      "Async providers are useful when a provider needs asynchronous initialization, such as loading configuration or establishing a resource.",
  },

  {
    question:
      "A provider uses `useFactory` and its factory function depends on ConfigService. What can be used to tell NestJS about that dependency?",
    options: [
      "The `inject` property",
      "The `imports` property only",
      "The `exports` property only",
      "The `controllers` property",
    ],
    answer: 0,
    explanation:
      "The inject array tells NestJS which dependencies should be passed into the factory function.",
  },

  {
    question:
      "What is the purpose of the `inject` array in a factory provider?",
    options: [
      "Specify dependencies that should be passed to the factory function",
      "Specify HTTP routes",
      "Specify database columns",
      "Specify DTO validation rules",
    ],
    answer: 0,
    explanation:
      "The inject array identifies the dependencies NestJS should resolve and provide to the factory.",
  },

  {
    question:
      "A configuration value should be different between development and production. What is a common approach?",
    options: [
      "Use environment variables or environment-specific configuration",
      "Hard-code both values in the controller",
      "Create two versions of every service",
      "Store the value inside a DTO",
    ],
    answer: 0,
    explanation:
      "Environment variables and configuration systems allow values to differ between environments without changing application logic.",
  },

  {
    question:
      "Why is a configuration service often preferable to accessing `process.env` throughout many services?",
    options: [
      "It centralizes and organizes application configuration",
      "It makes Node.js unnecessary",
      "It automatically encrypts every value",
      "It removes the need for environment variables",
    ],
    answer: 0,
    explanation:
      "A configuration service provides a centralized way to access and manage application configuration.",
  },

  {
    question:
      "A NestJS application has `ConfigModule.forRoot({ isGlobal: true })`. What does `isGlobal: true` generally do?",
    options: [
      "Makes ConfigModule available without importing it into every module",
      "Makes all environment variables public",
      "Makes the database globally accessible",
      "Makes every provider request-scoped",
    ],
    answer: 0,
    explanation:
      "A global ConfigModule makes its exported configuration provider available throughout the application without repeatedly importing the module.",
  },

  {
    question:
      "A DTO contains `password`, but the API response should never expose it. Which NestJS feature can help control what properties are serialized?",
    options: [
      "Serialization/interceptors such as ClassSerializerInterceptor",
      "Guard only",
      "Middleware only",
      "TypeORM migration",
    ],
    answer: 0,
    explanation:
      "NestJS serialization tools can control which properties are included when objects are transformed into responses.",
  },

  {
    question:
      "What is the purpose of `@Exclude()` when used with class-transformer?",
    options: [
      "Exclude a property from serialization",
      "Exclude a property from the database",
      "Exclude a route from a module",
      "Exclude a provider from dependency injection",
    ],
    answer: 0,
    explanation:
      "@Exclude() tells class-transformer not to include the decorated property during serialization.",
  },

  {
    question: "What is the purpose of `@Expose()` in class-transformer?",
    options: [
      "Explicitly include a property during serialization",
      "Create a database column",
      "Expose a private API route",
      "Export a NestJS module",
    ],
    answer: 0,
    explanation:
      "@Expose() can explicitly mark properties or methods to be included during class-transformer serialization.",
  },

  {
    question:
      "A password is marked with `@Exclude()`, but the password still appears in the response. What should be checked?",
    options: [
      "Whether the response is actually being transformed using the appropriate serialization setup",
      "Whether the database uses PostgreSQL",
      "Whether the controller uses POST",
      "Whether the password is a number",
    ],
    answer: 0,
    explanation:
      "Serialization decorators only affect transformation when the appropriate class-transformer/serialization process is actually being used.",
  },

  {
    question:
      "What is the purpose of DTO mapped types such as `PartialType()`?",
    options: [
      "Create a new DTO type based on another DTO with modified property requirements",
      "Create a database table",
      "Create a new controller automatically",
      "Convert TypeScript into JavaScript",
    ],
    answer: 0,
    explanation:
      "Mapped types make it easier to derive DTOs while changing how their properties behave.",
  },

  {
    question:
      "An `UpdateUserDto` should contain the same fields as `CreateUserDto`, but all fields should be optional. Which mapped type is commonly suitable?",
    options: [
      "PartialType(CreateUserDto)",
      "OptionalDto(CreateUserDto)",
      "UpdateType(CreateUserDto)",
      "NullableType(CreateUserDto)",
    ],
    answer: 0,
    explanation:
      "PartialType() creates a DTO where the properties of the base DTO become optional.",
  },

  {
    question:
      "Why is `PartialType(CreateUserDto)` commonly useful for update endpoints?",
    options: [
      "Updates often allow only some fields to be changed",
      "Updates always require every field",
      "It automatically saves the user to the database",
      "It automatically authenticates the request",
    ],
    answer: 0,
    explanation:
      "PATCH-style updates often allow clients to send only the fields they want to change.",
  },

  {
    question:
      "A PATCH endpoint receives `{ name: 'James' }` for a user whose email should remain unchanged. Why is a partial update DTO useful?",
    options: [
      "It allows only the supplied fields to be required while others remain optional",
      "It deletes the email automatically",
      "It requires the client to resend every property",
      "It prevents database updates",
    ],
    answer: 0,
    explanation:
      "A partial DTO allows an update request to contain only the fields being changed.",
  },

  {
    question:
      "A developer uses `PUT` for a full replacement and `PATCH` for changing only selected fields. Which statement best describes the common distinction?",
    options: [
      "PUT commonly represents a replacement, while PATCH commonly represents a partial modification",
      "PUT is always for reading and PATCH is always for deleting",
      "PUT and PATCH are exactly the same",
      "PATCH can only be used for authentication",
    ],
    answer: 0,
    explanation:
      "Although exact API semantics can vary, PUT is commonly associated with replacement while PATCH is commonly associated with partial modification.",
  },

  {
    question:
      "A TypeORM query uses `find({ where: { status: 'pending' } })`. What is it asking the database for?",
    options: [
      "Records whose status matches 'pending'",
      "Only the database schema",
      "Records with any status except pending",
      "The number of database tables",
    ],
    answer: 0,
    explanation:
      "The where condition filters the query so that matching records have the specified status.",
  },
  {
    question:
      "A NestJS application returns `Cannot resolve dependencies of UsersService`. What does this error usually indicate?",
    options: [
      "NestJS cannot find or create one of UsersService's dependencies",
      "The HTTP method is invalid",
      "The database has no tables",
      "The controller has too many routes",
    ],
    answer: 0,
    explanation:
      "This dependency injection error usually means NestJS cannot resolve one of the dependencies required by the service.",
  },

  {
    question:
      "A service constructor contains `constructor(private usersService: UsersService)`, but NestJS cannot resolve UsersService. Which should be checked first?",
    options: [
      "Whether UsersService is registered as a provider in the appropriate module",
      "Whether UsersService has a @Get() decorator",
      "Whether UsersService is a DTO",
      "Whether the route uses POST",
    ],
    answer: 0,
    explanation:
      "The first thing to check is whether the dependency is properly registered in the module's providers and available in that module's scope.",
  },

  {
    question:
      "A provider exists in UsersModule and is listed in `providers`, but OrdersModule cannot inject it. What is likely missing?",
    options: [
      "UsersModule needs to export the provider and OrdersModule needs to import UsersModule",
      "UsersService needs @Controller()",
      "OrdersModule needs to become a DTO",
      "UsersService needs @Get()",
    ],
    answer: 0,
    explanation:
      "Providers used outside their module normally need to be exported, and the consuming module needs to import the module that exports them.",
  },

  {
    question:
      "A login endpoint verifies a user's credentials successfully. What should normally happen before issuing an access token?",
    options: [
      "The application should establish the authenticated user's identity",
      "The application should delete the user's password",
      "The application should create a new database",
      "The application should disable validation",
    ],
    answer: 0,
    explanation:
      "After credentials are successfully verified, the application can establish the user's identity and issue an authentication token or session.",
  },

  {
    question:
      "Why should a password normally be hashed rather than stored as plain text?",
    options: [
      "A database leak would not directly reveal users' original passwords",
      "Hashed passwords can be read faster",
      "NestJS requires passwords to be hashes",
      "Plain-text passwords cannot be stored in PostgreSQL",
    ],
    answer: 0,
    explanation:
      "Password hashing protects the original password if stored credentials are exposed.",
  },

  {
    question:
      "When checking a password against a stored password hash, what should the application generally do?",
    options: [
      "Use a password-hashing library's comparison function",
      "Hash the password with a random algorithm and compare strings directly",
      "Decrypt the stored password",
      "Compare the plain password to the stored hash",
    ],
    answer: 0,
    explanation:
      "Password hashing libraries provide comparison functions that safely determine whether a supplied password matches a stored hash.",
  },

  {
    question:
      "What is a common purpose of an access token such as a JWT in a NestJS API?",
    options: [
      "Represent authenticated identity and claims for subsequent requests",
      "Store the entire database",
      "Replace DTO validation",
      "Encrypt every database table",
    ],
    answer: 0,
    explanation:
      "A JWT can carry claims that allow the server to identify an authenticated user on later requests.",
  },

  {
    question:
      "Why should sensitive information such as a user's password generally not be placed inside a JWT payload?",
    options: [
      "JWT payload data can generally be decoded by whoever possesses the token",
      "JWTs can only contain numbers",
      "NestJS automatically deletes passwords from JWTs",
      "Passwords cannot be represented as strings",
    ],
    answer: 0,
    explanation:
      "A signed JWT is not automatically encrypted. Its payload can generally be decoded, so sensitive secrets should not be placed there.",
  },

  {
    question:
      "A JWT guard rejects a request before the controller executes. What is the guard protecting?",
    options: [
      "The route from unauthorized access",
      "The database from SQL queries",
      "The DTO from TypeScript errors",
      "The module from imports",
    ],
    answer: 0,
    explanation:
      "An authentication guard can prevent unauthenticated requests from reaching protected route handlers.",
  },

  {
    question:
      "A user has a valid JWT but attempts to delete another user's account. Which additional security check may be required?",
    options: [
      "An authorization check",
      "A DTO transformation",
      "A database migration",
      "A response interceptor only",
    ],
    answer: 0,
    explanation:
      "Authentication confirms identity, while authorization determines whether that identity has permission to perform the requested action.",
  },

  {
    question:
      "A service uses `repository.findOne({ where: { email } })` to locate a user. What happens if no matching record exists?",
    options: [
      "The query returns no matching entity",
      "NestJS automatically creates the user",
      "The database automatically throws a 500 error",
      "The controller automatically returns 201",
    ],
    answer: 0,
    explanation:
      "If no entity matches the condition, findOne does not create a record; the service must decide how to handle the missing result.",
  },

  {
    question:
      "A developer needs to know whether a username already exists before creating a new user. Where should this check commonly happen?",
    options: [
      "In the service or appropriate application/data-access layer",
      "Inside the DTO decorator only",
      "Inside package.json",
      "Inside the module name",
    ],
    answer: 0,
    explanation:
      "Checking existing records is application/data-access logic and is commonly handled by a service using a repository.",
  },

  {
    question:
      "Two users try to register with the same unique email at nearly the same time. Why should the database still have a unique constraint?",
    options: [
      "It provides database-level protection against duplicate values",
      "DTO validation cannot ever be used",
      "NestJS controllers cannot check email addresses",
      "Transactions are never needed",
    ],
    answer: 0,
    explanation:
      "Application-level checks can have race conditions. A database unique constraint provides authoritative protection against duplicates.",
  },

  {
    question:
      "An application checks that an email is available and then inserts the user, but another request inserts the same email between those operations. What kind of problem can occur?",
    options: [
      "A race condition",
      "A DTO inheritance error",
      "A controller decorator error",
      "A TypeScript import error",
    ],
    answer: 0,
    explanation:
      "Concurrent requests can change the database between a check and an insert, creating a race condition.",
  },

  {
    question:
      "A database has a unique constraint on email, and an insert violates it. How should the application generally respond?",
    options: [
      "Catch or map the database error to an appropriate application-level response",
      "Return success regardless of the error",
      "Restart the server",
      "Delete the existing user",
    ],
    answer: 0,
    explanation:
      "Database constraint errors should be handled and translated into an appropriate API response when necessary.",
  },

  {
    question: "What is the purpose of database indexing?",
    options: [
      "Improve the efficiency of certain database queries",
      "Encrypt database passwords",
      "Validate DTOs",
      "Authenticate HTTP requests",
    ],
    answer: 0,
    explanation:
      "Indexes can make certain lookups and filtering operations faster, although they also have storage and write costs.",
  },

  {
    question:
      "A query frequently searches users by email, and email is indexed. What is the likely benefit?",
    options: [
      "The database may locate matching records more efficiently",
      "The API no longer needs authentication",
      "The email becomes automatically unique",
      "The DTO becomes optional",
    ],
    answer: 0,
    explanation:
      "An appropriate index can improve the performance of queries that frequently search by that column.",
  },

  {
    question:
      "A NestJS endpoint returns thousands of database records at once. What is a common improvement?",
    options: [
      "Use pagination",
      "Add more decorators to the controller",
      "Convert every record into a JWT",
      "Disable the database",
    ],
    answer: 0,
    explanation:
      "Pagination limits how many records are retrieved and returned in a single request.",
  },

  {
    question:
      "A request contains `page=2&limit=20`. What is the purpose of these parameters in a typical paginated endpoint?",
    options: [
      "Retrieve a particular subset of records",
      "Authenticate the user",
      "Create a database transaction",
      "Change the HTTP method",
    ],
    answer: 0,
    explanation:
      "Page and limit parameters commonly determine which subset of records should be returned.",
  },

  {
    question:
      "Why might an API return both `data` and pagination metadata such as `total` and `page`?",
    options: [
      "The client can understand both the returned records and the overall pagination state",
      "It makes database queries unnecessary",
      "It prevents all errors",
      "It automatically authenticates users",
    ],
    answer: 0,
    explanation:
      "Pagination metadata helps clients understand the current page, total records, page size, and other pagination information.",
  },

  {
    question:
      "A NestJS application repeatedly performs an expensive operation for the same data. Which technique may reduce repeated work?",
    options: [
      "Caching",
      "Adding another controller",
      "Removing DTOs",
      "Using more HTTP methods",
    ],
    answer: 0,
    explanation:
      "Caching can store previously computed or retrieved data so repeated requests can sometimes avoid the expensive operation.",
  },

  {
    question:
      "What is a potential downside of caching data that changes frequently?",
    options: [
      "Clients may receive stale data",
      "NestJS cannot use services",
      "The database becomes read-only",
      "Controllers stop accepting requests",
    ],
    answer: 0,
    explanation:
      "Cached data can become stale if it is not invalidated or refreshed when the underlying data changes.",
  },

  {
    question:
      "A NestJS application needs to accept an uploaded profile picture. Which type of request is commonly used for file uploads?",
    options: [
      "multipart/form-data",
      "text/plain only",
      "application/xml only",
      "application/graphql only",
    ],
    answer: 0,
    explanation:
      "multipart/form-data is commonly used when an HTTP request needs to contain uploaded files along with other form fields.",
  },

  {
    question:
      "Which NestJS feature can be used to process uploaded files in a controller?",
    options: [
      "File interceptors such as FileInterceptor",
      "Database entities",
      "Validation decorators only",
      "Module exports",
    ],
    answer: 0,
    explanation:
      "NestJS provides file interceptors such as FileInterceptor for handling uploaded files.",
  },

  {
    question:
      "A developer wants to test whether a UsersService method returns the expected result without connecting to a real database. What approach is appropriate?",
    options: [
      "Unit test the service and mock its dependencies",
      "Always use production data",
      "Disable dependency injection",
      "Remove the service",
    ],
    answer: 0,
    explanation:
      "Unit tests can isolate a service by replacing dependencies such as repositories with mocks.",
  },
];
