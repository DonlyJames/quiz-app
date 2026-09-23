const QUESTIONS = [
  {
    question: "What is NestJS primarily used for?",
    options: [
      "Building backend applications",
      "Designing images",
      "Creating database tables only",
      "Styling web pages",
    ],
    answer: 0,
    explanation:
      "NestJS is a Node.js framework designed primarily for building scalable server-side applications.",
  },

  {
    question: "Which programming language is NestJS primarily built with?",
    options: ["Python", "Java", "TypeScript", "PHP"],
    answer: 2,
    explanation:
      "NestJS is built with TypeScript, although JavaScript can also be used.",
  },

  {
    question:
      "Which Node.js platform is commonly used to run a NestJS application?",
    options: ["Node.js", "Django", "Laravel", "Spring"],
    answer: 0,
    explanation:
      "NestJS runs on Node.js and commonly uses Express or Fastify underneath.",
  },

  {
    question:
      "Which command is commonly used to create a new NestJS project with the Nest CLI?",
    options: [
      "nest new project-name",
      "nest create project-name",
      "npm nest project-name",
      "create-nest project-name",
    ],
    answer: 0,
    explanation:
      "The Nest CLI uses the `nest new` command to create a new project.",
  },

  {
    question: "Which decorator is normally used to define a NestJS controller?",
    options: ["@Module()", "@Controller()", "@Service()", "@Route()"],
    answer: 1,
    explanation:
      "The @Controller() decorator tells NestJS that a class handles incoming requests.",
  },

  {
    question: "Which decorator is used to define a NestJS module?",
    options: ["@Controller()", "@Provider()", "@Module()", "@Nest()"],
    answer: 2,
    explanation:
      "The @Module() decorator defines a module and its related controllers, providers, imports, and exports.",
  },

  {
    question: "What is the main purpose of a controller in NestJS?",
    options: [
      "Handle incoming requests",
      "Store passwords",
      "Create database servers",
      "Compile TypeScript",
    ],
    answer: 0,
    explanation:
      "Controllers receive incoming requests and return responses, usually by calling application services.",
  },

  {
    question: "Which decorator is commonly used to handle HTTP GET requests?",
    options: ["@Get()", "@Fetch()", "@Request()", "@Read()"],
    answer: 0,
    explanation:
      "The @Get() decorator maps a controller method to HTTP GET requests.",
  },

  {
    question: "Which decorator is commonly used to handle HTTP POST requests?",
    options: ["@Send()", "@Post()", "@Create()", "@Add()"],
    answer: 1,
    explanation:
      "The @Post() decorator maps a controller method to HTTP POST requests.",
  },

  {
    question:
      "Which decorator is commonly used to handle HTTP DELETE requests?",
    options: ["@Remove()", "@Delete()", "@Destroy()", "@Drop()"],
    answer: 1,
    explanation:
      "The @Delete() decorator maps a controller method to HTTP DELETE requests.",
  },

  {
    question: "What is a provider commonly used for in NestJS?",
    options: [
      "Encapsulating reusable application logic",
      "Replacing the Node.js runtime",
      "Creating HTML pages",
      "Changing the TypeScript compiler",
    ],
    answer: 0,
    explanation:
      "Providers are commonly used for reusable logic such as services, repositories, and other injectable classes.",
  },

  {
    question:
      "Which decorator makes a class available for dependency injection?",
    options: ["@Injectable()", "@Provider()", "@Dependency()", "@Service()"],
    answer: 0,
    explanation:
      "The @Injectable() decorator marks a class as a provider that NestJS can manage through dependency injection.",
  },

  {
    question: "What does dependency injection allow NestJS to do?",
    options: [
      "Automatically provide required dependencies to classes",
      "Automatically create database tables",
      "Automatically write TypeScript code",
      "Automatically deploy the application",
    ],
    answer: 0,
    explanation:
      "Dependency injection allows NestJS to provide a class with the dependencies it needs instead of the class creating them itself.",
  },

  {
    question:
      "Which class would commonly contain business logic for an orders feature?",
    options: ["OrdersService", "OrdersModule", "OrdersController", "OrdersDto"],
    answer: 0,
    explanation:
      "A service such as OrdersService commonly contains the business logic for an orders feature.",
  },

  {
    question: "How is a service commonly injected into a NestJS controller?",
    options: [
      "Through the constructor",
      "Through the HTML file",
      "Through a database query",
      "Through the package.json file",
    ],
    answer: 0,
    explanation:
      "NestJS commonly injects dependencies through the constructor of a class.",
  },

  {
    question:
      "What does the following code represent? `constructor(private usersService: UsersService) {}`",
    options: [
      "Dependency injection",
      "Route creation",
      "Database migration",
      "Exception handling",
    ],
    answer: 0,
    explanation:
      "NestJS injects UsersService into the class through its constructor.",
  },

  {
    question: "What is the purpose of a DTO in NestJS?",
    options: [
      "Describe the expected structure of data",
      "Start the NestJS server",
      "Create database connections",
      "Handle CSS",
    ],
    answer: 0,
    explanation:
      "A DTO, or Data Transfer Object, describes the structure of data being transferred between parts of an application.",
  },

  {
    question: "What does DTO stand for?",
    options: [
      "Data Transfer Object",
      "Database Type Object",
      "Data Table Operation",
      "Dynamic Transfer Operation",
    ],
    answer: 0,
    explanation: "DTO stands for Data Transfer Object.",
  },

  {
    question:
      "Which NestJS feature can transform and validate incoming request data?",
    options: ["Pipes", "Modules", "Controllers", "Repositories"],
    answer: 0,
    explanation:
      "Pipes can transform incoming data and validate it before it reaches the route handler.",
  },

  {
    question:
      "Which built-in NestJS pipe is commonly used with class-validator for DTO validation?",
    options: ["ValidationPipe", "ValidatePipe", "ClassPipe", "DtoPipe"],
    answer: 0,
    explanation:
      "ValidationPipe is NestJS's built-in pipe commonly used to validate DTOs with class-validator.",
  },

  {
    question: "Where is a global ValidationPipe commonly configured?",
    options: ["main.ts", "package.json", "app.controller.ts", "tsconfig.json"],
    answer: 0,
    explanation:
      "The application's global ValidationPipe is commonly configured in main.ts when the Nest application is bootstrapped.",
  },

  {
    question: "Which decorator can retrieve a value from a route parameter?",
    options: ["@Param()", "@RouteValue()", "@Path()", "@Parameter()"],
    answer: 0,
    explanation:
      "The @Param() decorator retrieves route parameters such as an ID from a URL.",
  },

  {
    question:
      "Given the route `@Get(':id')`, which decorator can access the `id` value?",
    options: ["@Param('id')", "@Body('id')", "@Query('id')", "@Header('id')"],
    answer: 0,
    explanation:
      "@Param('id') retrieves the id value from a route such as /users/25.",
  },

  {
    question:
      "Which decorator is commonly used to access data sent in an HTTP request body?",
    options: ["@Body()", "@Payload()", "@Data()", "@RequestBody()"],
    answer: 0,
    explanation:
      "The @Body() decorator extracts the body of an incoming HTTP request.",
  },

  {
    question:
      "Which decorator is commonly used to access query parameters such as `/users?page=2`?",
    options: ["@Query()", "@Param()", "@Body()", "@Search()"],
    answer: 0,
    explanation:
      "The @Query() decorator accesses query parameters such as page in `/users?page=2`.",
  },
  {
    question:
      "What is the purpose of the `imports` property in a NestJS module?",
    options: [
      "To import CSS files",
      "To make providers from other modules available",
      "To define HTTP routes",
      "To create database tables",
    ],
    answer: 1,
    explanation:
      "The imports array allows a module to use exported providers from other modules.",
  },

  {
    question:
      "What is the purpose of the `controllers` property inside a NestJS module?",
    options: [
      "To register controllers belonging to the module",
      "To register database entities",
      "To store environment variables",
      "To validate request bodies",
    ],
    answer: 0,
    explanation:
      "The controllers array tells NestJS which controllers belong to that module.",
  },

  {
    question:
      "What is the purpose of the `providers` property inside a NestJS module?",
    options: [
      "To register providers that NestJS should manage",
      "To define frontend components",
      "To define HTTP status codes",
      "To register URL parameters",
    ],
    answer: 0,
    explanation:
      "Providers such as services are registered in the providers array so NestJS can manage and inject them.",
  },

  {
    question:
      "What is the purpose of the `exports` property in a NestJS module?",
    options: [
      "To expose selected providers to other modules",
      "To export the application as a ZIP file",
      "To send data to the frontend",
      "To create an HTTP response",
    ],
    answer: 0,
    explanation:
      "A module can export providers so that modules importing it can use those providers.",
  },

  {
    question:
      "If `UsersService` is exported from UsersModule, what does another module normally need to do to use it?",
    options: [
      "Import UsersModule",
      "Import UsersController",
      "Restart Node.js",
      "Create another UsersService",
    ],
    answer: 0,
    explanation:
      "The consuming module should import UsersModule, provided UsersModule exports UsersService.",
  },

  {
    question:
      "Which decorator is commonly used to define a route that receives a PATCH request?",
    options: ["@Change()", "@Patch()", "@Update()", "@Modify()"],
    answer: 1,
    explanation:
      "The @Patch() decorator maps a controller method to HTTP PATCH requests.",
  },

  {
    question: "What does `@Controller('users')` usually do?",
    options: [
      "Adds `users` as the base path for the controller's routes",
      "Creates a users database",
      "Validates users",
      "Creates a UsersService automatically",
    ],
    answer: 0,
    explanation:
      "The string passed to @Controller() is used as the base route path.",
  },

  {
    question:
      "If a controller uses `@Controller('users')` and a method uses `@Get(':id')`, which URL would match it?",
    options: ["/users/:id", "/users/123", "/:users/123", "/get/users/123"],
    answer: 1,
    explanation:
      "A route parameter such as :id is replaced by an actual value, so `/users/123` matches the route.",
  },

  {
    question:
      "What does an HTTP 404 response generally mean in a NestJS application?",
    options: [
      "The request was successful",
      "The requested resource or route was not found",
      "The server has restarted",
      "The request contains valid data",
    ],
    answer: 1,
    explanation:
      "HTTP 404 means the requested resource or route could not be found.",
  },

  {
    question: "Which NestJS exception represents an HTTP 404 error?",
    options: [
      "BadRequestException",
      "UnauthorizedException",
      "NotFoundException",
      "ForbiddenException",
    ],
    answer: 2,
    explanation:
      "NotFoundException is used when the requested resource cannot be found.",
  },

  {
    question:
      "Which exception is commonly used when incoming request data is invalid?",
    options: [
      "BadRequestException",
      "NotFoundException",
      "ConflictException",
      "ForbiddenException",
    ],
    answer: 0,
    explanation:
      "BadRequestException corresponds to HTTP 400 and is commonly used for invalid client input.",
  },

  {
    question: "Which exception usually represents an authentication failure?",
    options: [
      "UnauthorizedException",
      "NotFoundException",
      "ConflictException",
      "BadGatewayException",
    ],
    answer: 0,
    explanation:
      "UnauthorizedException corresponds to HTTP 401 and is commonly used when authentication is missing or invalid.",
  },

  {
    question:
      "Which exception is commonly used when an authenticated user does not have permission to perform an action?",
    options: [
      "UnauthorizedException",
      "ForbiddenException",
      "NotFoundException",
      "BadRequestException",
    ],
    answer: 1,
    explanation:
      "ForbiddenException corresponds to HTTP 403 and is commonly used when the user is authenticated but lacks permission.",
  },

  {
    question: "What is middleware in NestJS commonly used for?",
    options: [
      "Running logic before a request reaches the route handler",
      "Creating TypeScript interfaces",
      "Defining database columns",
      "Building React components",
    ],
    answer: 0,
    explanation:
      "Middleware can execute logic during the request-processing pipeline before the request reaches the controller handler.",
  },

  {
    question:
      "Which NestJS component is commonly used to check whether a user is allowed to access a route?",
    options: ["Guard", "DTO", "Repository", "Module"],
    answer: 0,
    explanation:
      "Guards determine whether a request should be allowed to continue to a route handler.",
  },

  {
    question:
      "Which decorator is commonly used to apply a guard to a controller or route?",
    options: ["@UseGuards()", "@ApplyGuard()", "@Guard()", "@Protect()"],
    answer: 0,
    explanation:
      "The @UseGuards() decorator applies one or more guards to a controller or route handler.",
  },

  {
    question:
      "What does a guard normally return to allow a request to continue?",
    options: ["true", "false", "null", "undefined"],
    answer: 0,
    explanation:
      "A guard normally returns true when the request should be allowed to proceed.",
  },

  {
    question: "What happens when a guard denies a request?",
    options: [
      "The request continues normally",
      "The route handler is allowed to run anyway",
      "The request is prevented from reaching the route handler",
      "The database is automatically deleted",
    ],
    answer: 2,
    explanation:
      "When a guard denies a request, the route handler does not execute.",
  },

  {
    question: "What is an interceptor commonly used for in NestJS?",
    options: [
      "Adding logic around request handling",
      "Creating database tables",
      "Defining TypeScript types",
      "Installing npm packages",
    ],
    answer: 0,
    explanation:
      "Interceptors can run logic before and after a route handler and can also transform the returned data.",
  },

  {
    question: "Which decorator can be used to apply an interceptor?",
    options: [
      "@UseInterceptors()",
      "@Interceptor()",
      "@ApplyInterceptor()",
      "@WithInterceptor()",
    ],
    answer: 0,
    explanation:
      "The @UseInterceptors() decorator applies interceptors to controllers or route handlers.",
  },

  {
    question: "What is an exception filter primarily responsible for?",
    options: [
      "Handling and customizing exceptions",
      "Validating DTOs",
      "Creating database connections",
      "Registering modules",
    ],
    answer: 0,
    explanation:
      "Exception filters provide a way to catch and customize how exceptions are handled and returned.",
  },

  {
    question: "Which decorator can be used to apply an exception filter?",
    options: [
      "@UseFilters()",
      "@CatchErrors()",
      "@Exception()",
      "@HandleErrors()",
    ],
    answer: 0,
    explanation:
      "The @UseFilters() decorator can apply an exception filter to a controller or route.",
  },

  {
    question: "What does `@Req()` allow a controller method to access?",
    options: [
      "The incoming request object",
      "The application's database",
      "The current module",
      "The response status code only",
    ],
    answer: 0,
    explanation:
      "The @Req() decorator provides access to the underlying incoming request object.",
  },

  {
    question: "What does `@Res()` allow a controller method to access?",
    options: [
      "The response object",
      "The request body",
      "The database repository",
      "The module metadata",
    ],
    answer: 0,
    explanation:
      "The @Res() decorator provides access to the underlying response object.",
  },

  {
    question:
      "Why should a NestJS application generally separate controllers from services?",
    options: [
      "To keep request handling separate from business logic",
      "Because services cannot contain TypeScript",
      "Because controllers cannot return responses",
      "To avoid using modules",
    ],
    answer: 0,
    explanation:
      "Separating controllers and services helps keep HTTP/request concerns separate from business logic.",
  },
  {
    question: "Which file is commonly used to bootstrap a NestJS application?",
    options: ["main.ts", "index.html", "server.ts", "bootstrap.ts"],
    answer: 0,
    explanation:
      "main.ts is commonly used to create the Nest application and start the HTTP server.",
  },

  {
    question:
      "Which method is commonly used to create a NestJS application in main.ts?",
    options: [
      "NestFactory.create()",
      "NestApp.start()",
      "Nest.createServer()",
      "Application.bootstrap()",
    ],
    answer: 0,
    explanation: "NestFactory.create() creates a NestJS application instance.",
  },

  {
    question:
      "What does `app.listen(3000)` generally do in a NestJS application?",
    options: [
      "Connects to a database",
      "Starts listening for HTTP requests on port 3000",
      "Creates a new controller",
      "Validates incoming requests",
    ],
    answer: 1,
    explanation:
      "The listen method starts the HTTP server and makes it listen for requests on the specified port.",
  },

  {
    question:
      "Which file commonly contains the root module of a NestJS application?",
    options: [
      "app.module.ts",
      "main.module.ts",
      "root.module.ts",
      "index.module.ts",
    ],
    answer: 0,
    explanation:
      "In a standard NestJS project, AppModule in app.module.ts is commonly the root module.",
  },

  {
    question: "What is the purpose of `@Module()` metadata in NestJS?",
    options: [
      "To tell NestJS how the module is organized",
      "To create an HTTP server",
      "To validate passwords",
      "To generate database records",
    ],
    answer: 0,
    explanation:
      "The @Module() metadata describes controllers, providers, imports, and exports belonging to a module.",
  },

  {
    question:
      "Which package is commonly used to read environment variables from a `.env` file in NestJS?",
    options: [
      "@nestjs/config",
      "@nestjs/env",
      "@nestjs/variables",
      "@nestjs/settings",
    ],
    answer: 0,
    explanation:
      "The @nestjs/config package provides configuration utilities, including support for environment variables.",
  },

  {
    question:
      "What is the purpose of an environment variable such as `DATABASE_URL`?",
    options: [
      "To store configuration outside the application code",
      "To define a controller route",
      "To create a TypeScript class",
      "To replace a DTO",
    ],
    answer: 0,
    explanation:
      "Environment variables are commonly used to keep configuration such as database URLs outside the source code.",
  },

  {
    question:
      "Which object can be used in Node.js to directly access environment variables?",
    options: ["process.env", "process.config", "env.variables", "Node.env"],
    answer: 0,
    explanation:
      "Node.js exposes environment variables through the process.env object.",
  },

  {
    question:
      "Why should sensitive values such as database passwords generally not be hard-coded in a NestJS source file?",
    options: [
      "They may accidentally be exposed or committed to source control",
      "NestJS cannot read strings",
      "Passwords cannot be stored in variables",
      "TypeScript does not support passwords",
    ],
    answer: 0,
    explanation:
      "Keeping secrets outside source code reduces the risk of accidentally exposing them through source control or shared code.",
  },

  {
    question:
      "Which NestJS component is commonly responsible for communicating with a database through a repository?",
    options: ["Service", "Controller", "Guard", "Middleware"],
    answer: 0,
    explanation:
      "A service commonly coordinates database operations by using a repository or another data-access layer.",
  },

  {
    question: "In TypeORM, what does an entity generally represent?",
    options: [
      "A database table or database record structure",
      "An HTTP request",
      "A route guard",
      "A controller method",
    ],
    answer: 0,
    explanation:
      "A TypeORM entity defines the structure and mapping of data that is persisted in the database.",
  },

  {
    question:
      "Which decorator is commonly used to mark a class as a TypeORM entity?",
    options: ["@Entity()", "@Table()", "@Database()", "@Model()"],
    answer: 0,
    explanation:
      "The @Entity() decorator tells TypeORM that a class represents a database entity.",
  },

  {
    question:
      "Which TypeORM decorator is commonly used to define a primary key that automatically increments?",
    options: [
      "@PrimaryGeneratedColumn()",
      "@AutoId()",
      "@GeneratedId()",
      "@PrimaryAuto()",
    ],
    answer: 0,
    explanation:
      "@PrimaryGeneratedColumn() is commonly used for automatically generated primary keys.",
  },

  {
    question:
      "Which TypeORM decorator is commonly used to define a normal database column?",
    options: ["@Column()", "@Field()", "@DatabaseColumn()", "@Property()"],
    answer: 0,
    explanation:
      "The @Column() decorator defines a property that should be mapped to a database column.",
  },

  {
    question: "What is the main purpose of a repository in TypeORM?",
    options: [
      "To perform database operations for an entity",
      "To handle HTTP authentication",
      "To validate request DTOs",
      "To define application routes",
    ],
    answer: 0,
    explanation:
      "A repository provides methods for querying, creating, updating, and deleting records for an entity.",
  },

  {
    question:
      "Which repository method is commonly used to retrieve multiple records?",
    options: ["find()", "getAll()", "fetchMany()", "selectAll()"],
    answer: 0,
    explanation:
      "TypeORM repositories commonly use find() to retrieve multiple records.",
  },

  {
    question:
      "Which repository method can commonly be used to find one record matching specified conditions?",
    options: ["findOne()", "findSingle()", "getOneRecord()", "selectOne()"],
    answer: 0,
    explanation:
      "findOne() can retrieve a single entity matching specified conditions.",
  },

  {
    question: "What does `repository.save(entity)` commonly do?",
    options: [
      "Persists the entity to the database",
      "Deletes the entity",
      "Validates the controller",
      "Creates a new module",
    ],
    answer: 0,
    explanation:
      "The save method persists an entity and can insert a new record or update an existing one depending on the entity state.",
  },

  {
    question: "What does `repository.delete(id)` generally do?",
    options: [
      "Removes a record matching the given identifier",
      "Deletes the entire database",
      "Removes a NestJS module",
      "Deletes a controller route",
    ],
    answer: 0,
    explanation:
      "The delete method performs a database deletion based on the supplied criteria, such as an ID.",
  },

  {
    question:
      "Why are many database operations in NestJS written with `async` and `await`?",
    options: [
      "Database operations are commonly asynchronous",
      "NestJS requires every method to be async",
      "TypeScript only supports async functions",
      "Async automatically creates database tables",
    ],
    answer: 0,
    explanation:
      "Database operations often involve I/O and return Promises, so async and await make handling those operations easier.",
  },

  {
    question: "What does an `async` function return?",
    options: [
      "A Promise",
      "Only a string",
      "Only a number",
      "A database connection",
    ],
    answer: 0,
    explanation:
      "An async function always returns a Promise, even when it returns an ordinary value.",
  },

  {
    question: "What does `await` normally do when used with a Promise?",
    options: [
      "Waits for the Promise to settle before continuing that async function",
      "Deletes the Promise",
      "Converts the Promise into a database",
      "Stops the entire Node.js server",
    ],
    answer: 0,
    explanation:
      "await pauses execution of the current async function until the Promise settles and then provides its result or throws its error.",
  },

  {
    question:
      "Which HTTP status code commonly indicates that a resource was successfully created?",
    options: ["200", "201", "400", "404"],
    answer: 1,
    explanation:
      "HTTP 201 Created commonly indicates that a request successfully created a new resource.",
  },

  {
    question:
      "Which NestJS decorator can explicitly set the HTTP status code returned by a route?",
    options: ["@HttpCode()", "@Status()", "@ResponseCode()", "@Code()"],
    answer: 0,
    explanation:
      "The @HttpCode() decorator can specify the HTTP status code for a route handler.",
  },

  {
    question:
      "If a NestJS service method throws `new NotFoundException()`, what will normally happen?",
    options: [
      "NestJS returns an HTTP 404 response",
      "NestJS automatically restarts",
      "The request always returns HTTP 200",
      "The database is deleted",
    ],
    answer: 0,
    explanation:
      "NotFoundException represents an HTTP 404 error, which NestJS handles through its exception system.",
  },
  {
    question: "What is the purpose of `@Inject()` in NestJS?",
    options: [
      "To explicitly specify a dependency to inject",
      "To create a new controller",
      "To validate a DTO",
      "To create a database table",
    ],
    answer: 0,
    explanation:
      "The @Inject() decorator can explicitly tell NestJS which dependency or injection token should be provided.",
  },

  {
    question: "What is an injection token used for in NestJS?",
    options: [
      "Identifying a dependency in the dependency injection system",
      "Authenticating a user's password",
      "Identifying an HTTP request",
      "Creating a database primary key",
    ],
    answer: 0,
    explanation:
      "An injection token identifies a dependency that NestJS should provide through its dependency injection system.",
  },

  {
    question:
      "Which of these can be used as a custom provider token in NestJS?",
    options: [
      "A string",
      "Only a number",
      "Only an HTTP method",
      "Only a database table",
    ],
    answer: 0,
    explanation:
      "NestJS allows custom providers to use tokens such as strings, symbols, or classes.",
  },

  {
    question:
      "What does `useValue` allow you to do in a NestJS custom provider?",
    options: [
      "Provide a specific existing value",
      "Automatically create a database table",
      "Create an HTTP route",
      "Validate every request",
    ],
    answer: 0,
    explanation:
      "useValue allows a provider token to resolve to a specific value or object.",
  },

  {
    question: "What does `useClass` allow a NestJS provider to specify?",
    options: [
      "Which class should be instantiated for the provider",
      "Which database table should be deleted",
      "Which HTTP method should be used",
      "Which DTO should be validated",
    ],
    answer: 0,
    explanation:
      "useClass tells NestJS which class should be used when resolving a provider.",
  },

  {
    question: "What does `useFactory` allow a NestJS provider to do?",
    options: [
      "Create a dependency using a factory function",
      "Create frontend components",
      "Automatically generate controllers",
      "Replace the TypeScript compiler",
    ],
    answer: 0,
    explanation:
      "useFactory allows a provider's value to be created by a factory function.",
  },

  {
    question:
      "What happens when a provider is registered in a module's `providers` array?",
    options: [
      "NestJS can manage and inject that provider",
      "The provider becomes a database table",
      "The provider automatically becomes a controller",
      "The provider is automatically exported to every module",
    ],
    answer: 0,
    explanation:
      "Registering a provider tells NestJS's dependency injection system how to provide that dependency within the module.",
  },

  {
    question:
      "What is the main benefit of organizing a NestJS application into feature modules?",
    options: [
      "It keeps related functionality organized and separated",
      "It removes the need for services",
      "It prevents the use of databases",
      "It makes every route public",
    ],
    answer: 0,
    explanation:
      "Feature modules group related controllers, services, and other providers, making larger applications easier to organize.",
  },

  {
    question:
      "A `UsersModule` would most naturally contain which related components?",
    options: [
      "UsersController and UsersService",
      "OrdersController and PaymentService",
      "Only main.ts",
      "Only package.json",
    ],
    answer: 0,
    explanation:
      "A feature module normally groups components that belong to the same feature, such as users.",
  },

  {
    question: "What is a dynamic module in NestJS?",
    options: [
      "A module whose configuration can be determined when it is imported",
      "A module that changes its name every request",
      "A module that only works with JavaScript",
      "A module that automatically creates database tables",
    ],
    answer: 0,
    explanation:
      "Dynamic modules allow modules to be configured with values or providers when they are imported.",
  },

  {
    question:
      "Which NestJS concept is useful when a module needs configuration supplied by another module?",
    options: [
      "Module imports and exports",
      "HTML attributes",
      "CSS selectors",
      "Database indexes only",
    ],
    answer: 0,
    explanation:
      "NestJS modules can import other modules and consume providers that those modules export.",
  },

  {
    question: "What does `@Global()` do when applied to a NestJS module?",
    options: [
      "Makes the module's exported providers available throughout the application without importing the module everywhere",
      "Makes every route public",
      "Makes all database tables global",
      "Turns the module into a controller",
    ],
    answer: 0,
    explanation:
      "A global module can make its exported providers available to other modules without requiring each module to explicitly import it.",
  },

  {
    question:
      "Which NestJS feature is most appropriate for checking a user's role before allowing access to a route?",
    options: ["Guard", "Entity", "DTO", "Repository"],
    answer: 0,
    explanation:
      "Guards are designed to determine whether a request should be allowed to reach a route handler, making them suitable for authorization checks.",
  },

  {
    question:
      "What is the difference between authentication and authorization?",
    options: [
      "Authentication verifies identity, while authorization determines permissions",
      "Authentication creates databases, while authorization deletes them",
      "They mean exactly the same thing",
      "Authorization verifies identity, while authentication determines permissions",
    ],
    answer: 0,
    explanation:
      "Authentication answers 'Who are you?', while authorization answers 'What are you allowed to do?'",
  },

  {
    question:
      "Which NestJS feature is commonly used to transform incoming data before it reaches a controller method?",
    options: ["Pipe", "Guard", "Module", "Entity"],
    answer: 0,
    explanation:
      "Pipes can transform incoming arguments before they are passed to the route handler.",
  },

  {
    question:
      "What can a validation pipe do when incoming data fails validation?",
    options: [
      "Reject the request",
      "Automatically fix every invalid value",
      "Delete the user",
      "Restart the server",
    ],
    answer: 0,
    explanation:
      "A validation pipe can reject invalid input and cause an appropriate HTTP error response.",
  },

  {
    question: "What does `@IsEmail()` from class-validator generally check?",
    options: [
      "Whether a value has a valid email format",
      "Whether a password is encrypted",
      "Whether a user exists in the database",
      "Whether an email has been delivered",
    ],
    answer: 0,
    explanation:
      "@IsEmail() validates that a value conforms to an email address format.",
  },

  {
    question: "What does `@IsNotEmpty()` generally validate?",
    options: [
      "That a value is not empty",
      "That a value is a valid email",
      "That a value is a database ID",
      "That a value is encrypted",
    ],
    answer: 0,
    explanation: "@IsNotEmpty() checks that a value is not empty.",
  },

  {
    question: "What does `@IsInt()` from class-validator generally check?",
    options: [
      "Whether a value is an integer",
      "Whether a value is a string",
      "Whether a value is an email",
      "Whether a value is a Boolean",
    ],
    answer: 0,
    explanation: "@IsInt() validates that a value is an integer.",
  },

  {
    question:
      "Which decorator can retrieve a specific HTTP header from a request?",
    options: [
      "@Headers()",
      "@HeaderValue()",
      "@RequestHeader()",
      "@HttpHeader()",
    ],
    answer: 0,
    explanation:
      "The @Headers() decorator can access HTTP request headers and can also retrieve a specific header by name.",
  },

  {
    question: "What is the purpose of `@SetMetadata()` in NestJS?",
    options: [
      "Attach custom metadata to a route or class",
      "Create a database table",
      "Set an HTTP response body",
      "Validate a password",
    ],
    answer: 0,
    explanation:
      "@SetMetadata() attaches custom metadata that can later be read by features such as guards or custom decorators.",
  },

  {
    question:
      "Which NestJS component can read route metadata to make authorization decisions?",
    options: ["Guard", "Entity", "Repository", "DTO"],
    answer: 0,
    explanation:
      "Guards can use metadata attached to routes to determine whether a request should be allowed.",
  },

  {
    question: "What does `@UsePipes()` allow you to do?",
    options: [
      "Apply one or more pipes to a controller or route",
      "Create a database connection",
      "Register a provider",
      "Create a new module",
    ],
    answer: 0,
    explanation:
      "The @UsePipes() decorator applies pipes to a controller class or route handler.",
  },

  {
    question: "What does `@UseGuards()` allow you to do?",
    options: [
      "Apply one or more guards to a controller or route",
      "Apply database migrations",
      "Create DTO properties",
      "Register entities",
    ],
    answer: 0,
    explanation:
      "The @UseGuards() decorator applies guards to a controller or specific route handlers.",
  },

  {
    question: "What does `@UseInterceptors()` allow you to do?",
    options: [
      "Apply one or more interceptors to a controller or route",
      "Create a TypeORM entity",
      "Register environment variables",
      "Validate a database password",
    ],
    answer: 0,
    explanation:
      "The @UseInterceptors() decorator applies interceptors to controllers or individual route handlers.",
  },

  {
    question:
      "Which component is generally closest to the incoming HTTP request in a typical NestJS application?",
    options: ["Controller", "Repository", "Entity", "Database"],
    answer: 0,
    explanation:
      "The controller receives the incoming HTTP request and typically passes the work to application services.",
  },

  {
    question:
      "A controller receives a request to create an order. Which layer would normally contain the business rules for creating the order?",
    options: ["Service", "Controller decorator", "Module", "Entity decorator"],
    answer: 0,
    explanation:
      "The service layer commonly contains business rules and coordinates the operations required to create an order.",
  },

  {
    question:
      "If a service needs to check whether a customer exists before creating an order, what is a common approach?",
    options: [
      "Have the service use the appropriate customer-related service or data-access layer",
      "Put the database password in the controller",
      "Create another HTTP server",
      "Put the logic inside @Controller()",
    ],
    answer: 0,
    explanation:
      "A service can use another service or data-access component to perform related checks while keeping responsibilities separated.",
  },

  {
    question:
      "Why is dependency injection useful when one NestJS service needs another service?",
    options: [
      "NestJS can provide the required service instead of the class manually creating it",
      "It removes the need for TypeScript",
      "It automatically creates API documentation",
      "It makes database queries synchronous",
    ],
    answer: 0,
    explanation:
      "Dependency injection lets NestJS manage and provide dependencies, reducing manual object creation and improving separation of responsibilities.",
  },
];
